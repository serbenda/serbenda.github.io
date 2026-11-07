/* Old links to sections of the single page (bendi.dev/#arcade…) now open their own page */
(() => {
  const moved = { "#sobre-mi": "/trabajo/#sobre-mi", "#como-trabajo": "/trabajo/#como-trabajo", "#blockchain": "/trabajo/#blockchain",
    "#arcade": "/arcade/", "#otros": "/proyectos/", "#visitas": "/visitas/" };
  if (/^\/(index\.html)?$/.test(location.pathname) && moved[location.hash]) location.replace(moved[location.hash] + location.search.replace(/^\?$/, ""));
})();
const T = {
  es: {
    "nav.home": "Inicio", "nav.work": "Trabajo", "nav.projects": "Proyectos",
    "feat.title": "Lo último que he hecho", "feat.lead": "Apps para el día a día y juegos hechos en casa. Todo gratis, en el navegador y sin registro.", "feat.apps": "Apps y webs", "feat.games": "Juegos", "feat.allapps": "Ver todas las apps →", "feat.arcade": "Ir al arcade →",
    "work.lead": "20 años en sistemas: de las guardias 24x7 en UNIX a la infraestructura como código en la nube.",
    "nav.about": "Sobre mí", "nav.arcade": "ARCADE", "nav.visits": "Visitas",
    "hero.pitch": "Llevo 20 años quitando botones: primero scripts en UNIX, luego Ansible y Terraform, y hoy plataformas enteras de automatización en la nube. Cada botón que desaparece es una guardia menos, un error humano menos y un equipo que dedica su tiempo a algo mejor. En casa hago juegos de 8 bits con mis hijas.",
    "hero.cbr": "· Si lo pulsas dos veces, lo automatizo.",
    "hero.play": "▶ JUGAR",
    "hero.cv": "⬇ CV", "c.cv": "⬇ Descargar CV", "nav.how": "Cómo trabajo", "sx.1": "años en sistemas y automatización", "sx.2": "servidores en una sola granja UNIX… y otros tantos botones quitados 🔘", "sx.3": "nubes gestionadas como código: AWS, Azure, Google Cloud y privada", "sx.4": "mejor proyecto del Máster en Blockchain", "sx.5": "juegos hechos en casa con mis hijas", "term.title": "Terminal", "term.aria": "Escribe un comando", "how.title": "Cómo trabajo", "how.lead": "Cuatro reglas que me han servido en 20 años de producción.", "how.ex": "Ejemplo:", "how.1": "Si se hace dos veces, se automatiza", "how.1d": "Lo manual no escala y se olvida. Cada tarea repetida acaba en un script, un playbook o una imagen base.", "how.1e": "imágenes de sistema operativo con Packer y el trabajo repetitivo con Ansible, Python y Bash.", "how.2": "Infraestructura como código, o no existe", "how.2d": "Si no está versionada y revisada, no se puede repetir. La infraestructura se define, se revisa y se aplica como cualquier software.", "how.2e": "la plataforma de Terraform Enterprise que aprovisiona en AWS, Azure, Google Cloud y nube privada.", "how.3": "Producción manda", "how.3d": "Años de guardias 24x7 enseñan a medir antes de que duela y a dejar las cosas más estables de lo que estaban.", "how.3e": "planificación de capacidad con OpenTSDB y Grafana para una granja de 12.000 servidores.", "how.4": "Hacer fácil el trabajo de los demás", "how.4d": "La mejor automatización es la que otros equipos usan sin pensar. Plataformas, plantillas y pipelines antes que heroicidades.", "how.4e": "ayudar a los equipos de desarrollo con sus pipelines de CI/CD y unificar equipos de entrega UNIX.",
    "nav.chain": "Blockchain", "bc.eyebrow": "⛓ Blockchain · Proyecto final del máster", "bc.award": "🏆 Mejor proyecto · Máster en Blockchain · Universidad Europea · 2023", "bc.p1": "Blockchain sigue siendo difícil de usar y difícil de confiar para la mayoría de personas y empresas: hay que elegir una cadena, aprender sus herramientas, gestionar carteras y pagar en cripto.", "bc.p2a": "FrameBlock es un framework para conectar cualquier aplicación con cualquier blockchain,", "bc.p2b": "sea del proveedor o la tecnología que sea. Esconde esas decisiones detrás de una sola capa: la misma aplicación funciona en varias cadenas y el usuario no necesita saber cuál hay debajo.", "bc.with": "Hecho junto a", "bc.code": "Ver el código", "bc.video": "▶ Vídeo demo", "bc.tech": "Presentación técnica", "bc.biz": "Presentación de negocio", "bc.shot1": "Conecta la cartera que ya tienes: MetaMask, Ledger, Trezor, WalletConnect…", "bc.shot2": "Crea tu colección a partir de imágenes generadas por IA.", "bc.f1": "semanas de máster", "bc.f2": "proyectos finales", "bc.f3": "blockchains desde una sola app", "bc.f4": "elegido por el jurado", "bc.how": "Cómo funciona: Simple AI Collection", "bc.howlead": "Para demostrarlo construimos una dApp real, de principio a fin. Cada paso es un bloque de la cadena:", "bc.s1": "Conecta tu cartera", "bc.s1d": "Con Web3 Onboard: MetaMask, Ledger, Trezor y muchas más.", "bc.s2": "Busca imágenes con IA", "bc.s2d": "Escribes unas palabras y la IA genera las imágenes.", "bc.s3": "Guarda en IPFS", "bc.s3d": "Las imágenes y sus metadatos, en almacenamiento descentralizado.", "bc.s4": "Paga con tarjeta", "bc.s4d": "El coste del despliegue con Stripe, sin necesidad de cripto.", "bc.s5": "Acuña tu colección NFT", "bc.s5d": "Un contrato ERC-721 en Ethereum, BNB Smart Chain o Polygon.", "bc.edge": "Lo que lo hace distinto", "bc.e1": "Agnóstico del proveedor", "bc.e1d": "Una sola integración, varias cadenas, y hueco para añadir más.", "bc.e2": "Usable sin saber de cripto", "bc.e2d": "Entras con la cartera que ya tienes o pagas con tarjeta.", "bc.e3": "Confianza de serie", "bc.e3d": "Piezas auditadas de OpenZeppelin, un registro on-chain de quién es dueño de qué y archivos en IPFS que nadie puede cambiar a escondidas.", "bc.e4": "Un producto, no solo diapositivas", "bc.e4d": "Un MVP que funciona, enseñado de principio a fin en la demo.", "bc.prize": "El premio", "bc.prized": "Tras 14 intensas semanas, los alumnos del Máster en Blockchain de la Universidad Europea defendieron sus proyectos finales ante un jurado de expertos del sector. Después de una deliberación complicada por el nivel de todos los proyectos, FrameBlock fue elegido ganador.", "bc.prizel": "Ver el anuncio en LinkedIn →", "hero.sp": "❤ Patrocinar", "c.sp": "❤ Apoya los juegos", "hero.pipe": "De 2005 a hoy",
    "st.1": "Soporte de hardware, software y redes", "st.2": "UNIX en producción 24x7", "st.3": "UNIX a gran escala y OpenStack",
    "st.4": "Hoy", "st.4d": "Infraestructura como código",
    "about.title": "Sobre mí", "career.title": "Lo que he hecho", "exp.years": "años en sistemas y automatización",
    "exp.lead": "Empecé con guardias 24x7 sobre UNIX, crecí administrando granjas de miles de servidores y hoy me dedico a que la infraestructura se cree sola: como código, versionada y repetible. Por el camino monté plataformas Big Data y me saqué un máster en Blockchain, donde mi proyecto final ganó el premio al mejor del máster.",
    "now": "hoy",
    "a.title": "ZONA ARCADE", "a.coin": "INSERTA MONEDA", "a.select": "SELECCIONA JUEGO", "a.hs": "TABLA DE RÉCORDS",
    "a.dedic": "🕹️ Estos juegos tienen dos testers oficiales, y son las mejores jugadoras que conozco. Todo esto es para vosotras. 💛", "a.lead": "Juegos que hago en casa con mis hijas. Todos se juegan en el navegador, también en el móvil, sin instalar nada y sin anuncios.",
    "play": "JUGAR", "code": "CÓDIGO", "soon": "PRÓXIMAMENTE",
    "views": "vistas", "visits": "visitas", "plays": "partidas", "demo": "DATOS DE EJEMPLO, generados en tu ordenador con tools/simular-visitas.mjs. No son visitas reales.",
    "hs.rank": "POS", "hs.name": "JUEGO", "hs.score": "PUNTOS", "hs.empty": "SIN RÉCORDS TODAVÍA",
    "tools.title": "Apps y webs", "tools.lead": "Herramientas para el día a día, hechas con datos públicos: sin registro, sin cookies y gratis.", "tools.more": "Y además", "tools.code": "Código",
    "dash.title": "Visitas", "dash.filter": "Proyecto", "all": "Todos los proyectos",
    "dash.lead": "Quién pasa por el código en GitHub, quién visita bendi.dev, bolsillo y hucha, y cuántos se ponen a jugar. Se actualiza solo cada mañana.",
    "k.repo": "vistas en GitHub", "k.pages": "visitas a los juegos", "k.plays": "partidas jugadas", "k.clones": "clonados",
    "l.repo": "Vistas en GitHub por día", "l.pages": "Visitas por día", "l.plays": "Partidas por día",
    "k.webs": "visitas a las webs", "k.rate": "de las visitas juegan", "k.week": "visitas esta semana", "k.vsweek": "frente a la anterior", "k.new": "primera semana",
    "t.rate": "% juegan", "g.title": "Quién visita", "g.last": "últimos", "g.days": "días", "g.phone": "Móvil", "g.computer": "Ordenador", "g.refs": "De dónde llegan a la web", "g.countries": "Países",
    "t.title": "Por proyecto", "t.name": "Proyecto", "t.14": "Vistas 14 días", "t.total": "Vistas totales", "t.pages": "Visitas", "t.plays": "Partidas", "t.trend": "Últimos 30 días",
    "t.site": "Esta web (bendi.dev)", "t.profile": "Perfil de GitHub",
    "r.title": "De dónde llegan al código en GitHub", "r.none": "Todavía no hay referencias.",
    "note": "GitHub solo guarda 14 días de tráfico, así que el histórico empieza el día que se activó la recogida y crece a partir de ahí. Las visitas y partidas de los juegos las cuenta GoatCounter, sin cookies.",
    "since": "desde",
    "empty.t": "Aún no hay datos de visitas", "empty.p": "La recogida diaria todavía no se ha ejecutado. Para ponerla en marcha:",
    "empty.1": "Crear un token con permiso de lectura de «Administration» y guardarlo como secret TRAFFIC_TOKEN.",
    "empty.2": "Dar de alta el sitio en GoatCounter y activar los contadores públicos.",
    "empty.3": "Lanzar el workflow «Update profile» a mano desde la pestaña Actions.",
    "c.title": "¿Hablamos?", "c.lead": "De automatización, infraestructura, cacharros o juegos hechos en casa.", "c.cta": "Escríbeme en LinkedIn",
    "foot": "Página estática en GitHub Pages, sin cookies. Las visitas las recoge cada mañana una GitHub Action de mi perfil.",
    "updated": "Última actualización:"
  },
  en: {
    "nav.home": "Home", "nav.work": "Work", "nav.projects": "Projects",
    "feat.title": "Latest things I've built", "feat.lead": "Everyday apps and home-made games. All free, in the browser and with no sign-up.", "feat.apps": "Apps and sites", "feat.games": "Games", "feat.allapps": "See all the apps →", "feat.arcade": "Go to the arcade →",
    "work.lead": "20 years in systems: from 24x7 UNIX on-call to infrastructure as code in the cloud.",
    "nav.about": "About", "nav.arcade": "ARCADE", "nav.visits": "Visits",
    "hero.pitch": "I've spent 20 years removing buttons: first UNIX scripts, then Ansible and Terraform, and today whole automation platforms in the cloud. Every button gone is one less on-call night, one less human error and one team free to work on something better. At home I make 8-bit games with my daughters.",
    "hero.cbr": "· If you click it twice, I automate it.",
    "hero.play": "▶ PLAY",
    "hero.cv": "⬇ CV", "c.cv": "⬇ Download CV", "nav.how": "How I work", "sx.1": "years in systems and automation", "sx.2": "servers in a single UNIX farm… and as many buttons removed 🔘", "sx.3": "clouds managed as code: AWS, Azure, Google Cloud and private", "sx.4": "best project of the Master's in Blockchain", "sx.5": "games made at home with my daughters", "term.title": "Terminal", "term.aria": "Type a command", "how.title": "How I work", "how.lead": "Four rules that have served me through 20 years of production.", "how.ex": "Example:", "how.1": "If it's done twice, it gets automated", "how.1d": "Manual work doesn't scale and gets forgotten. Every repeated task ends up as a script, a playbook or a base image.", "how.1e": "OS images with Packer and the repetitive work with Ansible, Python and Bash.", "how.2": "Infrastructure as code, or it doesn't exist", "how.2d": "If it isn't versioned and reviewed, it can't be repeated. Infrastructure is defined, reviewed and applied like any other software.", "how.2e": "the Terraform Enterprise platform that provisions on AWS, Azure, Google Cloud and private cloud.", "how.3": "Production comes first", "how.3d": "Years of 24x7 on-call teach you to measure before it hurts and to leave things more stable than you found them.", "how.3e": "capacity planning with OpenTSDB and Grafana for a 12,000-server farm.", "how.4": "Make other people's work easy", "how.4d": "The best automation is the one other teams use without thinking. Platforms, templates and pipelines rather than heroics.", "how.4e": "helping development teams with their CI/CD pipelines and merging UNIX delivery teams.",
    "nav.chain": "Blockchain", "bc.eyebrow": "⛓ Blockchain · Master's final project", "bc.award": "🏆 Best project · Master's in Blockchain · Universidad Europea · 2023", "bc.p1": "Blockchain is still hard to use and hard to trust for most people and companies: you have to pick a chain, learn its tools, manage wallets and pay in crypto.", "bc.p2a": "FrameBlock is a framework to plug any application into any blockchain,", "bc.p2b": "whatever the vendor or technology. It hides those choices behind a single layer, so the same app works on several chains and users never need to know which one is underneath.", "bc.with": "Built together with", "bc.code": "See the code", "bc.video": "▶ Demo video", "bc.tech": "Technical deck", "bc.biz": "Business deck", "bc.shot1": "Connect the wallet you already have: MetaMask, Ledger, Trezor, WalletConnect…", "bc.shot2": "Build your collection from AI-generated images.", "bc.f1": "weeks of Master's", "bc.f2": "final projects", "bc.f3": "blockchains from a single app", "bc.f4": "picked by the jury", "bc.how": "How it works: Simple AI Collection", "bc.howlead": "To prove it we built a real dApp, end to end. Each step is a block in the chain:", "bc.s1": "Connect your wallet", "bc.s1d": "With Web3 Onboard: MetaMask, Ledger, Trezor and many more.", "bc.s2": "Search AI images", "bc.s2d": "Type a few words and the AI generates the images.", "bc.s3": "Store on IPFS", "bc.s3d": "Images and their metadata, on decentralized storage.", "bc.s4": "Pay by card", "bc.s4d": "The deployment fee through Stripe, no crypto needed.", "bc.s5": "Mint your NFT collection", "bc.s5d": "An ERC-721 contract on Ethereum, BNB Smart Chain or Polygon.", "bc.edge": "What makes it different", "bc.e1": "Vendor-agnostic", "bc.e1d": "One integration, several chains, and room to add more.", "bc.e2": "Usable without knowing crypto", "bc.e2d": "Sign in with the wallet you already have, or pay by card.", "bc.e3": "Trust built in", "bc.e3d": "Audited OpenZeppelin building blocks, an on-chain registry of who owns what, and files on IPFS that nobody can quietly change.", "bc.e4": "A product, not just slides", "bc.e4d": "A working MVP, shown end to end in the demo.", "bc.prize": "The award", "bc.prized": "After 14 intense weeks, the students of the Master's in Blockchain at Universidad Europea defended their final projects before a jury of industry experts. After a tough deliberation, with every project at a high level, the jury picked FrameBlock as the winner.", "bc.prizel": "See the announcement on LinkedIn →", "hero.sp": "❤ Sponsor", "c.sp": "❤ Support the games", "hero.pipe": "From 2005 to today",
    "st.1": "Hardware, software and network support", "st.2": "24x7 production UNIX", "st.3": "UNIX at scale and OpenStack",
    "st.4": "Today", "st.4d": "Infrastructure as code",
    "about.title": "About me", "career.title": "What I have done", "exp.years": "years in systems and automation",
    "exp.lead": "I started on 24x7 UNIX on-call, grew into running farms of thousands of servers, and today I make infrastructure build itself: defined as code, versioned and repeatable. Along the way I built Big Data platforms and earned a Master's in Blockchain, where my final project was chosen as the best of the year.",
    "now": "now",
    "a.title": "ARCADE ZONE", "a.coin": "INSERT COIN", "a.select": "SELECT GAME", "a.hs": "HIGH SCORES",
    "a.dedic": "🕹️ These games have two official testers, and they're the best players I know. All of this is for you. 💛", "a.lead": "Games I make at home with my daughters. They all run in the browser, phones included, nothing to install and no ads.",
    "play": "PLAY", "code": "CODE", "soon": "COMING SOON",
    "views": "views", "visits": "visits", "plays": "played", "demo": "SAMPLE DATA, generated on your computer by tools/simular-visitas.mjs. These are not real visits.",
    "hs.rank": "RANK", "hs.name": "GAME", "hs.score": "SCORE", "hs.empty": "NO HIGH SCORES YET",
    "tools.title": "Apps and sites", "tools.lead": "Everyday tools built on public data: no sign-up, no cookies and free.", "tools.more": "And also", "tools.code": "Code",
    "dash.title": "Visits", "dash.filter": "Project", "all": "All projects",
    "dash.lead": "Who looks at the code on GitHub, who visits bendi.dev, bolsillo and hucha, and how many start playing. Updated every morning.",
    "k.repo": "views on GitHub", "k.pages": "game visits", "k.plays": "games played", "k.clones": "clones",
    "l.repo": "GitHub views per day", "l.pages": "Visits per day", "l.plays": "Plays per day",
    "k.webs": "site visits", "k.rate": "of visitors play", "k.week": "visits this week", "k.vsweek": "vs last week", "k.new": "first week",
    "t.rate": "% play", "g.title": "Who visits", "g.last": "last", "g.days": "days", "g.phone": "Phone", "g.computer": "Computer", "g.refs": "Where site visitors come from", "g.countries": "Countries",
    "t.title": "By project", "t.name": "Project", "t.14": "Views, 14 days", "t.total": "Total views", "t.pages": "Visits", "t.plays": "Played", "t.trend": "Last 30 days",
    "t.site": "This site (bendi.dev)", "t.profile": "GitHub profile",
    "r.title": "Where GitHub visitors come from", "r.none": "No referrers yet.",
    "note": "GitHub only keeps 14 days of traffic, so the history starts the day collection was switched on and grows from there. Game visits and plays are counted by GoatCounter, without cookies.",
    "since": "since",
    "empty.t": "No visit data yet", "empty.p": "The daily collection hasn't run yet. To start it:",
    "empty.1": "Create a token with read access to “Administration” and save it as the TRAFFIC_TOKEN secret.",
    "empty.2": "Register the site on GoatCounter and turn on public counters.",
    "empty.3": "Run the “Update profile” workflow by hand from the Actions tab.",
    "c.title": "Let's talk", "c.lead": "About automation, infrastructure, gadgets or home-made games.", "c.cta": "Message me on LinkedIn",
    "foot": "Static page on GitHub Pages, cookie-free. A GitHub Action on my profile collects the visits every morning.",
    "updated": "Last updated:"
  }
};

