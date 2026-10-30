# bendi.dev

Mi web personal: sobre mí, la zona arcade con mis juegos y las visitas de cada proyecto.

**[bendi.dev](https://bendi.dev)** · también en [serbenda.github.io](https://serbenda.github.io)

## Cómo funciona

- Es una página estática (`index.html`), sin dependencias ni cookies. GitHub Pages la publica desde la rama `main`.
- Los juegos viven cada uno en su repo con su propio GitHub Pages y aparecen solos en `bendi.dev/<nombre-del-repo>`.
- Lo que muestra la web de cada proyecto (título, textos, etiquetas y captura) está en [`data/projects.json`](data/projects.json). Las capturas están en `img/games/`.
- Las visitas las recoge cada mañana el workflow de [serbenda/serbenda](https://github.com/serbenda/serbenda) y la web las lee de allí.
- `og.html` y `header.html` son las plantillas de la imagen para compartir (`og.png`) y de la cabecera del README del perfil.
- Las fuentes están en `fonts/`, todas con licencia SIL Open Font License.
