#!/usr/bin/env node
// Visits and plays simulator, to try the bendi.dev visits dashboard LOCALLY.
//
// Writes sample data to data/traffic.demo.json in the same format the workflow in
// serbenda/serbenda collects (GitHub views, site and game visits, plays, referrers), starts
// a server on your computer and prints the address to open. With --live it keeps adding
// visits and plays every few seconds, and the page refreshes itself.
//
// Nothing is sent to GoatCounter or GitHub: the data only exists on your computer, and the
// site only reads it when opened on localhost with ?demo. The file is in .gitignore.
//
// Usage:
//   node tools/simulate-visits.mjs                 60 days of data and a server on port 8080
//   node tools/simulate-visits.mjs --live          also keeps adding visits and plays
//   node tools/simulate-visits.mjs --days 120 --seed 3 --port 9000
//   node tools/simulate-visits.mjs --no-server     only writes the file

import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUTPUT = join(ROOT, 'data', 'traffic.demo.json');

// ---------------------------------------------------------------- options
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? Number(args[i + 1]) : fallback;
};
const DAYS = option('days', 60);
const PORT = option('port', 8080);
const LIVE = args.includes('--live');
const NO_SERVER = args.includes('--no-server');
let seed = option('seed', 7);

// Seeded random numbers, so the same seed always gives the same data
const random = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const normal = (mean, sd) => mean + sd * Math.sqrt(-2 * Math.log(random() || 1e-9)) * Math.cos(2 * Math.PI * random());
const count = (mean, sd) => Math.max(0, Math.round(normal(mean, sd)));

// ---------------------------------------------------------------- projects
const projects = JSON.parse(await readFile(join(ROOT, 'data', 'projects.json'), 'utf8'));
const games = projects.games.map((g) => g.repo);
// Sample popularity: [GitHub views a day, site visits a day, plays per visit]
const POPULARITY = {
  'serbenda.github.io': [5, 55, 0], serbenda: [6, 0, 0], bolsillo: [4, 70, 0], hucha: [2, 20, 0],
  'dungeons-and-deployments': [14, 40, 0.45], chapas: [8, 30, 0.55], 'story-reader': [5, 22, 0.6],
  'hemiciclo-fighters': [4, 18, 0.5], 'school-rush': [3, 12, 0.4],
};
const NO_SITE = new Set(['serbenda', 'frameblock', 'bankinter-visa-pdf-to-csv', 'deploy-quest']); // no published site
const repos = [...new Set(['serbenda.github.io', 'serbenda', 'bolsillo', 'hucha', ...games, ...projects.tools.map((t) => t.repo)])];
const SOURCES = ['linkedin.com', 'bendi.dev', 'google.com', 'github.com', 't.co', 'duckduckgo.com'];

const now = new Date();
const days = Array.from({ length: DAYS }, (_, i) => {
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - (DAYS - 1 - i)));
  return d.toISOString().slice(0, 10);
});

function url(repo) {
  if (repo === 'serbenda.github.io') return ['https://bendi.dev/', '/'];
  if (repo === 'bolsillo' || repo === 'hucha') return [`https://${repo}.bendi.dev/`, `/${repo}/`];
  return [`https://bendi.dev/${repo}/`, `/${repo}/`];
}