/* From the LinkedIn profile */
const WINS = [
  { es: ["12.000 servidores", "Administración senior de UNIX en producción en una granja de 12.000 servidores."],
    en: ["12,000 servers", "Senior production UNIX administration on a 12,000-server farm."] },
  { es: ["Terraform Enterprise", "Diseño y administración de la plataforma que aprovisiona la infraestructura en AWS, Azure, Google Cloud y nube privada."],
    en: ["Terraform Enterprise", "Designing and running the platform that provisions infrastructure on AWS, Azure, Google Cloud and private cloud."] },
  { es: ["De VMware a OpenStack", "Migración de servidores y despliegue de cargas sobre IaaS."],
    en: ["VMware to OpenStack", "Server migrations and workloads deployed on IaaS."] },
  { es: ["Big Data seguro", "Plataformas Cloudera y Hortonworks protegidas con Kerberos, LDAP y Active Directory."],
    en: ["Secure Big Data", "Cloudera and Hortonworks platforms secured with Kerberos, LDAP and Active Directory."] },
  { es: ["Capacidad a la vista", "Planificación de capacidad con OpenTSDB y Grafana para anticiparse a los problemas."],
    en: ["Capacity in sight", "Capacity planning with OpenTSDB and Grafana to get ahead of problems."] },
  { es: ["🏆 FrameBlock, mejor proyecto del máster", "Framework para usar cualquier blockchain sin lidiar con su complejidad. Elegido ganador entre los proyectos finales por un jurado de expertos del sector (2023)."],
    en: ["🏆 FrameBlock, best project of the Master's", "A framework to use any blockchain without dealing with its complexity. Picked as the winner among the final projects by a jury of industry experts (2023)."] },
  { es: ["Máster en Blockchain", "Universidad Europea, 2022–2023: smart contracts en Solidity, NFTs, IPFS y dApps multicadena."],
    en: ["Master's in Blockchain", "Universidad Europea, 2022–2023: Solidity smart contracts, NFTs, IPFS and multichain dApps."] }
];
const CAREER = [
  { from: 2023, to: 0,
    es: ["Cloud Engineer · Nube privada, Google Cloud y SRE", "Llevo la nube privada a los proyectos como código: convierto sus servicios y arquitecturas de referencia en automatizaciones listas para usar.", [
      "Diseño y desarrollo, con Terraform y Ansible, las automatizaciones que despliegan cada arquitectura de referencia en los proyectos.",
      "Evoluciono el framework de automatización de la plataforma y acompaño a los proyectos en su migración para que la adopten antes.",
      "Como SRE del área, integro en la plataforma las automatizaciones de los equipos de storage, red, virtualización, CaaS y sistemas, en coordinación con equipos de varios países.",
      "Reviso que los proyectos cumplan los estándares de la plataforma y sus arquitecturas de referencia.",
      "En Google Cloud opero la plataforma y participo en la arquitectura y el diseño de las soluciones.",
      "Stack: Terraform, Ansible, Python, Jenkins y GitOps, sobre VMware, OpenShift y Google Cloud."]],
    en: ["Cloud Engineer · Private cloud, Google Cloud and SRE", "I bring the private cloud to projects as code, turning its services and reference architectures into ready-to-use automation.", [
      "I design and build, with Terraform and Ansible, the automation that deploys each reference architecture into the projects.",
      "I evolve the platform's automation framework and support projects through their migration so they adopt it sooner.",
      "As SRE for the area, I integrate the automation of the storage, network, virtualization, CaaS and systems teams into the platform, coordinating with teams in several countries.",
      "I check that projects meet the platform standards and its reference architectures.",
      "On Google Cloud, I run the platform and take part in solution architecture and design.",
      "Stack: Terraform, Ansible, Python, Jenkins and GitOps, on VMware, OpenShift and Google Cloud."]] },
  { from: 2019, to: 2023,
    es: ["Automation Engineer", "Infraestructura como código para servidores Windows y Linux, en AWS, Azure, Google Cloud y nube privada.", [
      "Diseñé y administré Terraform Enterprise, la plataforma con la que se aprovisiona la infraestructura.",
      "Automaticé las imágenes base de sistema operativo con Packer y el trabajo repetitivo con Ansible, Python y Bash.",
      "Operé la virtualización con VMware, VMware Cloud y nube privada, y llevé aplicaciones a contenedores con Docker.",
      "Ayudé a los equipos de desarrollo a mejorar sus pipelines de CI/CD."]],
    en: ["Automation Engineer", "Infrastructure as code for Windows and Linux servers, on AWS, Azure, Google Cloud and private cloud.", [
      "Designed and ran Terraform Enterprise, the platform that provisions the infrastructure.",
      "Automated OS base images with Packer and repetitive work with Ansible, Python and Bash.",
      "Operated VMware, VMware Cloud and private cloud virtualization, and moved apps into Docker containers.",
      "Helped development teams improve their CI/CD pipelines."]] },
  { from: 2016, to: 2019,
    es: ["IT Expert · UNIX a gran escala", "Administración senior de UNIX en producción en una granja de 12.000 servidores.", [
      "Diseñé la planificación de capacidad con OpenTSDB y Grafana.",
      "Diseñé la entrega continua sobre OpenStack con Rundeck y Ansible.",
      "Migré servidores de VMware a OpenStack y desplegué cargas sobre IaaS.",
      "Desarrollé un inventario dinámico con Ansible y CMDBuild.",
      "Lideré técnicamente la unificación de varios equipos de entrega UNIX."]],
    en: ["IT Expert · UNIX at scale", "Senior production UNIX administration on a 12,000-server farm.", [
      "Designed capacity planning with OpenTSDB and Grafana.",
      "Designed continuous delivery on OpenStack with Rundeck and Ansible.",
      "Migrated servers from VMware to OpenStack and deployed workloads on IaaS.",
      "Built a dynamic inventory with Ansible and CMDBuild.",
      "Technical lead for merging several UNIX delivery teams."]] },
  { from: 2015, to: 2016,
    es: ["Big Data Engineer", "Puse en marcha y aseguré plataformas Big Data en producción.", [
      "Definí, instalé y administré entornos Cloudera y Hortonworks: Hadoop, Hive, Impala, Spark y HBase, entre otros.",
      "Los protegí con Kerberos integrado con LDAP, Active Directory e IPA, en entornos con varios sistemas de autenticación.",
      "Evalué nuevas soluciones y di soporte a los usuarios en producción."]],
    en: ["Big Data Engineer", "Set up and secured Big Data platforms in production.", [
      "Defined, installed and ran Cloudera and Hortonworks platforms: Hadoop, Hive, Impala, Spark and HBase, among others.",
      "Secured them with Kerberos integrated with LDAP, Active Directory and IPA, across several authentication systems.",
      "Evaluated new solutions and supported users in production."]] },
  { from: 2009, to: 2015,
    es: ["Administrador y consultor senior de sistemas", "UNIX y Linux en producción 24x7 para una docena de clientes.", [
      "Solaris, Red Hat, SUSE, HP-UX y AIX en granjas de hasta 5.000 servidores.",
      "Automaticé instalaciones, validaciones y actualizaciones con scripts, Ansible y BladeLogic.",
      "Alta disponibilidad con Pacemaker, Corosync, HAProxy y Keepalived, además de almacenamiento, backup y servidores web y de aplicaciones.",
      "Incidencias críticas, cambios y guardias, con análisis de rendimiento y propuestas de mejora."]],
    en: ["Senior systems administrator and consultant", "24x7 production UNIX and Linux for a dozen clients.", [
      "Solaris, Red Hat, SUSE, HP-UX and AIX on farms of up to 5,000 servers.",
      "Automated installs, validation and updates with scripts, Ansible and BladeLogic.",
      "High availability with Pacemaker, Corosync, HAProxy and Keepalived, plus storage, backup and web and application servers.",
      "Critical incidents, changes and on-call, with performance analysis and improvement proposals."]] },
  { from: 2005, to: 2009,
    es: ["Técnico y administrador de sistemas", "Mis primeros años: del soporte a usuarios a administrar sistemas en producción.", [
      "Administré HP-UX, Solaris, Tru64 y Red Hat, con almacenamiento EMC sobre fibra óptica.",
      "Trabajé en proyectos de red de transmisión para mejorar la cobertura de un operador móvil.",
      "Empecé dando soporte de hardware, software, usuarios y redes."]],
    en: ["Systems technician and administrator", "The early years: from user support to running production systems.", [
      "Ran HP-UX, Solaris, Tru64 and Red Hat, with EMC storage over fiber.",
      "Worked on transmission network projects to improve a mobile operator's coverage.",
      "Started out supporting hardware, software, users and networks."]] }
];

