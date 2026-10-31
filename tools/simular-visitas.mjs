#!/usr/bin/env node
// Simulador de visitas y partidas para probar el panel de bendi.dev EN LOCAL.
//
// Genera datos de ejemplo con el mismo formato que recoge el workflow de serbenda/serbenda
// (vistas de GitHub, visitas a las webs y juegos, partidas, procedencia) en data/traffic.demo.json,
// arranca un servidor en tu ordenador y te da la dirección para verlo. Con --en-vivo sigue
// sumando visitas y partidas cada pocos segundos, y la página se refresca sola.
//
// No envía nada a GoatCounter ni a GitHub: los datos solo existen en tu ordenador, y la web
// solo los lee cuando la abres en localhost con ?demo. El fichero está en .gitignore.
//
// Uso:
//   node tools/simular-visitas.mjs                 60 días de datos y servidor en el puerto 8080
//   node tools/simular-visitas.mjs --en-vivo       además, añade visitas y partidas sin parar
//   node tools/simular-visitas.mjs --dias 120 --semilla 3 --puerto 9000
//   node tools/simular-visitas.mjs --sin-servidor  solo genera el fichero

import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
const SALIDA = join(RAIZ, 'data', 'traffic.demo.json');

// ---------------------------------------------------------------- opciones
const args = process.argv.slice(2);
const opcion = (nombre, porDefecto) => {
  const i = args.indexOf(`--${nombre}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? Number(args[i + 1]) : porDefecto;
};
const DIAS = opcion('dias', 60);
const PUERTO = opcion('puerto', 8080);
const EN_VIVO = args.includes('--en-vivo');
const SIN_SERVIDOR = args.includes('--sin-servidor');
let semilla = opcion('semilla', 7);

// Aleatorio con semilla, para que la misma semilla dé siempre los mismos datos
const azar = () => ((semilla = (semilla * 1103515245 + 12345) % 2147483648) / 2147483648);
const normal = (media, desv) => media + desv * Math.sqrt(-2 * Math.log(azar() || 1e-9)) * Math.cos(2 * Math.PI * azar());
const entero = (media, desv) => Math.max(0, Math.round(normal(media, desv)));

// ---------------------------------------------------------------- proyectos
const proyectos = JSON.parse(await readFile(join(RAIZ, 'data', 'projects.json'), 'utf8'));
const juegos = proyectos.games.map((g) => g.repo);
// Popularidad de ejemplo: [vistas en GitHub al día, visitas a la web al día, partidas por visita]
const POPULARIDAD = {
  'serbenda.github.io': [5, 55, 0], serbenda: [6, 0, 0], bolsillo: [4, 70, 0], hucha: [2, 20, 0],
  'dungeons-and-deployments': [14, 40, 0.45], chapas: [8, 30, 0.55], 'story-reader': [5, 22, 0.6],
  'hemiciclo-fighters': [4, 18, 0.5], 'school-rush': [3, 12, 0.4],
};
const SIN_WEB = new Set(['serbenda', 'frameblock', 'bankinter-visa-pdf-to-csv', 'deploy-quest']); // sin web publicada
const repos = [...new Set(['serbenda.github.io', 'serbenda', 'bolsillo', 'hucha', ...juegos, ...proyectos.tools.map((t) => t.repo)])];
const PROCEDENCIAS = ['linkedin.com', 'bendi.dev', 'google.com', 'github.com', 't.co', 'duckduckgo.com'];

const hoy = new Date();
const dias = Array.from({ length: DIAS }, (_, i) => {
  const d = new Date(Date.UTC(hoy.getUTCFullYear(), hoy.getUTCMonth(), hoy.getUTCDate() - (DIAS - 1 - i)));
  return d.toISOString().slice(0, 10);
});

function url(repo) {
  if (repo === 'serbenda.github.io') return ['https://bendi.dev/', '/'];
  if (repo === 'bolsillo' || repo === 'hucha') return [`https://${repo}.bendi.dev/`, `/${repo}/`];
  return [`https://bendi.dev/${repo}/`, `/${repo}/`];
}

// ---------------------------------------------------------------- generar
const datos = { user: 'serbenda', goatcounter: 'serbenda', demo: true, repos: {}, site: {} };
for (const repo of repos) {
  const [vistas, visitas, juega] = POPULARIDAD[repo] ?? [1.5, 0, 0];
  const web = !SIN_WEB.has(repo) && visitas > 0;
  const e = {
    url: `https://github.com/serbenda/${repo}`, description: '', language: 'JavaScript',
    stars: entero(3, 2), pages: web, views: {}, clones: {}, pages_hits: {},
    referrers: PROCEDENCIAS.slice(0, 2 + Math.floor(azar() * 4)).map((referrer) => ({ referrer, count: entero(40, 25), uniques: entero(18, 10) })),
  };
  if (web) [e.pages_url, e.pages_path] = url(repo);
  let visitasTotal = 0, partidasTotal = 0;
  dias.forEach((dia, i) => {
    const crece = 1 + i / DIAS;                                         // poco a poco viene más gente
    const finde = [0, 6].includes(new Date(`${dia}T12:00:00Z`).getUTCDay()) ? 1.35 : 1;
    const pico = azar() < 0.04 ? 3 : 1;                                 // algún día se comparte y se dispara
    const v = entero(vistas * crece * pico, vistas * 0.4);
    e.views[dia] = [v, Math.round(v * 0.6)];
    e.clones[dia] = [entero(vistas * 0.3, 1), entero(vistas * 0.2, 1)];
    if (web) {
      visitasTotal += entero(visitas * crece * finde * pico, visitas * 0.3);
      e.pages_hits[dia] = visitasTotal;                                 // como GoatCounter: acumulado
      if (juega) {
        partidasTotal += Math.round((e.pages_hits[dia] - (e.pages_hits[dias[i - 1]] ?? 0)) * juega * (0.8 + azar() * 0.4));
        (e.plays ??= {})[dia] = partidasTotal;
      }
    }
  });
  datos.repos[repo] = e;
}
// Lo que da la API de GoatCounter con la clave opcional: móvil u ordenador, países y procedencia
const PAISES = ['Spain', 'Mexico', 'Argentina', 'United States', 'Colombia', 'Germany', 'France', 'United Kingdom', 'Chile', 'Portugal'];
const WEBS = ['linkedin.com', 'Google', 'github.com', 'bendi.dev', 't.co', 'DuckDuckGo', '(unknown)'];
const gc = (n, movil) => ({
  devices: { phone: Math.round(n * movil), computer: Math.round(n * (1 - movil)) },
  referrers: WEBS.slice(0, 5).map((name, i) => ({ name, count: Math.max(1, Math.round(n * 0.35 / (i + 1.4))) })),
});
for (const repo of repos) {
  const e = datos.repos[repo];
  if (!e.pages) continue;
  const ultimos30 = (e.pages_hits[dias.at(-1)] ?? 0) - (e.pages_hits[dias.at(-31)] ?? 0);
  e.gc = gc(ultimos30, juegos.includes(repo) ? 0.55 + azar() * 0.25 : 0.35 + azar() * 0.2);
}
const ultimos30 = Object.values(datos.repos).reduce((s, e) => s + (e.gc ? e.gc.devices.phone + e.gc.devices.computer : 0), 0);
datos.gc = {
  days: 30, start: dias.at(-31) ?? dias[0], end: dias.at(-1),
  ...gc(ultimos30, 0.5),
  devices: Object.values(datos.repos).reduce((t, e) => (e.gc ? { phone: t.phone + e.gc.devices.phone, computer: t.computer + e.gc.devices.computer } : t), { phone: 0, computer: 0 }),
  countries: PAISES.map((name, i) => ({ name, count: Math.max(1, Math.round(ultimos30 * (i ? 0.25 : 0.6) / (i || 1) ** 1.2)) })),
};

const recalcularTotal = () => {
  let total = 0;
  dias.forEach((dia, i) => {
    for (const e of Object.values(datos.repos)) total += (e.pages_hits[dia] ?? 0) - (e.pages_hits[dias[i - 1]] ?? 0);
    datos.site[dia] = total;
  });
};
recalcularTotal();

const guardar = async () => {
  datos.updated = new Date().toISOString();
  await writeFile(SALIDA, JSON.stringify(datos));
};
await guardar();
const total = datos.site[dias.at(-1)];
const partidas = juegos.reduce((s, j) => s + (datos.repos[j]?.plays?.[dias.at(-1)] ?? 0), 0);
console.log(`✔ ${DIAS} días simulados: ${total.toLocaleString('es-ES')} visitas y ${partidas.toLocaleString('es-ES')} partidas → data/traffic.demo.json`);

// ---------------------------------------------------------------- en vivo
if (EN_VIVO) {
  const ultimo = dias.at(-1);
  setInterval(async () => {
    const quien = repos.filter((r) => datos.repos[r].pages)[Math.floor(azar() * repos.filter((r) => datos.repos[r].pages).length)];
    const e = datos.repos[quien];
    const llegan = 1 + Math.floor(azar() * 4);
    e.pages_hits[ultimo] += llegan;
    e.views[ultimo][0] += azar() < 0.3 ? 1 : 0;
    let juegan = 0;
    if (e.plays) { juegan = [...Array(llegan)].filter(() => azar() < 0.5).length; e.plays[ultimo] += juegan; }
    recalcularTotal();
    await guardar();
    console.log(`  +${llegan} ${llegan === 1 ? 'visita' : 'visitas'} a ${quien}${juegan ? `, ${juegan} ${juegan === 1 ? 'partida' : 'partidas'}` : ''}`);
  }, 3000);
}

// ---------------------------------------------------------------- servidor
if (!SIN_SERVIDOR) {
  const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.woff': 'font/woff', '.pdf': 'application/pdf', '.txt': 'text/plain' };
  createServer(async (req, res) => {
    let ruta = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (ruta.endsWith('/')) ruta += 'index.html';
    const fichero = normalize(join(RAIZ, ruta));
    if (!fichero.startsWith(RAIZ)) { res.writeHead(403).end(); return; }
    try {
      const cuerpo = await readFile(fichero);
      res.writeHead(200, { 'Content-Type': TIPOS[extname(fichero)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' }).end(cuerpo);
    } catch { res.writeHead(404).end('No encontrado'); }
  }).listen(PUERTO, '127.0.0.1', () => {
    console.log(`\n  Abre http://localhost:${PUERTO}/?demo#visitas\n`);
    console.log(EN_VIVO ? '  Simulando visitas y partidas cada 3 segundos. Ctrl+C para parar.' : '  Ctrl+C para parar. Con --en-vivo, las visitas siguen llegando solas.');
  });
}