// ---------------------------------------------------------------- generate
const data = { user: 'serbenda', goatcounter: 'serbenda', demo: true, repos: {}, site: {} };
for (const repo of repos) {
  const [views, visits, playRate] = POPULARITY[repo] ?? [1.5, 0, 0];
  const site = !NO_SITE.has(repo) && visits > 0;
  const e = {
    url: `https://github.com/serbenda/${repo}`, description: '', language: 'JavaScript',
    stars: count(3, 2), pages: site, views: {}, clones: {}, pages_hits: {},
    referrers: SOURCES.slice(0, 2 + Math.floor(random() * 4)).map((referrer) => ({ referrer, count: count(40, 25), uniques: count(18, 10) })),
  };
  if (site) [e.pages_url, e.pages_path] = url(repo);
  let visitsTotal = 0, playsTotal = 0;
  days.forEach((day, i) => {
    const growth = 1 + i / DAYS;                                        // more people little by little
    const weekend = [0, 6].includes(new Date(`${day}T12:00:00Z`).getUTCDay()) ? 1.35 : 1;
    const peak = random() < 0.04 ? 3 : 1;                                 // some days it gets shared and spikes
    const v = count(views * growth * peak, views * 0.4);
    e.views[day] = [v, Math.round(v * 0.6)];
    e.clones[day] = [count(views * 0.3, 1), count(views * 0.2, 1)];
    if (site) {
      visitsTotal += count(visits * growth * weekend * peak, visits * 0.3);
      e.pages_hits[day] = visitsTotal;                                  // like the collector: running total
      if (playRate) {
        playsTotal += Math.round((e.pages_hits[day] - (e.pages_hits[days[i - 1]] ?? 0)) * playRate * (0.8 + random() * 0.4));
        (e.plays ??= {})[day] = playsTotal;
      }
    }
  });
  data.repos[repo] = e;
}
// What the GoatCounter API gives with the optional key: phone or computer, countries and referrers
const COUNTRIES = ['Spain', 'Mexico', 'Argentina', 'United States', 'Colombia', 'Germany', 'France', 'United Kingdom', 'Chile', 'Portugal'];
const REFERRERS = ['linkedin.com', 'Google', 'github.com', 'bendi.dev', 't.co', 'DuckDuckGo', '(unknown)'];
const gc = (n, phone) => ({
  devices: { phone: Math.round(n * phone), computer: Math.round(n * (1 - phone)) },
  referrers: REFERRERS.slice(0, 5).map((name, i) => ({ name, count: Math.max(1, Math.round(n * 0.35 / (i + 1.4))) })),
});
for (const repo of repos) {
  const e = data.repos[repo];
  if (!e.pages) continue;
  const last30 = (e.pages_hits[days.at(-1)] ?? 0) - (e.pages_hits[days.at(-31)] ?? 0);
  e.gc = gc(last30, games.includes(repo) ? 0.55 + random() * 0.25 : 0.35 + random() * 0.2);
}
const last30 = Object.values(data.repos).reduce((s, e) => s + (e.gc ? e.gc.devices.phone + e.gc.devices.computer : 0), 0);
data.gc = {
  days: 30, start: days.at(-31) ?? days[0], end: days.at(-1),
  ...gc(last30, 0.5),
  devices: Object.values(data.repos).reduce((t, e) => (e.gc ? { phone: t.phone + e.gc.devices.phone, computer: t.computer + e.gc.devices.computer } : t), { phone: 0, computer: 0 }),
  countries: COUNTRIES.map((name, i) => ({ name, count: Math.max(1, Math.round(last30 * (i ? 0.25 : 0.6) / (i || 1) ** 1.2)) })),
};

const recomputeTotal = () => {
  let total = 0;
  days.forEach((day, i) => {
    for (const e of Object.values(data.repos)) total += (e.pages_hits[day] ?? 0) - (e.pages_hits[days[i - 1]] ?? 0);
    data.site[day] = total;
  });
};
recomputeTotal();

const save = async () => {
  data.updated = new Date().toISOString();
  await writeFile(OUTPUT, JSON.stringify(data));
};
await save();
const total = data.site[days.at(-1)];
const plays = games.reduce((sum, g) => sum + (data.repos[g]?.plays?.[days.at(-1)] ?? 0), 0);
console.log(`✔ ${DAYS} days simulated: ${total.toLocaleString('en-US')} visits and ${plays.toLocaleString('en-US')} plays → data/traffic.demo.json`);

// ---------------------------------------------------------------- live
if (LIVE) {
  const last = days.at(-1);
  setInterval(async () => {
    const who = repos.filter((r) => data.repos[r].pages)[Math.floor(random() * repos.filter((r) => data.repos[r].pages).length)];
    const e = data.repos[who];
    const arrive = 1 + Math.floor(random() * 4);
    e.pages_hits[last] += arrive;
    e.views[last][0] += random() < 0.3 ? 1 : 0;
    let played = 0;
    if (e.plays) { played = [...Array(arrive)].filter(() => random() < 0.5).length; e.plays[last] += played; }
    recomputeTotal();
    await save();
    console.log(`  +${arrive} ${arrive === 1 ? 'visit' : 'visits'} to ${who}${played ? `, ${played} ${played === 1 ? 'play' : 'plays'}` : ''}`);
  }, 3000);
}

// ---------------------------------------------------------------- server
if (!NO_SERVER) {
  const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.woff': 'font/woff', '.pdf': 'application/pdf', '.txt': 'text/plain' };
  createServer(async (req, res) => {
    let route = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (route.endsWith('/')) route += 'index.html';
    const file = normalize(join(ROOT, route));
    if (!file.startsWith(ROOT)) { res.writeHead(403).end(); return; }
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' }).end(body);
    } catch { res.writeHead(404).end('Not found'); }
  }).listen(PORT, '127.0.0.1', () => {
    console.log(`\n  Open http://localhost:${PORT}/visitas/?demo\n`);
    console.log(LIVE ? '  Simulating visits and plays every 3 seconds. Ctrl+C to stop.' : '  Ctrl+C to stop. With --live, visits keep coming in.');
  });
}