let lang = "es";
try { lang = localStorage.getItem("lang") || (navigator.language || "es").slice(0, 2); } catch (e) {}
if (!T[lang]) lang = "en";
const t = k => T[lang][k] ?? k;
const loc = () => (lang === "es" ? "es-ES" : "en-US");
const nf = n => new Intl.NumberFormat(loc()).format(n);
const pad = (n, w = 6) => String(Math.min(n, 10 ** w - 1)).padStart(w, "0");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const $id = id => document.getElementById(id);
let DATA = { repos: {} }, PROJ = { games: [], tools: [] }, selected = "", dashSeen = false;
/* Games hang from the same host the visitor used: bendi.dev or serbenda.github.io both work */
const GAMES_BASE = /(^|\.)bendi\.dev$|^serbenda\.github\.io$/.test(location.hostname) ? "" : "https://serbenda.github.io";
const SHOW_FROM = 10;   // game cartridges hide counts below this; the tables show everything

/* ---------- data helpers ---------- */
const day = d => d.toISOString().slice(0, 10);
const days = n => { const out = [], now = Date.now(); for (let i = n - 1; i >= 0; i--) out.push(day(new Date(now - i * 864e5))); return out; };
const sumViews = (r, from = "") => Object.entries(r.views || {}).filter(([d]) => d >= from).reduce((a, [, v]) => a + v[0], 0);
const sumClones = r => Object.values(r.clones || {}).reduce((a, v) => a + v[0], 0);
const lastOf = o => { const k = Object.keys(o || {}).sort(); return k.length ? o[k[k.length - 1]] : 0; };
const lastHits = r => lastOf(r.pages_hits);
const lastPlays = r => lastOf(r.plays);
/* GoatCounter totals are cumulative snapshots: each day is the difference with the day before.
   The first snapshot has no day before, so it has no daily value (not zero). */
function dailyOf(o) {
  const k = Object.keys(o || {}).sort(), out = {};
  for (let i = 1; i < k.length; i++) out[k[i]] = Math.max(0, o[k[i]] - o[k[i - 1]]);
  return out;
}
const dailyHits = r => dailyOf(r.pages_hits);
const dailyPlays = r => dailyOf(r.plays);
const isGame = name => PROJ.games.some(g => g.repo === name);
const pct = n => new Intl.NumberFormat(loc(), { style: "percent", maximumFractionDigits: 0 }).format(n);
/* visits in the last 7 days and in the 7 before, from the daily differences */
function weekly(rs) {
  const d14 = days(14), hb = rs.map(dailyHits);
  const sum = ds => hb.reduce((a, h) => a + ds.reduce((b, d) => b + (h[d] || 0), 0), 0);
  const known = d => hb.some(h => d in h);
  return { now: sum(d14.slice(7)), before: sum(d14.slice(0, 7)), full: d14.slice(0, 7).every(known) };
}
const repos = () => Object.entries(DATA.repos || {}).map(([name, r]) => ({ name, ...r }));
const scope = () => selected ? repos().filter(r => r.name === selected) : repos();
const titleOf = name => name === (DATA.user || "serbenda") ? t("t.profile")
  : name === `${DATA.user || "serbenda"}.github.io` ? t("t.site")
  : ([...PROJ.games, ...PROJ.tools].find(p => p.repo === name) || {}).title || name;

/* ---------- about ---------- */
function renderAbout() {
  if (!$id("wins")) return;
  document.getElementById("wins").innerHTML = WINS.map(w => `<li><b>${esc(w[lang][0])}</b><span>${esc(w[lang][1])}</span></li>`).join("");
  document.getElementById("career").innerHTML = CAREER.map(c => `
    <li class="${c.to === 0 ? "now" : ""}"><span class="y">${c.from}–${c.to || t("now")}</span>
      <div><b>${esc(c[lang][0])}</b><p class="sum">${esc(c[lang][1])}</p><ul>${c[lang][2].map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></li>`).join("");
}

/* ---------- arcade ---------- */
/* A game is playable unless it is marked "web": false or the visits data says it has no website.
   A game that is not in the visits data yet (just published) is playable straight away. */
const playURL = g => g.web === false || (DATA.repos && g.repo in DATA.repos && !DATA.repos[g.repo].pages) ? "" : `${GAMES_BASE}/${g.repo}/`;
const src = p => (/^(https?:)?\//.test(p) ? p : "/" + p);
function renderArcade() {
  if (!$id("games")) return;
  const by = DATA.repos || {};
  document.getElementById("games").innerHTML = PROJ.games.map(g => {
    const r = by[g.repo] || {};
    const live = playURL(g);
    const views = sumViews(r), visits = lastHits(r), plays = lastPlays(r);
    return `
    <article class="pxbox cart">
      <img class="shot${g.pixel ? " pixel" : ""}" src="${esc(src(g.img))}" alt="" loading="lazy" width="640" height="360">
      <div class="body">
        <h3>${esc(g.title)}</h3>
        <ul class="tags">${((lang === "en" && g.tags_en) || g.tags || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <p>${esc(g[lang])}</p>
        <div class="sc">
          ${views >= SHOW_FROM ? `<span class="c-repo">■ ${nf(views)} ${t("views")}</span>` : ""}
          ${visits >= SHOW_FROM ? `<span class="c-pages">■ ${nf(visits)} ${t("visits")}</span>` : ""}
          ${plays >= SHOW_FROM ? `<span class="c-plays">■ ${nf(plays)} ${t("plays")}</span>` : ""}
        </div>
        <div class="act">
          ${live ? `<a class="pbtn" href="${esc(live)}">▶ ${t("play")}</a>` : `<span class="pbtn ghost">${t("soon")}</span>`}
          <a class="pbtn ghost" href="https://github.com/serbenda/${esc(g.repo)}">${t("code")}</a>
        </div>
      </div>
    </article>`;
  }).join("");

  /* high scores: games only, score = views + visits + plays */
  const rows = PROJ.games.map(g => { const r = by[g.repo] || {}; return { title: g.title, score: sumViews(r) + lastHits(r) + lastPlays(r) }; })
    .filter(x => x.score > 0).sort((a, b) => b.score - a.score);
  const rank = i => lang === "es" ? `${i + 1}º` : `${i + 1}${["ST", "ND", "RD"][i] || "TH"}`;
  document.getElementById("hs").innerHTML = rows.length
    ? `<thead><tr><th>${t("hs.rank")}</th><th>${t("hs.name")}</th><th>${t("hs.score")}</th></tr></thead><tbody>${rows.map((x, i) =>
        `<tr><td class="rk">${rank(i)}</td><td>${esc(x.title.toUpperCase())}</td><td>${pad(x.score)}</td></tr>`).join("")}</tbody>`
    : `<tbody><tr><td style="text-align:left">${t("hs.empty")}</td></tr></tbody>`;
  document.getElementById("hiscore").textContent = pad(rows.reduce((a, x) => a + x.score, 0));
}

/* app card, shared by the projects page and the highlights on the home page */
function appCard(p, url, code = `https://github.com/serbenda/${p.repo}`) {
  const tags = (lang === "en" && p.tags_en) || p.tags || [];
  return `<article class="app"><a class="app-img" href="${esc(url)}" tabindex="-1" aria-hidden="true"><img src="${esc(src(p.img))}" alt="" width="640" height="360" loading="lazy"></a>
      <div class="app-body"><h3><a href="${esc(url)}">${esc(p.title)}</a></h3><p>${esc(p[lang])}</p>
      <div class="app-foot"><span class="app-tags">${tags.map(x => `<span>${esc(x)}</span>`).join("")}</span><a class="app-code" href="${esc(code)}">${t("tools.code")}</a></div></div></article>`;
}
/* home page: the three newest apps and the three newest playable games (first in projects.json) */
function renderFeatured() {
  const a = $id("feat-apps"), g = $id("feat-games"); if (!a) return;
  a.innerHTML = PROJ.tools.filter(p => !p.featured && p.img).slice(0, 3).map(p => appCard(p, p.url || `https://github.com/serbenda/${p.repo}`)).join("");
  g.innerHTML = PROJ.games.filter(x => playURL(x)).slice(0, 3).map(x => appCard(x, playURL(x))).join("");
}
function renderTools() {
  if (!$id("apps")) return;
  const list = PROJ.tools.filter(p => !p.featured), apps = list.filter(p => p.img), rest = list.filter(p => !p.img);
  document.getElementById("apps").innerHTML = apps.map(p => appCard(p, p.url || `https://github.com/serbenda/${p.repo}`)).join("");
  document.querySelector(".tools-more").hidden = !rest.length;
  document.getElementById("tools").innerHTML = rest.map(p =>
    `<li><a href="${esc(p.url || `https://github.com/serbenda/${p.repo}`)}">${esc(p.title)}</a><span>${esc(p[lang])}</span></li>`).join("");
}

/* ---------- visits chart ---------- */
function range(rs) {
  const span = days(60), first = span.findIndex(d => rs.some(r => (r.views || {})[d] || dailyHits(r)[d]));
  return first < 0 ? span.slice(-30) : span.slice(Math.min(first, span.length - 14));
}
/* chart drawn at the width it is shown, so labels stay readable on phones */
function chartW() { const el = document.getElementById("dash"); return Math.round(Math.min(1000, Math.max(280, (el ? el.clientWidth : 1000) - 42))); }
function chart(rs) {
  const ds = range(rs), hb = rs.map(dailyHits);
  const pb = rs.map(dailyPlays), hasPlays = pb.some(p => Object.values(p).some(v => v));
  const repo = ds.map(d => rs.reduce((a, r) => a + ((r.views || {})[d]?.[0] || 0), 0));
  const pages = ds.map(d => hb.some(h => d in h) ? hb.reduce((a, h) => a + (h[d] || 0), 0) : null);
  const plays = ds.map(d => pb.some(p => d in p) ? pb.reduce((a, p) => a + (p[d] || 0), 0) : null);
  const W = chartW(), H = Math.round(Math.min(260, Math.max(170, W * 0.55))), L = 40, R = 10, Tp = 16, B = 28;
  const max = Math.max(4, ...repo, ...pages.filter(v => v != null)), step = (W - L - R) / Math.max(1, ds.length - 1);
  const x = i => L + i * step, y = v => Tp + (H - Tp - B) * (1 - v / max);
  /* lines skip days without a value instead of dropping to zero */
  const line = vs => vs.map((v, i) => v == null ? "" : `${i && vs[i - 1] != null ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join("");
  const area = vs => {
    const f = vs.findIndex(v => v != null); if (f < 0) return "";
    let l = vs.length - 1; while (vs[l] == null) l--;
    const pts = vs.map((v, i) => [i, v]).slice(f, l + 1).map(([i, v]) => `${x(i).toFixed(1)},${y(v ?? 0).toFixed(1)}`);
    return `M${pts.join("L")}L${x(l)},${y(0)}L${x(f)},${y(0)}Z`;
  };
  const lbl = W < 480 ? [0, ds.length - 1] : [0, Math.floor(ds.length / 2), ds.length - 1];
  const fmtD = d => new Date(d + "T12:00:00").toLocaleDateString(loc(), { day: "numeric", month: "short" });
  return `
  <div class="chart">
    <div class="legend"><span><i class="dot" style="background:var(--repo)"></i>${t("l.repo")}</span><span><i class="dot" style="background:var(--pages)"></i>${t("l.pages")}</span>${hasPlays ? `<span><i class="dot" style="background:var(--plays)"></i>${t("l.plays")}</span>` : ""}</div>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${t("l.repo")}, ${t("l.pages")}">
      ${[0, Math.round(max / 2), max].map(v => `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" stroke="#242c48"/><text class="axis" x="${L - 8}" y="${y(v) + 4}" text-anchor="end">${nf(v)}</text>`).join("")}
      ${lbl.map(i => `<text class="axis" x="${x(i)}" y="${H - 6}" text-anchor="${i === 0 ? "start" : i === ds.length - 1 ? "end" : "middle"}">${fmtD(ds[i])}</text>`).join("")}
      <path d="${area(pages)}" fill="#36d399" fill-opacity=".12"/><path d="${line(pages)}" fill="none" stroke="#36d399" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="${area(repo)}" fill="#38bdf8" fill-opacity=".12"/><path d="${line(repo)}" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round"/>
      ${hasPlays ? `<path d="${line(plays)}" fill="none" stroke="#f472b6" stroke-width="2.5" stroke-linejoin="round"/>` : ""}
      <line id="hx" y1="${Tp}" y2="${H - B}" stroke="#93a0b8" stroke-dasharray="3 3" visibility="hidden"/>
      <text id="ht" class="tip" y="${Tp + 2}" visibility="hidden"></text>
      <rect id="hz" x="${L}" y="0" width="${W - L - R}" height="${H}" fill="transparent"/>
    </svg>
  </div>`;
}
function hookChart(rs) {
  const svg = document.querySelector(".chart svg"); if (!svg) return;
  const ds = range(rs), hb = rs.map(dailyHits), W = svg.viewBox.baseVal.width, L = 40, R = 10, step = (W - L - R) / Math.max(1, ds.length - 1);
  const hx = svg.querySelector("#hx"), ht = svg.querySelector("#ht"), hz = svg.querySelector("#hz");
  hz.addEventListener("pointermove", e => {
    const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY;
    const lx = p.matrixTransform(svg.getScreenCTM().inverse()).x;
    const i = Math.max(0, Math.min(ds.length - 1, Math.round((lx - L) / step))), d = ds[i], xv = L + i * step;
    const rv = rs.reduce((a, r) => a + ((r.views || {})[d]?.[0] || 0), 0), pv = hb.reduce((a, h) => a + (h[d] || 0), 0);
    const yv = rs.map(dailyPlays).reduce((a, h) => a + (h[d] || 0), 0);
    hx.setAttribute("x1", xv); hx.setAttribute("x2", xv); hx.setAttribute("visibility", "visible");
    ht.textContent = `${new Date(d + "T12:00:00").toLocaleDateString(loc(), { day: "numeric", month: "short" })} · GitHub ${nf(rv)} · ${t("visits")} ${nf(pv)}${yv ? ` · ${t("plays")} ${nf(yv)}` : ""}`;
    const right = xv > W * 0.6;
    ht.setAttribute("x", right ? xv - 8 : xv + 8); ht.setAttribute("text-anchor", right ? "end" : "start"); ht.setAttribute("visibility", "visible");
  });
  hz.addEventListener("pointerleave", () => { hx.setAttribute("visibility", "hidden"); ht.setAttribute("visibility", "hidden"); });
}
function spark(r) {
  const hits = dailyHits(r), web = r.pages && Object.values(hits).some(v => v);
  const vs = days(30).map(d => web ? hits[d] || 0 : (r.views || {})[d]?.[0] || 0), max = Math.max(1, ...vs);
  const pts = vs.map((v, i) => `${(i * 100 / 29).toFixed(1)},${(22 - 20 * v / max).toFixed(1)}`).join(" ");
  return `<svg class="spark" width="72" height="22" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts}" fill="none" stroke="${web ? "#36d399" : "#38bdf8"}" stroke-width="1.5"/></svg>`;
}

/* ---------- visits dashboard ---------- */
function renderDash() {
  const el = document.getElementById("dash"); if (!el) return;
  const all = repos();
  const has = all.some(r => Object.keys(r.views || {}).length || Object.keys(r.pages_hits || {}).length);
  if (!has) {
    el.innerHTML = `<div class="empty"><h3>${t("empty.t")}</h3><p class="lead">${t("empty.p")}</p><ol><li>${t("empty.1")}</li><li>${t("empty.2")}</li><li>${t("empty.3")}</li></ol></div>`;
    return;
  }
  const demoBanner = DEMO ? `<p class="demo-banner">🧪 ${t("demo")}</p>` : "";
  const rs = scope(), from14 = days(14)[0], first = all.flatMap(r => Object.keys(r.views || {})).sort()[0];
  const rows = [...all].sort((a, b) => (sumViews(b) + lastHits(b)) - (sumViews(a) + lastHits(a)));
  const refs = {};
  rs.forEach(r => (r.referrers || []).forEach(x => { refs[x.referrer] = (refs[x.referrer] || 0) + x.count; }));
  const refList = Object.entries(refs).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const bars = (list, cls = "") => { const m = list[0]?.[1] || 1;
    return `<ul class="refs ${cls}">${list.map(([k, v]) => `<li><span>${esc(k)}</span><span>${nf(v)}</span><span class="b"><i style="width:${(100 * v / m).toFixed(0)}%"></i></span></li>`).join("")}</ul>`; };
  const kpi = (cls, n, label, sub = "") => `<div class="kpi"><strong class="${cls}">${n}</strong><span>${label}</span>${sub ? `<em>${sub}</em>` : ""}</div>`;
  /* split visits: games vs the rest of the sites (bendi.dev, bolsillo, hucha) */
  const games = rs.filter(r => isGame(r.name)), webs = rs.filter(r => !isGame(r.name) && r.pages);
  const gVisits = games.reduce((a, r) => a + lastHits(r), 0), wVisits = webs.reduce((a, r) => a + lastHits(r), 0);
  const plays = rs.reduce((a, r) => a + lastPlays(r), 0);
  const wk = weekly(rs), growth = wk.full && wk.before ? wk.now / wk.before - 1 : null;
  const growthTxt = growth == null ? t("k.new") : `${growth >= 0 ? "▲" : "▼"} ${pct(Math.abs(growth))} ${t("k.vsweek")}`;
  /* GoatCounter details (only with the optional API key): the selected project, or the whole site */
  const gc = selected ? (DATA.repos[selected] || {}).gc : DATA.gc;
  const dev = gc && gc.devices, devTotal = dev ? (dev.phone || 0) + (dev.computer || 0) : 0;
  const gcRefs = (gc && gc.referrers || []).map(x => [x.name, x.count]);
  const countries = (!selected && DATA.gc && DATA.gc.countries || []).map(x => [x.name, x.count]);
  el.innerHTML = demoBanner + `
    <div class="kpis">
      ${kpi("c-repo", nf(rs.reduce((a, r) => a + sumViews(r), 0)), t("k.repo"))}
      ${games.length ? kpi("c-pages", nf(gVisits), t("k.pages")) : ""}
      ${webs.length ? kpi("c-web", nf(wVisits), t("k.webs")) : ""}
      ${games.length ? kpi("c-plays", nf(plays), t("k.plays"), gVisits && plays ? `${pct(plays / gVisits)} ${t("k.rate")}` : "") : ""}
      ${games.length || webs.length ? kpi("", nf(wk.now), t("k.week"), growthTxt) : ""}
    </div>
    ${chart(rs)}
    <div class="box">
      <h3>${t("t.title")}</h3>
      <table>
        <thead><tr><th>${t("t.name")}</th><th>${t("t.14")}</th><th>${t("t.total")}</th><th>${t("t.pages")}</th><th>${t("t.plays")}</th><th>${t("t.rate")}</th><th>${t("t.trend")}</th></tr></thead>
        <tbody>${rows.map(r => `
          <tr data-name="${esc(r.name)}" class="${r.name === selected ? "on" : ""}" tabindex="0">
            <td>${esc(titleOf(r.name))}</td><td>${nf(sumViews(r, from14))}</td><td>${nf(sumViews(r))}</td>
            <td>${r.pages && lastHits(r) ? nf(lastHits(r)) : "–"}</td><td>${lastPlays(r) ? nf(lastPlays(r)) : "–"}</td>
            <td>${lastPlays(r) && lastHits(r) ? pct(lastPlays(r) / lastHits(r)) : "–"}</td><td>${spark(r)}</td>
          </tr>`).join("")}</tbody>
      </table>
    </div>
    ${devTotal || gcRefs.length || countries.length ? `<div class="box gcbox">
      <h3>${t("g.title")} <small>${t("g.last")} ${gc.days || DATA.gc?.days || 30} ${t("g.days")}</small></h3>
      ${devTotal ? `<div class="devs"><div class="devbar" role="img" aria-label="${t("g.phone")} ${pct(dev.phone / devTotal)}, ${t("g.computer")} ${pct(dev.computer / devTotal)}">
          <i class="ph" style="width:${(100 * dev.phone / devTotal).toFixed(1)}%"></i><i class="pc" style="width:${(100 * dev.computer / devTotal).toFixed(1)}%"></i></div>
        <p><span><i class="dot" style="background:var(--plays)"></i>📱 ${t("g.phone")} <b>${pct(dev.phone / devTotal)}</b></span><span><i class="dot" style="background:var(--repo)"></i>💻 ${t("g.computer")} <b>${pct(dev.computer / devTotal)}</b></span></p></div>` : ""}
      <div class="gcgrid">
        ${gcRefs.length ? `<div><h4>${t("g.refs")}</h4>${bars(gcRefs.slice(0, 8), "one")}</div>` : ""}
        ${countries.length ? `<div><h4>${t("g.countries")}</h4>${bars(countries.slice(0, 8), "one")}</div>` : ""}
      </div>
    </div>` : ""}
    <div class="box">
      <h3>${t("r.title")}</h3>
      ${refList.length ? bars(refList) : `<p class="lead">${t("r.none")}</p>`}
    </div>
    <p class="note">${t("note")}${first ? ` (${t("since")} ${new Date(first + "T12:00:00").toLocaleDateString(loc(), { day: "numeric", month: "long", year: "numeric" })})` : ""}</p>`;
  hookChart(rs);
  el.querySelectorAll("tbody tr").forEach(tr => {
    const pick = () => { selected = selected === tr.dataset.name ? "" : tr.dataset.name; document.getElementById("filter").value = selected; renderDash(); };
    tr.addEventListener("click", pick);
    tr.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
  });
}
function renderFilter() {
  const f = document.getElementById("filter"); if (!f) return;
  f.innerHTML = `<option value="">${t("all")}</option>` + repos().map(r => r.name).sort().map(n => `<option value="${esc(n)}">${esc(titleOf(n))}</option>`).join("");
  f.value = selected;
}

/* ---------- blockchain zone: decorative ticker and block hashes ---------- */
function hex(seed, n) { let h = seed >>> 0, s = ""; for (let i = 0; i < n; i++) { h = Math.imul(h ^ (h >>> 15), 2246822507) + i; s += ((h >>> 8) & 15).toString(16); } return s; }
function renderChain() {
  const day = Math.floor(Date.now() / 864e5), base = 19000000 + (day - 19000) * 7200;
  const items = Array.from({ length: 12 }, (_, i) => {
    const n = base + i * 1, h = hex(n, 64);
    return `<span><i>#${n.toLocaleString(loc())}</i> · <b>0x${h.slice(0, 6)}…${h.slice(-4)}</b> · ${(n % 180) + 20} tx</span>`;
  }).join("");
  const run = document.getElementById("ticker"); if (run) run.innerHTML = items + items;
  document.querySelectorAll("#blocks small").forEach((s, i) => {
    const prev = i ? "0x" + hex(day * 7 + i - 1, 64).slice(0, 8) : "0x00000000";
    s.textContent = `prev ${prev} · hash 0x${hex(day * 7 + i, 64).slice(0, 8)}`;
  });
}

/* ---------- interactive terminal ---------- */
const TERM = { hist: [], at: 0 };
const L = (es, en) => (lang === "es" ? es : en);
const cvURL = () => `/cv/Sergio-Bendana-CV-${lang}.pdf`;
const TCMDS = ["help", "whoami", "skills", "experience", "projects", "play", "frameblock", "how", "contact", "cv", "ls", "cat", "lang", "clear", "coffee", "sudo", "exit", "date", "uptime", "neofetch", "press"];
function tline(html, cls = "") { const o = document.getElementById("tout"); const d = document.createElement("div"); if (cls) d.className = cls; d.innerHTML = html; o.appendChild(d); o.scrollTop = o.scrollHeight; }
const TRUN = {
  help: () => L(
`<span class="hl">Comandos disponibles</span>
  <span class="c2">whoami</span>       quién soy
  <span class="c2">skills</span>       con qué trabajo
  <span class="c2">experience</span>   mi trayectoria
  <span class="c2">how</span>          cómo trabajo
  <span class="c2">projects</span>     juegos y proyectos
  <span class="c2">play</span> <span class="dim">&lt;juego&gt;</span> abre un juego
  <span class="c2">frameblock</span>   el proyecto ganador del máster
  <span class="c2">cv</span>           descarga mi CV
  <span class="c2">contact</span>      cómo hablar conmigo
  <span class="c2">lang en</span>      switch to English
  <span class="c2">clear</span>        limpia la pantalla
<span class="dim">Tab autocompleta · ↑ ↓ historial · hay algún comando secreto 😉</span>`,
`<span class="hl">Available commands</span>
  <span class="c2">whoami</span>       who I am
  <span class="c2">skills</span>       what I work with
  <span class="c2">experience</span>   my career
  <span class="c2">how</span>          how I work
  <span class="c2">projects</span>     games and projects
  <span class="c2">play</span> <span class="dim">&lt;game&gt;</span>  open a game
  <span class="c2">frameblock</span>   my award-winning Master's project
  <span class="c2">cv</span>           download my CV
  <span class="c2">contact</span>      how to reach me
  <span class="c2">lang es</span>      cambiar a español
  <span class="c2">clear</span>        clear the screen
<span class="dim">Tab completes · ↑ ↓ history · there are a few secret commands 😉</span>`),
  whoami: () => L(
`<span class="ok">Sergio Bendaña</span> · <span class="hl">Bendi</span>
Cloud Engineer. 20+ años en sistemas: de guardias 24x7 en UNIX
a definir la infraestructura como código en AWS, Azure, Google Cloud y nube privada.
Máster en Blockchain (proyecto ganador 🏆) y juegos de 8 bits con mis hijas.`,
`<span class="ok">Sergio Bendaña</span> · <span class="hl">Bendi</span>
Cloud Engineer. 20+ years in systems: from 24x7 UNIX on-call
to defining infrastructure as code on AWS, Azure, Google Cloud and private cloud.
Master's in Blockchain (award-winning project 🏆) and 8-bit games with my daughters.`),
  skills: () => (innerWidth < 640 ? s => s.replace(/<\/span>\s+/g, "</span>\n  ") : s => s)(
`<span class="c3">IaC & automation</span>  Terraform · Terraform Enterprise · Ansible · Packer · Python · Bash · Jenkins · GitOps
<span class="c3">${L("Nube", "Cloud")}</span>             AWS · Azure · Google Cloud · ${L("nube privada", "private cloud")} · OpenShift · OpenStack · VMware
<span class="c3">${L("Sistemas", "Systems")}</span>          Red Hat · Solaris · AIX · HP-UX · Docker
<span class="c3">Data & ${L("observ.", "observ.")}</span>   Cloudera · Hortonworks · Kerberos · OpenTSDB · Grafana
<span class="c3">Web3</span>              Solidity · ERC-721 · OpenZeppelin · IPFS · ethers.js
<span class="c3">${L("Juegos", "Games")}</span>            HTML · CSS · JavaScript, ${L("sin dependencias", "no dependencies")}`),
  experience: () => CAREER.map(c => `<span class="hl">${c.from}–${c.to || t("now")}</span>  <span class="ok">${esc(c[lang][0])}</span>\n            <span class="dim">${esc(c[lang][1])}</span>`).join("\n") + `\n${L("Detalle completo", "Full detail")} → <a href="/trabajo/#sobre-mi">/trabajo</a> · ${L("o", "or")} <span class="c2">cv</span>`,
  how: () => [1, 2, 3, 4].map(i => `<span class="hl">0${i}</span> <span class="ok">${esc(t("how." + i))}</span>\n   <span class="dim">${esc(t("how." + i + "d"))}</span>`).join("\n"),
  projects: () => PROJ.games.map(g => `<span class="ok">▸</span> ${esc(g.title)} <span class="dim">·</span> <span class="c2">${g.repo === "deploy-quest" ? "github" : "play " + g.repo}</span>`).join("\n")
    + `\n<span class="ok">▸</span> FrameBlock 🏆 <span class="dim">·</span> <span class="c2">frameblock</span>`,
  play: a => {
    const g = PROJ.games.find(x => x.repo === a || x.repo.startsWith(a || "\u0000"));
    if (!a || !g) return L("Uso: play &lt;juego&gt;. Prueba: ", "Usage: play &lt;game&gt;. Try: ") + PROJ.games.filter(x => x.repo !== "deploy-quest").map(x => `<span class="c2">${x.repo}</span>`).join(" · ");
    if (g.repo === "deploy-quest") return L("Deploy Quest aún no está publicado: ", "Deploy Quest isn't published yet: ") + `<a href="https://github.com/serbenda/deploy-quest">github.com/serbenda/deploy-quest</a>`;
    const url = `${GAMES_BASE}/${g.repo}/`; setTimeout(() => { location.href = url; }, 700);
    return `<span class="ok">▶ ${L("Cargando", "Loading")} ${esc(g.title)}…</span> <a href="${url}">${url}</a>`;
  },
  frameblock: () => L(
`<span class="hl">🏆 FrameBlock</span> · mejor proyecto del Máster en Blockchain (Universidad Europea, 2023)
Framework para conectar cualquier app con cualquier blockchain.
Caso de uso: colecciones NFT (ERC-721) de imágenes IA en IPFS, en Ethereum, BNB Chain o Polygon, pagando con tarjeta.
→ <a href="/trabajo/#blockchain">/trabajo/#blockchain</a> · <a href="https://github.com/serbenda/frameblock">código</a>`,
`<span class="hl">🏆 FrameBlock</span> · best project, Master's in Blockchain (Universidad Europea, 2023)
A framework to plug any app into any blockchain.
Use case: NFT collections (ERC-721) of AI images on IPFS, on Ethereum, BNB Chain or Polygon, paid by card.
→ <a href="/trabajo/#blockchain">/trabajo/#blockchain</a> · <a href="https://github.com/serbenda/frameblock">code</a>`),
  cv: () => `<span class="ok">⬇</span> <a href="${cvURL()}" download>${cvURL().split("/").pop()}</a>  <span class="dim">(${L("también en", "also in")} ${lang === "es" ? `<a href="/cv/Sergio-Bendana-CV-en.pdf" download>English</a>` : `<a href="/cv/Sergio-Bendana-CV-es.pdf" download>español</a>`})</span>`,
  contact: () =>
`LinkedIn  <a href="https://www.linkedin.com/in/serbenda/">linkedin.com/in/serbenda</a>
GitHub    <a href="https://github.com/serbenda">github.com/serbenda</a>
Sponsor   <a href="https://github.com/sponsors/serbenda">github.com/sponsors/serbenda</a> ❤`,
  ls: () => `<span class="c2">about.txt</span>  <span class="c2">how-i-work.md</span>  <span class="c2">frameblock.md</span>  <span class="ok">cv.pdf</span>  <span class="c3">games/</span>`,
  cat: a => ({ "para-mis-peques.txt": () => PEQUES, "love.txt": () => PEQUES, "about.txt": TRUN.whoami, "how-i-work.md": TRUN.how, "frameblock.md": TRUN.frameblock, "cv.pdf": () => L("Es binario 😅 mejor: ", "It's binary 😅 try: ") + `<span class="c2">cv</span>` }[a] || (() => `cat: ${esc(a || "")}: ${L("no existe. Prueba", "no such file. Try")} <span class="c2">ls</span>`))(),
  lang: a => { const to = a === "en" || a === "es" ? a : (lang === "es" ? "en" : "es"); if (to !== lang) { lang = to; try { localStorage.setItem("lang", lang); } catch (e) {} render(); } return to === "es" ? "Idioma: español" : "Language: English"; },
  clear: () => { document.getElementById("tout").innerHTML = ""; return null; },
  coffee: () => L("☕ ¿Me invitas a un café? ", "☕ Buy me a coffee? ") + `<a href="https://github.com/sponsors/serbenda">github.com/sponsors/serbenda</a> ❤`,
  sudo: a => a === "hire-me" || a === "hire me"
    ? L(`<span class="hl">[sudo] contraseña para recruiter:</span> ********\n<span class="ok">✔ Acceso concedido.</span> Hablemos: <a href="https://www.linkedin.com/in/serbenda/">LinkedIn</a> · CV: <a href="${cvURL()}" download>PDF</a>`,
        `<span class="hl">[sudo] password for recruiter:</span> ********\n<span class="ok">✔ Access granted.</span> Let's talk: <a href="https://www.linkedin.com/in/serbenda/">LinkedIn</a> · CV: <a href="${cvURL()}" download>PDF</a>`)
    : L("bendi no está en el fichero sudoers. Este incidente será reportado. 😄 (prueba: sudo hire-me)", "bendi is not in the sudoers file. This incident will be reported. 😄 (try: sudo hire-me)"),
  exit: () => L("Buen intento. De aquí no se sale sin jugar una partida: <span class=\"c2\">play chapas</span>", "Nice try. Nobody leaves without playing a round: <span class=\"c2\">play chapas</span>"),
  date: () => new Date().toLocaleString(loc()),
  uptime: () => `up ${new Date().getFullYear() - 2005} ${L("años en sistemas", "years in systems")}, load average: 🧒 🧒 🕹️`,
  press: a => /^(button|bot[oó]n)?$/.test(a) ? L(
`🔘 Botón pulsado (1/1).
<span class="hl">⚠️  Detectado el mismo botón pulsado dos veces.</span>
⚙️  Automatizando... <span class="ok">hecho</span>.
🗑️  Botón eliminado. De nada. — <span class="c2">Chief Button Remover</span>`,
`🔘 Button pressed (1/1).
<span class="hl">⚠️  Same button pressed twice detected.</span>
⚙️  Automating... <span class="ok">done</span>.
🗑️  Button removed. You're welcome. — <span class="c2">Chief Button Remover</span>`) : L("press: ¿qué quieres pulsar? Prueba <span class=\"c2\">press button</span>", "press: press what? Try <span class=\"c2\">press button</span>"),
  neofetch: () =>
`<span class="c3">  ▄▄▄▄▄▄▄  </span>  <span class="ok">bendi</span>@<span class="ok">localhost</span>
<span class="c3">  █ ▀ ▀ █  </span>  OS: Linux (${L("desde siempre", "since forever")})
<span class="c3">  █ ▄▄▄ █  </span>  Title: Chief Button Remover 🔘
             Shell: bash · ansible · terraform
<span class="c3">  ▀▀▀▀▀▀▀  </span>  Uptime: ${new Date().getFullYear() - 2005}y · Awards: 🏆 FrameBlock
             Hobbies: ${L("juegos de 8 bits, homelab", "8-bit games, homelab")}`,
};
const PEQUES = `<span class="hl">Todo lo que hay en esta web lo hice yo,
pero lo mejor que he hecho sois vosotras.</span>
Gracias por probar cada juego, por encontrar los bugs
y por pedirme siempre «una partida más». 💛
<span class="ok">— Papá</span>`;
function trun(raw) {
  const line = raw.trim(); if (!line) return;
  TERM.hist.push(line); TERM.at = TERM.hist.length;
  tline(`<span class="ps">bendi@localhost</span>:<span style="color:#60a5fa">~</span>$ <span class="cmd">${esc(line)}</span>`);
  const [c, ...rest] = line.split(/\s+/); const arg = rest.join(" ").toLowerCase();
  const fn = TRUN[c.toLowerCase()];
  const out = fn ? fn(arg) : `${esc(c)}: ${L("comando no encontrado. Escribe", "command not found. Type")} <span class="c2">help</span>`;
  if (out !== null && out !== undefined) tline(out);
}
function termInit() {
  const inp = document.getElementById("tin"); if (!inp) return;
  tline(L(`<span class="ok">Bienvenido/a a bendi.dev</span> · escribe <span class="c2">help</span> o pulsa un comando de abajo.`,
          `<span class="ok">Welcome to bendi.dev</span> · type <span class="c2">help</span> or tap a command below.`), "dim");
  document.getElementById("tform").addEventListener("submit", e => { e.preventDefault(); trun(inp.value); inp.value = ""; });
  inp.addEventListener("keydown", e => {
    if (e.key === "ArrowUp" && TERM.at > 0) { inp.value = TERM.hist[--TERM.at]; e.preventDefault(); }
    else if (e.key === "ArrowDown") { TERM.at = Math.min(TERM.hist.length, TERM.at + 1); inp.value = TERM.hist[TERM.at] || ""; e.preventDefault(); }
    else if (e.key === "Tab") {
      const [c, a] = inp.value.split(/\s+/);
      if (a !== undefined && c === "play") { const m = PROJ.games.map(g => g.repo).filter(r => r.startsWith(a)); if (m.length === 1) inp.value = "play " + m[0]; }
      else { const m = TCMDS.filter(x => x.startsWith(c || "")); if (m.length === 1) inp.value = m[0] + " "; else if (m.length > 1) tline(m.join("  "), "dim"); }
      e.preventDefault();
    }
  });
  document.getElementById("qcmds").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { trun(b.textContent); } });
  document.querySelector(".term").addEventListener("click", e => { if (!e.target.closest("a")) inp.focus({ preventScroll: true }); });
}

/* ---------- easter eggs ---------- */
(() => {
  const K = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]; let i = 0;
  addEventListener("keydown", e => {
    i = e.key === K[i] ? i + 1 : (e.key === K[0] ? 1 : 0);
    if (i === K.length) { i = 0; const arc = $id("arcade"); if (!arc) { location.href = "/arcade/"; return; } document.body.classList.add("konami"); arc.scrollIntoView({ behavior: "smooth" });
      const h = document.getElementById("hiscore"); if (h) h.textContent = "999999"; setTimeout(() => document.body.classList.remove("konami"), 2500); }
  });
  try { console.log("%c bendi.dev %c\n\n¿Curioseando el código? Me caes bien.\nCurious about the code? I like you already.\n\n→ github.com/serbenda · sudo hire-me en la terminal 😉\n",
    "background:#38bdf8;color:#0e1324;font:700 16px monospace;padding:4px 8px;border-radius:4px", "color:#93a0b8;font:13px monospace"); } catch (e) {}
})();

/* header: mark the page you are on */
document.querySelectorAll(".bar nav a").forEach(a => {
  const here = location.pathname.replace(/index\.html$/, ""), to = new URL(a.href).pathname;
  if (here === to) a.setAttribute("aria-current", "page");
});
function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach(n => { n.textContent = t(n.dataset.t); });
  document.querySelectorAll("[data-t-aria]").forEach(n => n.setAttribute("aria-label", t(n.dataset.tAria)));
  document.getElementById("lang").textContent = lang === "es" ? "EN" : "ES";
  renderAbout(); renderArcade(); renderTools(); renderFeatured(); renderFilter(); renderChain();
  ["cvlink", "cvlink2"].forEach(id => { const a = document.getElementById(id); if (a) a.href = cvURL(); });
  if (dashSeen) renderDash();
  document.getElementById("updated").textContent = DATA.updated
    ? `${t("updated")} ${new Date(DATA.updated).toLocaleString(loc(), { dateStyle: "medium", timeStyle: "short" })}` : "";
}
document.getElementById("lang").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
});
$id("filter")?.addEventListener("change", e => { selected = e.target.value; renderDash(); });
let resizeTimer, lastW = window.innerWidth;
window.addEventListener("resize", () => {
  if (window.innerWidth === lastW) return;   // ignore mobile address-bar height changes
  lastW = window.innerWidth; clearTimeout(resizeTimer); if (dashSeen) resizeTimer = setTimeout(renderDash, 150);
});

const getJSON = url => fetch(url, { cache: "no-store" }).then(r => r.ok ? r.json() : null).catch(() => null);
render();
termInit();
const dashIO = "IntersectionObserver" in window ? new IntersectionObserver(es => {
  if (es.some(e => e.isIntersecting)) { dashSeen = true; dashIO.disconnect(); renderDash(); }
}, { rootMargin: "600px 0px" }) : null;
if (!$id("visitas")) dashSeen = false; else if (dashIO) dashIO.observe($id("visitas")); else { dashSeen = true; renderDash(); }
/* Visits are collected every morning by the workflow in github.com/serbenda/serbenda */
const TRAFFIC_URL = "https://raw.githubusercontent.com/serbenda/serbenda/main/data/traffic.json";
/* Demo: only on your own computer (localhost) with ?demo, data made by tools/simular-visitas.mjs */
const DEMO = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) && new URLSearchParams(location.search).has("demo");
const loadTraffic = () => DEMO ? getJSON("/data/traffic.demo.json") : getJSON(TRAFFIC_URL).then(d => d || getJSON("/data/traffic.json"));
Promise.all([loadTraffic(), getJSON("/data/projects.json")]).then(([d, p]) => {
  if (d) DATA = { repos: {}, ...d };
  if (p) PROJ = { games: [], tools: [], ...p };
  render();
  if (DEMO) setInterval(() => loadTraffic().then(d => {
    if (!d) return;
    DATA = { repos: {}, ...d };
    renderArcade();
    if (dashSeen) renderDash();
  }), 3000);
});
