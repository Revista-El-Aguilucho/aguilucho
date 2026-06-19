// ════════════════════════════════════════════════════════════════
//  DATOS.JS  —  EL AGUILUCHO  —  Archivo de configuración
// ════════════════════════════════════════════════════════════════
//
//  Este es el ÚNICO archivo que el comité necesita editar.
//  No toques index.html (ahí vive el diseño y la lógica).
//
//  CÓMO ACTUALIZAR CON IA:
//  1. Abre este archivo completo y cópialo.
//  2. Dile a Claude o ChatGPT:
//     "Actualiza este archivo de configuración con los siguientes
//      cambios: [describe los cambios]"
//  3. Reemplaza el archivo con la versión generada.
//
// ════════════════════════════════════════════════════════════════


// ──────────────────────────────────────────────────────────────
//  1. INFORMACIÓN GENERAL DE LA REVISTA
//     Cambiar solo si hay un cambio institucional.
// ──────────────────────────────────────────────────────────────
const REVISTA = {
  nombre:          "El Aguilucho",
  subtitulo:       "Gimnasio Moderno · Bogotá",
  fundacion:       1927,
  totalEdiciones:  256,
  claim:           "La publicación estudiantil más antigua de América Latina",
  instagram:       "@revistaelaguilucho",
  instagramUrl:    "https://instagram.com/revistaelaguilucho",
  email:           "elaguilucho@gimnasiomoderno.edu.co",
  direccion:       "Carrera 9ª #74-99, Bogotá, Colombia",
  archivoUrl:      "https://gimnasiomoderno.edu.co/medios/revistas/elaguilucho/",
  tituloTab:       "El Aguilucho · Gimnasio Moderno · Bogotá",  // ← Cambia el título de la pestaña del navegador
  copyright:       `© ${new Date().getFullYear()} El Aguilucho · Gimnasio Moderno · Todos los derechos reservados`,
};


// ──────────────────────────────────────────────────────────────
//  2. EDICIÓN ACTUAL
//     Actualizar al inicio de cada año escolar o nueva edición.
// ──────────────────────────────────────────────────────────────
const EDICION_ACTUAL = {
  numero:      "N.256",
  anioEscolar: "2025–2026",
  precio:      "$50.000 COP",
  linkCompra:  "https://tienda.asopadresgm.org.co/tienda/",
  portada:     "images/portada.jpg",   // Reemplaza el archivo en images/
  intro:       `"En esta edición el lector encontrará en sus páginas un Aguilucho en busca de sentido. En cada párrafo se encuentra una humilde revista que nunca va a buscar la perfección, pero que siempre deseará ser un lugar donde aquellas jóvenes voces inconformes y azarosas encuentren en la tinta un lugar donde ser entendidos. Ojalá nuestro contenido le parezca valioso y reflexivo acerca de un Gimnasio lleno de cambios, y que podamos siempre ser aquel lugar que se toma al gimnasiano seriamente entre sus páginas."`,
  subtexto:    "Primera edición del año escolar 2025–2026",
};


// ──────────────────────────────────────────────────────────────
//  3. ANUNCIOS
//     Para actualizar: reemplaza las imágenes en announcements/
//     y edita las rutas aquí. Si el anuncio lleva a una URL,
//     ponla en "link". Si no lleva a ningún lado, pon null.
// ──────────────────────────────────────────────────────────────
const ANUNCIOS = [
  {
    imagen: "announcements/anuncio-1.jpg",
    alt:    "Anuncio",   // Describe brevemente el contenido del anuncio
    link:   null,
  },
  {
    imagen: "announcements/anuncio-2.jpg",
    alt:    "Anuncio",
    link:   null,
  },
];


// ──────────────────────────────────────────────────────────────
//  4. LA PLUMA
//     El semanario/mensual del Gimnasio Moderno.
//     La edición más reciente va PRIMERO (arriba de la lista).
//     En la web se muestran la destacada + 2 ediciones, y el resto
//     aparece al pulsar "Ver todas".
//
//     Para añadir una nueva edición:
//       1. Sube el PDF a Google Drive y obtén el link para compartir.
//       2. Copia el bloque de ejemplo y pégalo AL INICIO de la lista.
//       3. Actualiza número, mes y link.
// ──────────────────────────────────────────────────────────────
// Textos editables de la sección La Pluma
const PLUMA_INFO = {
  // Subtítulo bajo el título "La Pluma"
  subtitulo: `El semanario del Gimnasio Moderno, dirigido a la comunidad gimnasiana. Actualidad, opinión y reflexión desde las aulas. Fundado en 2024 por el docente Juan Carlos Muñoz.`,
  // Texto destacado de la edición actual (titular o tema principal)
  destacadoEdicion: `El regreso del Gimnasio Moderno a la cima con su histórica victoria en la Batuta de Plata 2026.`,
};

const LA_PLUMA = [
  // Ejemplo para añadir edición 14:
  // { numero: 14, mes: "Junio 2026", link: "https://drive.google.com/file/d/TU_ID/view" },
  { numero: 13, mes: "Junio 2026",      link: "https://drive.google.com/file/d/1hxTBUS80TswPzaC2qgH8XezqAlfsqOTF/view?usp=share_link" },
  { numero: 12, mes: "Mayo 2026",       link: "https://drive.google.com/file/d/1k6AWCD4TvnBEyK0PkfVZyEQ8RgZ8K-QO/view?usp=share_link" },
  { numero: 11, mes: "Abril 2026",      link: "https://drive.google.com/file/d/10q2a0iiuBgiIbbpy82Ky_UPWjaIHvkDE/view?usp=share_link" },
  { numero: 8,  mes: "Noviembre 2025",  link: "https://drive.google.com/file/d/1OP1QYQGpHza1_yREW4H2fZDVHejFMfIG/view" },
  { numero: 7,  mes: "Septiembre 2025", link: "https://drive.google.com/file/d/1iOTVHhjocZBnN9cH1vL_STgE1l-cSIOI/view" },
  { numero: 6,  mes: "Junio 2025",      link: "https://drive.google.com/file/d/1lsgDp8Nf3akIWCy_-V8RpK3-0B25u13T/view" },
  { numero: 5,  mes: "Junio 2025",      link: "https://drive.google.com/file/d/1dXPwtmaLxgwa48BkRCHIW_iFTlk7nSvN/view" },
  { numero: 4,  mes: "Abril 2025",      link: "https://drive.google.com/file/d/19cjFxkF94_2leWWcy7ubV3sMGKrnoiwg/view" },
  { numero: 2,  mes: "Agosto 2024",     link: "https://drive.google.com/file/d/1MdjVp4V3HSUjnUT3PAVWJ9Rei5fC1DW8/view" },
  { numero: 1,  mes: "Junio 2024",      link: "https://drive.google.com/file/d/190Kh4dRVjipjLqOzA90X2HrdNDXGwOsH/view" },
  { numero: 0,  mes: "Junio 2024",      link: "https://drive.google.com/file/d/1TTXgEpYM_RL5AAl7QjW_E08OFaVQudjx/view" },
  // ⚠️ Ediciones 3, 9 y 10: pendientes de digitalizar (sin link en el directorio)
];


// ──────────────────────────────────────────────────────────────
//  5. PRESIDENTES DEL COMITÉ
//     Actualizar al inicio de cada año con el nuevo comité.
//     Fotos: reemplaza los archivos en images/ con el mismo nombre.
// ──────────────────────────────────────────────────────────────
const PRESIDENTES = [
  {
    nombre:  "Miguel Montaño",
    cargo:   "Presidente del Comité Editorial",
    foto:    "images/presidente-1.jpg",
    periodo: "2025 – 2026",
  },
  {
    nombre:  "Alejandro Torres",
    cargo:   "Presidente del Comité Financiero",
    foto:    "images/presidente-2.jpg",
    periodo: "2025 – 2026",
  },
  {
    nombre:  "Juan Cruz",
    cargo:   "Presidente del Comité Gráfico",
    foto:    "images/presidente-3.jpg",
    periodo: "2025 – 2026",
  },
  {
    nombre:  "Matías Granados",
    cargo:   "Presidente del Comité de Comunicaciones",
    foto:    "images/presidente-4.jpg",
    periodo: "2025 – 2026",
  },
  {
    nombre:  "PENDIENTE",   // ← Completar con el nombre del Director General
    cargo:   "Director General",
    foto:    "images/presidente-5.jpg",
    periodo: "2025 – 2026",
  },
];


// ──────────────────────────────────────────────────────────────
//  6. EQUIPO
//     Para añadir un miembro: copia una línea y agrégala.
//     Para eliminar: borra la línea completa.
// ──────────────────────────────────────────────────────────────
const EQUIPO = [
  { nombre: "Pablo de la Hoz",        cargo: "Comité Editorial" },
  { nombre: "Martín García",           cargo: "Comité Editorial" },
  { nombre: "Pablo Atuesta",           cargo: "Comité Editorial" },
  { nombre: "Pablo Uribe",             cargo: "Comité Editorial" },
  { nombre: "Tomás Bernal",            cargo: "Comité Financiero" },
  { nombre: "Mateo Durán",             cargo: "Comité Financiero" },
  { nombre: "Rafael García Herreros",  cargo: "Comité Financiero" },
  { nombre: "Pedro Stiefken",          cargo: "Comité Financiero" },
  { nombre: "Facundo Gómez",           cargo: "Comité Financiero" },
  { nombre: "Pedro Saavedra",          cargo: "Comité Gráfico" },
  { nombre: "Luis Enrique Dordelly",   cargo: "Comité Gráfico" },
  { nombre: "Pablo Azevedo",           cargo: "Comité de Comunicaciones" },
  { nombre: "Matías Peña",             cargo: "Comité de Comunicaciones" },
  { nombre: "Juan Esteban Gómez",      cargo: "Comité de Comunicaciones" },
];


// ──────────────────────────────────────────────────────────────
//  8. NUESTRA HISTORIA — Sección "El Aguilucho"
//     Edita los párrafos, la cita y el pie de foto aquí.
//     Para añadir o quitar párrafos, agrega/elimina entradas
//     del array "parrafos". El texto acepta <em> y <strong>.
// ──────────────────────────────────────────────────────────────
const HISTORIA = {
  imagen:      "images/aguilucho.jpg",
  imagenAlt:   "Collage de portadas históricas de El Aguilucho",
  pieFoto:     "Portadas históricas · Archivo El Aguilucho",

  parrafos: [
    `<em>El Aguilucho</em> es la revista estudiantil del Gimnasio Moderno de Bogotá,
     fundada en 1927. Con casi un siglo de trayectoria ininterrumpida, es reconocida
     como la publicación estudiantil más antigua de América Latina.`,

    `Nacida en los claustros del Gimnasio Moderno bajo la inspiración pedagógica de
     Agustín Nieto Caballero, y fundada por el entonces estudiante Eduardo Caballero
     Calderón, la revista surgió como un espacio de expresión, reflexión y debate.
     Desde sus primeras páginas artesanales hasta las ediciones contemporáneas,
     <em>El Aguilucho</em> ha sido testigo y cronista del devenir del país.`,

    `A lo largo de sus ediciones, la publicación ha acogido las plumas de generaciones
     de gimnasiales que con el tiempo se convirtieron en escritores, periodistas,
     académicos, políticos y líderes del pensamiento colombiano.`,
  ],

  cita:       `"No me parece dejarlo bajo un tablero, quiero dejar mi nombre en un Aguilucho"`,
  citaAutor:  `Pablo De la Hoz, miembro del Aguilucho`,
};



//     Lista de ediciones digitalizadas con sus links de Drive.
//     Para añadir una edición nueva al final, copia el formato:
//     { numero: "N.257", anio: "2026", link: "https://drive.google.com/..." }
//
//     ⚠️  PENDIENTE: Verificar los links de N.158 y N.169 —
//         pueden estar apuntando a ediciones incorrectas.
//     ⚠️  PENDIENTE: Añadir ediciones N.252–N.255 cuando
//         estén disponibles en Drive.
// ──────────────────────────────────────────────────────────────
const ARCHIVO = [
  { numero: "N.1",   anio: "1927", link: "https://drive.google.com/file/d/1alMiZFvLDbodu3K-F33z6QzQY0-o2ouc/view" },
  { numero: "N.2",   anio: "1927", link: "https://drive.google.com/file/d/1wcc_DcAVIInKwYwZ8kiXlba721_898sr/view" },
  { numero: "N.3",   anio: "1927", link: "https://drive.google.com/file/d/1IyqLJI9LKk8B9y-MVUUQg8l4pAA4e4k4/view" },
  { numero: "N.4",   anio: "1927", link: "https://drive.google.com/file/d/1OE5XE26PxtFBM5O31iYVE6hQPjtzCFri/view" },
  { numero: "N.5",   anio: "1927", link: "https://drive.google.com/file/d/1_PC_gzCvoP7cI_3K6pFfkl0PZh1wraca/view" },
  { numero: "N.6",   anio: "1927", link: "https://drive.google.com/file/d/1SQA9hsgzXiCGV5x8JZuDNDG9B7cOFUcq/view" },
  { numero: "N.7",   anio: "1927", link: "https://drive.google.com/file/d/1qk9VlzaOQzoeuSbMyBkjf9UiEnL6aaHh/view" },
  { numero: "N.8",   anio: "1927", link: "https://drive.google.com/file/d/1PZD9SwEip7jYOFyLP5cw7k-gubX4e8HJ/view" },
  { numero: "N.9",   anio: "1927", link: "https://drive.google.com/file/d/14L1fc44flRcmS9vPNqFgLZ4X9fcO6Uie/view" },
  { numero: "N.10",  anio: "1927", link: "https://drive.google.com/file/d/1ZTNWfGkb5yUvTB3KB9PZLWzrtcVjSm3Z/view" },
  { numero: "N.11",  anio: "1927", link: "https://drive.google.com/file/d/1ZK5ov2nxMAJ60vKbbDnslcSKHJrckLz_/view" },
  { numero: "N.12",  anio: "1927", link: "https://drive.google.com/file/d/1f1bcoTB-K1zoTs0iRKj30PODJ7r0_3JA/view" },
  { numero: "N.13",  anio: "1928", link: "https://drive.google.com/file/d/1Zdd5V2I2BE-gbfQSuZ9cwyLo5ntjKTeX/view" },
  { numero: "N.14",  anio: "1928", link: "https://drive.google.com/file/d/1n9jYSt90ESXvH8WXuc2zNccoh10LDfFj/view" },
  { numero: "N.15",  anio: "1928", link: "https://drive.google.com/file/d/1gJXwDxCmu0c_rEb4IJrFPbzu9g9zrGmi/view" },
  { numero: "N.16",  anio: "1928", link: "https://drive.google.com/file/d/1Uw7LKOHEHxfjFMzJXHZPczcy6NbsBOrmx/view" },
  { numero: "N.17",  anio: "1928", link: "https://drive.google.com/file/d/1qX_952UIIkyLc_Jpt8nPUY_Jlr2sPBtL/view" },
  { numero: "N.18",  anio: "1928", link: "https://drive.google.com/file/d/11mEuzBxcNTTRtPMSL4nbbqp9jCWijFAM/view" },
  { numero: "N.19",  anio: "1928", link: "https://drive.google.com/file/d/10IifLbGbOI9DBIETLg8q1SD5mMBvFfPs/view" },
  { numero: "N.20",  anio: "1928", link: "https://drive.google.com/file/d/14tztXajmBFqBkKtcGWGj0GRp5i2RZjLL/view" },
  { numero: "N.21",  anio: "1928", link: "https://drive.google.com/file/d/1UmLmOcKJfj07p91PEjlLn6ieffMoDHgJ/view" },
  { numero: "N.22",  anio: "1928", link: "https://drive.google.com/file/d/1DIj7OHzWUhyNY9iYT9V4rU-RuMp38TOc/view" },
  { numero: "N.23",  anio: "1928", link: "https://drive.google.com/file/d/1Ee-oldQYr2jBINIIF3_OWlhDbyvRMskx/view" },
  { numero: "N.24",  anio: "1928", link: "https://drive.google.com/file/d/1WtIW1VMzOOR-tzJXnvGHoWzusioqUmkp/view" },
  { numero: "N.25",  anio: "1928", link: "https://drive.google.com/file/d/1kpK1hFc3Xh1H40p89yRa70MdxNgIhaLv/view" },
  { numero: "N.26",  anio: "1928", link: "https://drive.google.com/file/d/1K1XuzGwtCWVRmBvXCY4FsKKS4GkkE6jP/view" },
  { numero: "N.27",  anio: "1928", link: "https://drive.google.com/file/d/18EGdcGSp2yCmR0JBFy1gTFfRK2Yl1l7I/view" },
  { numero: "N.28",  anio: "1929", link: "https://drive.google.com/file/d/1zJWtXEn9z0pbmf7bWADvf0ZHlCkgGr6u/view" },
  { numero: "N.29",  anio: "1929", link: "https://drive.google.com/file/d/1oFHTnKS3RkPFjGg6MMAnQULe_tL0Lp6e/view" },
  { numero: "N.30",  anio: "1929", link: "https://drive.google.com/file/d/16kDIKPVbMQAyC_8E0M2AqHkJrjGGIILe/view" },
  { numero: "N.31",  anio: "1929", link: "https://drive.google.com/file/d/1PgjGMORXmQ3pI-XM2JBW6y1IfzPkAp-5/view" },
  { numero: "N.32",  anio: "1929", link: "https://drive.google.com/file/d/1r5GKwDpZY1rYtXbhUZWXQhNe5jlFjK7b/view" },
  { numero: "N.33",  anio: "1930", link: "https://drive.google.com/file/d/18lQtM1R8ERz_Mn7yZ4bNOQHBHfqsBGlV/view" },
  { numero: "N.34",  anio: "1930", link: "https://drive.google.com/file/d/1a4nFGwB1OJZH8UknC9akFv7J1FUAhwts/view" },
  { numero: "N.35",  anio: "1930", link: "https://drive.google.com/file/d/1HdJK7X5f_hJXPM3p6dGCZ_h4EBCBdyHZ/view" },
  { numero: "N.36",  anio: "1930", link: "https://drive.google.com/file/d/17KU0aJtpDEPWWkuLdHCpUn2DgHCT7W8d/view" },
  { numero: "N.37",  anio: "1930", link: "https://drive.google.com/file/d/1GFO8YGBkxDfPK2nCimzLiR5TIqL_3-iQ/view" },
  { numero: "N.38",  anio: "1931", link: "https://drive.google.com/file/d/1b16DEXa3WkYGEWGJJEtnRMoA9Hf0Qg25/view" },
  { numero: "N.39",  anio: "1931", link: "https://drive.google.com/file/d/1yD2VAfFHAr0iC5q9pItE2lHpT7aMhlVp/view" },
  { numero: "N.40",  anio: "1931", link: "https://drive.google.com/file/d/1gXyWNgM_Q2v-5BLaJfm5HJgPtnVB3FBh/view" },
  { numero: "N.41",  anio: "1932", link: "https://drive.google.com/file/d/1lVjCqc7aQHPkVY7Tp9I0Sov9FBwOGNTl/view" },
  { numero: "N.42",  anio: "1932", link: "https://drive.google.com/file/d/1yI4Q6VFgFjuUhZ3ib_V5RueMb-iS34cI/view" },
  { numero: "N.43",  anio: "1932", link: "https://drive.google.com/file/d/1DuevSiOSq4MFvH5FKEnOIkDMmM_lf3AX/view" },
  { numero: "N.44",  anio: "1933", link: "https://drive.google.com/file/d/1OfVh2nZ8RHiJhYKxFpEjRqDxVcNlbK-h/view" },
  { numero: "N.45",  anio: "1933", link: "https://drive.google.com/file/d/1P5ZpFVLBLanqB_g5XS6_X0rYQKoB5VBe/view" },
  { numero: "N.46",  anio: "1933", link: "https://drive.google.com/file/d/1VHt5qzGUllQHIAj7V9IKpZ7QBajXnvlT/view" },
  { numero: "N.47",  anio: "1933", link: "https://drive.google.com/file/d/1fkN_7Ks7Lf2cGhBrwAqkZeX0tGumAeSY/view" },
  { numero: "N.48",  anio: "1933", link: "https://drive.google.com/file/d/1IW8jbzHW1bBq8xJKBe4zz2mKq5sWFUjf/view" },
  { numero: "N.49",  anio: "1933", link: "https://drive.google.com/file/d/1kLO5OLQ77t2MkMDlHSmJWg8hzI1kfkNS/view" },
  { numero: "N.50",  anio: "1933", link: "https://drive.google.com/file/d/19GrKPqWCz3IYB-pTDRPZ1JCgOjl7Tz15/view" },
  { numero: "N.51",  anio: "1933", link: "https://drive.google.com/file/d/1_R8c8o5pB-y3pW2vQlYF8qz2rNNbMv02/view" },
  { numero: "N.52",  anio: "1933", link: "https://drive.google.com/file/d/1Nck03UHVEgfMXivBrMxS8oJYqSbXE8Zx/view" },
  { numero: "N.53",  anio: "1933", link: "https://drive.google.com/file/d/1u5nQ-g76W-9K9e-mR1nJlxzSPl2vZjFc/view" },
  { numero: "N.54",  anio: "1933", link: "https://drive.google.com/file/d/1oAIEpXBQTPYqkJRbI9Gm4xqKwYe-hNRR/view" },
  { numero: "N.55",  anio: "1934", link: "https://drive.google.com/file/d/17Y2GXmSlQmNZf2JL8n7nNE11RujN3e3Q/view" },
  { numero: "N.56",  anio: "1934", link: "https://drive.google.com/file/d/1c_fMqvMqJpvICsWVAnMibSrD9pBRKJK3/view" },
  { numero: "N.57",  anio: "1934", link: "https://drive.google.com/file/d/1Ci3MG6mwVUJuN2WdZ2fvIFOJYmMzqtLi/view" },
  { numero: "N.58",  anio: "1934", link: "https://drive.google.com/file/d/1_gqTLBRqZFQl8F5P2EhYNRilnkO7yGK5/view" },
  { numero: "N.59",  anio: "1934", link: "https://drive.google.com/file/d/1Fk9pR3fQoEiH8p9lMpbM0mISnAFJJzLz/view" },
  { numero: "N.60",  anio: "1934", link: "https://drive.google.com/file/d/1JuPj-FmjWv6jQQlDYWqh89hV3NsxhS-y/view" },
  { numero: "N.61",  anio: "1934", link: "https://drive.google.com/file/d/1k2G9LjxM-ksmGJP-KFVVjp6HB89N0i0e/view" },
  { numero: "N.62",  anio: "1935", link: "https://drive.google.com/file/d/1NxzRwl1bfAzFm4G5XE-KCJRHFxzGDNJ7/view" },
  { numero: "N.63",  anio: "1935", link: "https://drive.google.com/file/d/1Nxaj5Oi4TFX8XDrr3RTII7OvxfMCGFP0/view" },
  { numero: "N.64",  anio: "1935", link: "https://drive.google.com/file/d/1LkD2-a0z-VJ7e2uXlMdX-T4SbQSBq6iy/view" },
  { numero: "N.65",  anio: "1935", link: "https://drive.google.com/file/d/18FoOqHWzT8mKdivBmiqeAQlbwXrBkq5H/view" },
  { numero: "N.66",  anio: "1936", link: "https://drive.google.com/file/d/1MuHqI4oNfh6xjrOkPzqNh-rMfBR1tqv6/view" },
  { numero: "N.67",  anio: "1936", link: "https://drive.google.com/file/d/1P9NWVAOXsAUbNePkf5A2_NcRdPDyJ0mj/view" },
  { numero: "N.68",  anio: "1936", link: "https://drive.google.com/file/d/1kNLZr5c9K2KCk3T8L4Mn5p4I9HlCxwFl/view" },
  { numero: "N.69",  anio: "1936", link: "https://drive.google.com/file/d/1Z1lPkLGJ3-4t0eMuuHVdIVLLj8V-eFi7/view" },
  { numero: "N.70",  anio: "1937", link: "https://drive.google.com/file/d/10UULj7w2m5J5YTAQW3dLWvBZ0XOFdAI4/view" },
  { numero: "N.71",  anio: "1937", link: "https://drive.google.com/file/d/1Iepj5lfAiFHCR3o9VsXNVSHWt1IUQ8I8/view" },
  { numero: "N.72",  anio: "1937", link: "https://drive.google.com/file/d/1biVCRr1UKSjF8_FXFQTM2kqRvIVQqACC/view" },
  { numero: "N.73",  anio: "1938", link: "https://drive.google.com/file/d/1MfT7GKkXbpXLyiF6e3s5LW4PX3G5G6ck/view" },
  { numero: "N.74",  anio: "1938", link: "https://drive.google.com/file/d/1s-P7PYuqpkuBVnMWbnqH4q2ZP7jJPgzZ/view" },
  { numero: "N.75",  anio: "1938", link: "https://drive.google.com/file/d/12mFtnnGfhLONXXJYxJPNHPMFNEQ15kEo/view" },
  { numero: "N.76",  anio: "1939", link: "https://drive.google.com/file/d/1HT4sRb2oBYnAy4LVFh9f05sQTQRO3z5y/view" },
  { numero: "N.77",  anio: "1939", link: "https://drive.google.com/file/d/1V0kYJZHJNDDW3TlRFJ_e1m2bJBuNkVK2/view" },
  { numero: "N.78",  anio: "1940", link: "https://drive.google.com/file/d/1MBfbVWJGm7xaGHmHe7xtuvLiMGC-wZDE/view" },
  { numero: "N.79",  anio: "1940", link: "https://drive.google.com/file/d/1YiFeSzSoSqLmr-Q2I33JMBkZmrJBNWG2/view" },
  { numero: "N.80",  anio: "1940", link: "https://drive.google.com/file/d/1E_8FHGaKxbQNcBCIh2v-LMi-i_r3k8hD/view" },
  { numero: "N.81",  anio: "1941", link: "https://drive.google.com/file/d/1hODuHXnDLcz6b_wLY2EeluFrm1bBrJWZ/view" },
  { numero: "N.82",  anio: "1941", link: "https://drive.google.com/file/d/1r6IJQ1IUE0FkCRyRm6IFiWzGzxfqLMlp/view" },
  { numero: "N.83",  anio: "1942", link: "https://drive.google.com/file/d/1R2njbJqJD5Y2gO4CZAJ53dCPTB33vSbz/view" },
  { numero: "N.84",  anio: "1942", link: "https://drive.google.com/file/d/1X2_TuLBOzjwqEaMDJqjfj6iFyFJGPmgU/view" },
  { numero: "N.85",  anio: "1943", link: "https://drive.google.com/file/d/1kqMQunrMQp7VVBX6IKCGXFMlm5bX-v4D/view" },
  { numero: "N.86",  anio: "1943", link: "https://drive.google.com/file/d/13VmFJ6jjsN0DqpEJMpSKKJKNLm3YUSV4/view" },
  { numero: "N.87",  anio: "1944", link: "https://drive.google.com/file/d/1QqOj5K1S6N3lM4MApSE7t7Ub1EtFM0CU/view" },
  { numero: "N.88",  anio: "1944", link: "https://drive.google.com/file/d/1Fne2JFtxADKaRtBjzLPKbPJTbLIioqas/view" },
  { numero: "N.89",  anio: "1945", link: "https://drive.google.com/file/d/1bk8F7iEdEe7wQiXuaSflbQxv34k3JkDG/view" },
  { numero: "N.90",  anio: "1945", link: "https://drive.google.com/file/d/1NVaV_xA5bPnJOvJcz6g7IH3_llwmjmYZ/view" },
  { numero: "N.91",  anio: "1946", link: "https://drive.google.com/file/d/1hJqfFLyvGPCPLvb8JKZB3Nk3T1t0yPVH/view" },
  { numero: "N.92",  anio: "1946", link: "https://drive.google.com/file/d/1yEGGVqkZcFbWqfJvFfM1KbNX1mSvBnZ6/view" },
  { numero: "N.93",  anio: "1947", link: "https://drive.google.com/file/d/1Yy8cFakCvkqvRnMiEgAImWxbGkbsGU67/view" },
  { numero: "N.94",  anio: "1947", link: "https://drive.google.com/file/d/1l4ZPt5ADj0ULJvw5mGMB_oUeO8Nw1TKE/view" },
  { numero: "N.95",  anio: "1948", link: "https://drive.google.com/file/d/1tqbXFOZPpCBbdqkk5S5aBIuFTlDXz3Nb/view" },
  { numero: "N.96",  anio: "1948", link: "https://drive.google.com/file/d/1wkHxQWiAaJSvHgNvOB1R3K4v5YGYL5uS/view" },
  { numero: "N.97",  anio: "1949", link: "https://drive.google.com/file/d/1B-xGsUTfBfqMvkpLsQ_i8P2IFQcaBxnH/view" },
  { numero: "N.98",  anio: "1949", link: "https://drive.google.com/file/d/13rJuYPHXMKxwPQqCHyVe-y6mGGIAHc4G/view" },
  { numero: "N.99",  anio: "1950", link: "https://drive.google.com/file/d/10ssMtbClnynuRPZ7vNJ_Q1Z_GuvPLPvT/view" },
  { numero: "N.100", anio: "1950", link: "https://drive.google.com/file/d/1v1b8K3JBlxpBkMIr3a5Bh5s16F1pbN0o/view" },
  { numero: "N.101", anio: "1951", link: "https://drive.google.com/file/d/1Z9nrBCvKR6X4TGRN5XSfVTLkWUE0mf8e/view" },
  { numero: "N.102", anio: "1951", link: "https://drive.google.com/file/d/1yEQf0GdFNGSSf42pXYnFPBp9E3NvNfHW/view" },
  { numero: "N.103", anio: "1952", link: "https://drive.google.com/file/d/17PPUA1lKS7NWTPC8PZQP2qXtpkHVJ2pB/view" },
  { numero: "N.104", anio: "1952", link: "https://drive.google.com/file/d/1l2S7rblJVoOxRGijiqM62hhXGb5_jENg/view" },
  { numero: "N.105", anio: "1953", link: "https://drive.google.com/file/d/1iYgMkX2q3GEjpVUFb3fU0ERIFMy8mkck/view" },
  { numero: "N.106", anio: "1953", link: "https://drive.google.com/file/d/1GkMDuGp7uJdBRfpvOHniM1vVgCbGCRqv/view" },
  { numero: "N.107", anio: "1954", link: "https://drive.google.com/file/d/1FMWqHPrfj3dSREr_lSJkBn5HzWjipbRu/view" },
  { numero: "N.108", anio: "1954", link: "https://drive.google.com/file/d/1k6tIhXgHb-7Aa2AEdC_9GDt0gflmEXJP/view" },
  { numero: "N.109", anio: "1955", link: "https://drive.google.com/file/d/17SRMTG1NRFCGRr6E-3h1dE2J6Kd_KnOb/view" },
  { numero: "N.110", anio: "1955", link: "https://drive.google.com/file/d/1GMV6msSrpZNJkibOqCmGW4EqV2gJ8lQr/view" },
  { numero: "N.111", anio: "1956", link: "https://drive.google.com/file/d/1IUl5aLNzGj4XW9C0dv8mgkPpGMYU0E7k/view" },
  { numero: "N.112", anio: "1956", link: "https://drive.google.com/file/d/1E3uZN_IVmflBRaTaXV1a_1s5aXxX_7Xz/view" },
  { numero: "N.113", anio: "1957", link: "https://drive.google.com/file/d/18M-9UiZuqtNlJD0AhXFzBX1WX7QDXR5W/view" },
  { numero: "N.114", anio: "1957", link: "https://drive.google.com/file/d/1RWo1F-MChkEHmGV7PCFT8n-1GbH14pFh/view" },
  { numero: "N.115", anio: "1958", link: "https://drive.google.com/file/d/10rvH4k7gAdK4gCnCFz7z_cGkfnYKBVGT/view" },
  { numero: "N.116", anio: "1958", link: "https://drive.google.com/file/d/1cR3nIABhwLAhSekBMHwDMl_D4t0mTfj1/view" },
  { numero: "N.117", anio: "1959", link: "https://drive.google.com/file/d/13x1VjFIEiQ1CxupLIzSnvpP8bO7FhTuI/view" },
  { numero: "N.118", anio: "1959", link: "https://drive.google.com/file/d/1o8ByaQ_4DhVrg_Z6e8CmVvpIz0d8PpNh/view" },
  { numero: "N.119", anio: "1959", link: "https://drive.google.com/file/d/1N58-HFd5apJOlGr3d2xMdL3iV_lcqUH4/view" },
  { numero: "N.120", anio: "1959", link: "https://drive.google.com/file/d/1ZUjhJMqnVEEb8CHSXFE4iRBfMGSA2X8j/view" },
  { numero: "N.121", anio: "1960", link: "https://drive.google.com/file/d/1iHWGI_i8l9YMJ7d6lHIw_V-HCb_JB5MF/view" },
  { numero: "N.122", anio: "1960", link: "https://drive.google.com/file/d/1a8HikIAEi7nq-XBNfJHYfRKnajDzwZAk/view" },
  { numero: "N.123", anio: "1961", link: "https://drive.google.com/file/d/1R8V1FmpZAMWzgjNkxHQcnl8ycKJbL7S8/view" },
  { numero: "N.124", anio: "1961", link: "https://drive.google.com/file/d/18sJsqHH8PtdqD1Kl0lTDRvGf0rLHv9O_/view" },
  { numero: "N.125", anio: "1962", link: "https://drive.google.com/file/d/1MoVKE7yK9FJz5nWO_5N-lTpkLEVKU-Uc/view" },
  { numero: "N.126", anio: "1962", link: "https://drive.google.com/file/d/1k4NdpCfKUEenSfVlFa2iWlCbVqOqRhFa/view" },
  { numero: "N.127", anio: "1963", link: "https://drive.google.com/file/d/1pJGG3bBfXHJM3-lEFHMzQfNNqRjZdHKW/view" },
  { numero: "N.128", anio: "1963", link: "https://drive.google.com/file/d/1TzSpJKVxaFkI77FpApPMqmDnFVLx2eFf/view" },
  { numero: "N.129", anio: "1964", link: "https://drive.google.com/file/d/1HjTH0OABlwPkKq1eAbEjvT_cK0cTzB-x/view" },
  { numero: "N.130", anio: "1964", link: "https://drive.google.com/file/d/1yDJlm2wTjZfM1F8akZ_E7bk5x3dBHGK8/view" },
  { numero: "N.131", anio: "1965", link: "https://drive.google.com/file/d/10PMiYJdJuPOuVlX4UlUHiSaEYiJOWVJO/view" },
  { numero: "N.132", anio: "1965", link: "https://drive.google.com/file/d/1cqjvVDVwT5u6P9gGVpanMBf0b4t9g7VG/view" },
  { numero: "N.133", anio: "1966", link: "https://drive.google.com/file/d/1xCjYHcGl1oOB0x9FUaJEiEzOJaUC6pFh/view" },
  { numero: "N.134", anio: "1966", link: "https://drive.google.com/file/d/17vH9sFAaqoXz-d4eOqEiLQ73N2-UvUqK/view" },
  { numero: "N.135", anio: "1967", link: "https://drive.google.com/file/d/1DvhCECsVyETSBMmGVNmGQmOqDnhipVHR/view" },
  { numero: "N.136", anio: "1967", link: "https://drive.google.com/file/d/1UqmC0GiBEDcriJGNiqH_8z0PXWtEAkDe/view" },
  { numero: "N.137", anio: "1967", link: "https://drive.google.com/file/d/1K8LBm9BhVQoWqdBBZM6Vy7CuCGFAhAFI/view" },
  { numero: "N.138", anio: "1968", link: "https://drive.google.com/file/d/1GrVNNfL8qHFm-lXJEyuCJuMh94yYoVGU/view" },
  { numero: "N.139", anio: "1968", link: "https://drive.google.com/file/d/15Q8fIlgQX2l1aQtmkWMz1tMjNZuC1D30/view" },
  { numero: "N.140", anio: "1969", link: "https://drive.google.com/file/d/1dL1NN8N6oPlGSJYbdJ_YXr-SLXi1k6F5/view" },
  { numero: "N.141", anio: "1969", link: "https://drive.google.com/file/d/16eGZbVi9_RsHSNvC4fKSQGRY3S3l6VSG/view" },
  { numero: "N.142", anio: "1969", link: "https://drive.google.com/file/d/1vlgkJHxg4ywW2jkB_q4O2OqfZqHjSNNq/view" },
  { numero: "N.143", anio: "1970", link: "https://drive.google.com/file/d/1OT5cg-ZRWxjHMYHb5JvZJOVMJGPmBr4s/view" },
  { numero: "N.144", anio: "1970", link: "https://drive.google.com/file/d/1hQISk1UfZ3KeUu0MsIkBzBnQv0JFagJU/view" },
  { numero: "N.145", anio: "1970", link: "https://drive.google.com/file/d/1xepWQ_vIvD4J1tEgkEEJISRKhyJMDuOC/view" },
  { numero: "N.146", anio: "1971", link: "https://drive.google.com/file/d/1HgQH-mLRxH6QfONZpfpkGq8AO1RMfzXP/view" },
  { numero: "N.147", anio: "1971", link: "https://drive.google.com/file/d/1t1YCLi-ZfHFiuBPuM-bMVhOEWQ2xAqPV/view" },
  { numero: "N.148", anio: "1971", link: "https://drive.google.com/file/d/1aEJsWrJO4T3d29IhYqQpF_Ei_rkPiNIF/view" },
  { numero: "N.149", anio: "1971", link: "https://drive.google.com/file/d/1gDuvRx-_MEBxHqxIQeQMqiAI6oa9E-Ck/view" },
  { numero: "N.150", anio: "1971", link: "https://drive.google.com/file/d/1rT76pVTPlvuSOASjPuqYhGMxK4a5RBLV/view" },
  { numero: "N.151", anio: "1971", link: "https://drive.google.com/file/d/1Azoa8F6pk8RnOAINBhWgravS_wdtgEFt/view" },
  { numero: "N.152", anio: "1972", link: "https://drive.google.com/file/d/1ReE8EXZa8y_neaNpjYbpFq8jDd7RoyZ8/view" },
  { numero: "N.153", anio: "1972", link: "https://drive.google.com/file/d/1unD45K1S1EcRjU2Esh3mvevkP4gLR-XU/view" },
  { numero: "N.154", anio: "1973", link: "https://drive.google.com/file/d/193AnoECAVrfc9ljj2xpl3IJtAXPQVeqn/view" },
  { numero: "N.155", anio: "1974", link: "https://drive.google.com/file/d/1laTUj_a4Sv-h0twCchjbVDqOXMnZbwDL/view" },
  { numero: "N.156", anio: "1974", link: "https://drive.google.com/file/d/1VLFRxHYIp3cirVu7wu1x2AoI2RgArg3V/view" },
  { numero: "N.157", anio: "1974", link: "https://drive.google.com/file/d/1e94JaE5NJNJ5D-vfBplJLbavc0WSHjCT/view" },
  { numero: "N.158", anio: "1975", link: "https://drive.google.com/file/d/1nAjVoNz_PnaUiNeb6z6dExutxjcC0IeY/view" }, // ⚠️ verificar link
  { numero: "N.159", anio: "1975", link: "https://drive.google.com/file/d/1nAjVoNz_PnaUiNeb6z6dExutxjcC0IeY/view" },
  { numero: "N.160", anio: "1976", link: "https://drive.google.com/file/d/1mF_EpONERkleSOGTAhfaS9zX_HC0iGIa/view" },
  { numero: "N.161", anio: "1976", link: "https://drive.google.com/file/d/11TKUIxsRIV9rudc8qqmj9QfA51nWBTnI/view" },
  { numero: "N.162", anio: "1977", link: "https://drive.google.com/file/d/1CkBLvCpIHr1rD2I33-4rDp-QT-kNjkr7/view" },
  { numero: "N.163", anio: "1977", link: "https://drive.google.com/file/d/1b6DuXdRatYVL_GP8JQfWwu-t44VJjYFi/view" },
  { numero: "N.164", anio: "1978", link: "https://drive.google.com/file/d/1x4cDBuTZFgzV7ezuYupGIalxSkysrcP0/view" },
  { numero: "N.165", anio: "1978", link: "https://drive.google.com/file/d/1UZaPG3LKNCOm-WaHbfTyaUmAJI8hPpn/view" },
  { numero: "N.167", anio: "1979", link: "https://drive.google.com/file/d/1kDgI9ZtFRX4aZ80uI49veAA3VPsTp2na/view" },
  { numero: "N.168", anio: "1980", link: "https://drive.google.com/file/d/17yl_lzWn5fFG47ILwNnd1YGGQOqix3gA/view" },
  { numero: "N.169", anio: "1980", link: "https://drive.google.com/file/d/1hgEmX1mPjFRmaAy87_8EY8NQR3nIn0sQ/view" }, // ⚠️ verificar link
  { numero: "N.170", anio: "1981", link: "https://drive.google.com/file/d/1hgEmX1mPjFRmaAy87_8EY8NQR3nIn0sQ/view" },
  { numero: "N.172", anio: "1982", link: "https://drive.google.com/file/d/1-zAziwWiwbf5LMnddMIsdnVqNERoLkdv/view" },
  { numero: "N.173", anio: "1982", link: "https://drive.google.com/file/d/1KRgE9GLBCewQdQC-SXdoDxRKroFUBQAm/view" },
  { numero: "N.174", anio: "1983", link: "https://drive.google.com/file/d/1unahI1a2EHcI8hkJLzk-U5ajALrWdV7g/view" },
  { numero: "N.175", anio: "1983", link: "https://drive.google.com/file/d/1fJmiHxtIg3ML5SuV9lBHOvWXelCJr04j/view" },
  { numero: "N.176", anio: "1984", link: "https://drive.google.com/file/d/1wtaVQlqoRfexOoycRWKB2KAyXKc-36Mp/view" },
  { numero: "N.177", anio: "1984", link: "https://drive.google.com/file/d/11mGPUr_R7YVGq3gDwM6EynEgpG57Wlra/view" },
  { numero: "N.178", anio: "1985", link: "https://drive.google.com/file/d/1tMobDu3bTNKMNabei1D_CMXbTrWuYqzR/view" },
  { numero: "N.179", anio: "1985", link: "https://drive.google.com/file/d/1eYXeQj3ogIKpXfErHGH14nTv3zTEcqF9/view" },
  { numero: "N.180", anio: "1986", link: "https://drive.google.com/file/d/1MWET0hbj2oWQrxMumPlTs-szckD6y8-m/view" },
  { numero: "N.181", anio: "1986", link: "https://drive.google.com/file/d/1rYLaFVonPIzZiphp7HsVqVrMzfuQoCeb/view" },
  { numero: "N.182", anio: "1987", link: "https://drive.google.com/file/d/1lODVzRNc6i253JyqXQSYU3pJVQNbaRD2/view" },
  { numero: "N.183", anio: "1987", link: "https://drive.google.com/file/d/1A0gICbEBBT8EDChebS_VfiVptUKovRuB/view" },
  { numero: "N.184", anio: "1988", link: "https://drive.google.com/file/d/14weJbLACejpW_vvvvvbWUZz0BM2AZfhd/view" },
  { numero: "N.185", anio: "1988", link: "https://drive.google.com/file/d/1T6lQeElh3uGJtzMTqrVhaA-E_qjaVSo1/view" },
  { numero: "N.186", anio: "1989", link: "https://drive.google.com/file/d/1WigDz4Ig9mwU3Fr1i0xnRFEM-O--ev7s/view" },
  { numero: "N.187", anio: "1989", link: "https://drive.google.com/file/d/1fhRKCCT7kx0Da0YLzDmbNukvCEi-TqFS/view" },
  { numero: "N.188", anio: "1990", link: "https://drive.google.com/file/d/1DcMiKW3xgirWNPppw-G1as6jz6zSLi3e/view" },
  { numero: "N.190", anio: "1991", link: "https://drive.google.com/file/d/1yrVu9iAZ190ilSUcCdumpS-FA-2yXjWE/view" },
  { numero: "N.191", anio: "1991", link: "https://drive.google.com/file/d/1sNlCyHe8H0ee7GOTQtl9yVKmgq3JEuAC/view" },
  { numero: "N.192", anio: "1992", link: "https://drive.google.com/file/d/1HGvlKT4yIEfRKar0l3DOHxm-B6asLx6V/view" },
  { numero: "N.194", anio: "1993", link: "https://drive.google.com/file/d/148ZAumpnaLFBFVvBzYlQ5L4dyME9wZI9/view" },
  { numero: "N.195", anio: "1993", link: "https://drive.google.com/file/d/1XaQgqwlRvCrGRQYTASjG1sNxaoVMv392/view" },
  { numero: "N.196", anio: "1994", link: "https://drive.google.com/file/d/19iurA6elbuPbZh54nC3vPxBcxZpepZfU/view" },
  { numero: "N.197", anio: "1994", link: "https://drive.google.com/file/d/1qsbK6kSp4XxwSnMaMBb3Ns82gnw3jIua/view" },
  { numero: "N.198", anio: "1995", link: "https://drive.google.com/file/d/1NjUxvxFlze5ZYdsp7OHaX1mRR5X-jFfk/view" },
  { numero: "N.199", anio: "1995", link: "https://drive.google.com/file/d/1gX4XYg7FhP0nEKsgiktd61WjZq3BWZaN/view" },
  { numero: "N.200", anio: "1996", link: "https://drive.google.com/file/d/12AgU8YZUWJDWuev6Cwo_ElXW9iJp6_9g/view" },
  { numero: "N.201", anio: "1996", link: "https://drive.google.com/file/d/1wTu30XddWEZeUtzvZGCrvBthIywI4Ub6/view" },
  { numero: "N.202", anio: "1997", link: "https://drive.google.com/file/d/1Miwm0AwXT0EIfz8KTT-IQqMK0xaQlTLI/view" },
  { numero: "N.203", anio: "1997", link: "https://drive.google.com/file/d/1On4g1-Rt3QnDq_WxqfTEigzQKGsX2U20/view" },
  { numero: "N.204", anio: "1998", link: "https://drive.google.com/file/d/1Z0yuJoubjJh61tnOu1ylfS7TuQzqrY_e/view" },
  { numero: "N.205", anio: "1998", link: "https://drive.google.com/file/d/1FXsrGQe4lfBXgvYCsOiMTJnci2d3mP2s/view" },
  { numero: "N.206", anio: "1999", link: "https://drive.google.com/file/d/1u0Mapal_T86AL6kXAqAb5xytWUX_a0_7/view" },
  { numero: "N.207", anio: "1999", link: "https://drive.google.com/file/d/1gceZSuAzwhEAptc-HcXUgsIYnUyeeOmu/view" },
  { numero: "N.208", anio: "2000", link: "https://drive.google.com/file/d/1mzWiLCYBSCTg1I5KgJl7Hmeu3-ENKs9P/view" },
  { numero: "N.209", anio: "2000", link: "https://drive.google.com/file/d/14h550L0MF1b1l_-3hYLe0JtqSDUIYZBd/view" },
  { numero: "N.210", anio: "2001", link: "https://drive.google.com/file/d/1br9UlJJSTnO3xmmXQhXpR4puygLxbjon/view" },
  { numero: "N.211", anio: "2002", link: "https://drive.google.com/file/d/1wneFoqa6_zmXPtzkF9zKlSVcX5gKGhiq/view" },
  { numero: "N.212", anio: "2002", link: "https://drive.google.com/file/d/1iKknYkwTlpO6wgAqOTVlBW9KyO-cxn_p/view" },
  { numero: "N.213", anio: "2003", link: "https://drive.google.com/file/d/1aLufZjtXiTcFj49JmjIlhqQv5njvhFUc/view" },
  { numero: "N.214", anio: "2003", link: "https://drive.google.com/file/d/15RjBjVUhBmSGdM8X4sPdIntD95u8Ps2O/view" },
  { numero: "N.215", anio: "2004", link: "https://drive.google.com/file/d/1as6_EfyY30Mjsvb6DSp7dZyrnKsv8w8X/view" },
  { numero: "N.216", anio: "2004", link: "https://drive.google.com/file/d/16j7R1gJDR7IGkVEEljIyfNUnrVprylVd/view" },
  { numero: "N.217", anio: "2005", link: "https://drive.google.com/file/d/1rOwdF-R1gg-EwMbmvn22KngZj59Zd4LP/view" },
  { numero: "N.218", anio: "2005", link: "https://drive.google.com/file/d/1SH7514PXwqkkdoP2QpJxLB-pqqQG-TKX/view" },
  { numero: "N.219", anio: "2006", link: "https://drive.google.com/file/d/1JutuK0OMG2fNKuvLAAxl9M5q3CThbZgF/view" },
  { numero: "N.220", anio: "2006", link: "https://drive.google.com/file/d/1gIni21hagkA7XQi-gK12HhRSMdNpnWXX/view" },
  { numero: "N.221", anio: "2007", link: "https://drive.google.com/file/d/1D6mBurdnYKqqBCUG9eAkQGTZQUI6mWFs/view" },
  { numero: "N.222", anio: "2007", link: "https://drive.google.com/file/d/1pwwKqB1WYLJLFk6EofzkVsZ6HCvtlInk/view" },
  { numero: "N.223", anio: "2008", link: "https://drive.google.com/file/d/1DYM17f9kfwjJ7wGKeoD4oQMwOfWX8tWt/view" },
  { numero: "N.224", anio: "2008", link: "https://drive.google.com/file/d/1dnjfV0iXVmRlVNtjCbENUchnOhRt280x/view" },
  { numero: "N.225", anio: "2009", link: "https://drive.google.com/file/d/1wxA1tfFlmuzgapRCA4OpZJP4fOHrS3rh/view" },
  { numero: "N.226", anio: "2009", link: "https://drive.google.com/file/d/1COTS4G7PtXVyneqwif8wtvDjcxfVRXvb/view" },
  { numero: "N.227", anio: "2010", link: "https://drive.google.com/file/d/1OJlf5JQqfoOhzcOkRzEMipA5Jv6jKc8L/view" },
  { numero: "N.228", anio: "2010", link: "https://drive.google.com/file/d/1r3lBkTpm7sRcneSBMebbeXdfBynR-eie/view" },
  { numero: "N.229", anio: "2011", link: "https://drive.google.com/file/d/1m65IFhZZ8Wu6U0r4NJldTe8RJA8RjiQm/view" },
  { numero: "N.230", anio: "2011", link: "https://drive.google.com/file/d/15eLJeBUhtC12n6K6ea_-Ak1FqH9zaEqB/view" },
  { numero: "N.231", anio: "2012", link: "https://drive.google.com/file/d/12-arGhbBHmvXeA_-L8FKe-4KVh1eztmK/view" },
  { numero: "N.232", anio: "2012", link: "https://drive.google.com/file/d/1SqIjRHIK4SmsIPh9xir9v7q7ht0okBjI/view" },
  { numero: "N.233", anio: "2013", link: "https://drive.google.com/file/d/1Qjeb0Yty7ZZd3G60d9TImp88Uv1HODVa/view" },
  { numero: "N.234", anio: "2013", link: "https://drive.google.com/file/d/1VgI62N_LxU22tgJ_X79wjHJBIs6zNMLY/view" },
  { numero: "N.235", anio: "2014", link: "https://drive.google.com/file/d/1W4kEWgVBJYDqsv_HHz3gmtBJaylW1kY6/view" },
  { numero: "N.236", anio: "2014", link: "https://drive.google.com/file/d/1oankvgXpiYYHn8TlWulIeYVmFDsb0ddT/view" },
  { numero: "N.237", anio: "2015", link: "https://drive.google.com/file/d/1e3eF8GX-JbKdORwGgxWALB-x29rWg7c7/view" },
  { numero: "N.238", anio: "2015", link: "https://drive.google.com/file/d/1djEnUWtLixhRPo7an2HUsnrfJ6VByidE/view" },
  { numero: "N.239", anio: "2016", link: "https://drive.google.com/file/d/1rUYw6zUcDe0BMc6cqX99zJY3uWO9K6Rr/view" },
  { numero: "N.240", anio: "2016", link: "https://drive.google.com/file/d/1e2aKJu-jcjuUcC9ahC0LvUsH0oNfRB4a/view" },
  { numero: "N.241", anio: "2017", link: "https://drive.google.com/file/d/1wkb09GW8qywRX5jlYroggEyMDXuvNlmy/view" },
  { numero: "N.242", anio: "2017", link: "https://drive.google.com/file/d/1ELJcXE7cdgpFUrSuMZmBrHcx2p1l8d8s/view" },
  { numero: "N.244", anio: "2018", link: "https://drive.google.com/file/d/1fbknwQ-YSKNOkVqKL0le4Aj4G5Bb4RFJ/view" },
  { numero: "N.245", anio: "2018", link: "https://drive.google.com/file/d/1lx4en-hfnE61uS_YRwdJllcT-3jtV1I_/view" },
  { numero: "N.246", anio: "2019", link: "https://drive.google.com/file/d/1m4IQlyigWIXa5lUHY2y5S4hQf2z_W_p4/view" },
  { numero: "N.247", anio: "2019", link: "https://drive.google.com/file/d/1T8w7vW2HOIv_pUMf6uejUJnQ2UoJ-5sP/view" },
  { numero: "N.248", anio: "2020", link: "https://drive.google.com/file/d/1Fi68_4Y3MjwSy8308LdlPXBbfy4-xenE/view" },
  { numero: "N.249", anio: "2021", link: "https://drive.google.com/file/d/1GJFNhzLgxIbtu4TA69dHEHXXGAiFqu_I/view" },
  { numero: "N.250", anio: "2022", link: "https://drive.google.com/file/d/1btto3Tes8zvqRiHhAsPWbR7KPtOdnbB2/view" },
  { numero: "N.251", anio: "2022", link: "https://drive.google.com/file/d/1uYg7UrO2rOwRgmEDErlc-5R4tGBg8XRG/view" },
];// ──────────────────────────────────────────────────────────────
//  2. EDICIÓN ACTUAL
//     Actualizar al inicio de cada año escolar o nueva edición.
// ──────────────────────────────────────────────────────────────
const EDICION_ACTUAL = {
  numero:      "N.256",
  anioEscolar: "2025–2026",
  precio:      "$50.000 COP",
  linkCompra:  "https://tienda.asopadresgm.org.co/tienda/",
  portada:     "images/portada.jpg",   // Reemplaza el archivo en images/
  intro:       `"En esta edición el lector encontrará en sus páginas un Aguilucho en busca de sentido. En cada párrafo se encuentra una humilde revista que nunca va a buscar la perfección, pero que siempre deseará ser un lugar donde aquellas jóvenes voces inconformes y azarosas encuentren en la tinta un lugar donde ser entendidos. Ojalá nuestro contenido le parezca valioso y reflexivo acerca de un Gimnasio lleno de cambios, y que podamos siempre ser aquel lugar que se toma al gimnasiano seriamente entre sus páginas."`,
  subtexto:    "Primera edición del año escolar 2025–2026",
};


// ──────────────────────────────────────────────────────────────
//  3. ANUNCIOS
//     Para actualizar: reemplaza las imágenes en announcements/
//     y edita las rutas aquí. Si el anuncio lleva a una URL,
//     ponla en "link". Si no lleva a ningún lado, pon null.
// ──────────────────────────────────────────────────────────────
const ANUNCIOS = [
  {
    imagen: "announcements/anuncio-1.jpg",
    alt:    "Anuncio",   // Describe brevemente el contenido del anuncio
    link:   null,
  },
  {
    imagen: "announcements/anuncio-2.jpg",
    alt:    "Anuncio",
    link:   null,
  },
];


// ──────────────────────────────────────────────────────────────
//  4. LA PLUMA
//     El semanario/mensual del Gimnasio Moderno.
//     La edición más reciente va PRIMERO (arriba de la lista).
//     En la web se muestran la destacada + 2 ediciones, y el resto
//     aparece al pulsar "Ver todas".
//
//     Para añadir una nueva edición:
//       1. Sube el PDF a Google Drive y obtén el link para compartir.
//       2. Copia el bloque de ejemplo y pégalo AL INICIO de la lista.
//       3. Actualiza número, mes y link.
// ──────────────────────────────────────────────────────────────
// Textos editables de la sección La Pluma
const PLUMA_INFO = {
  // Subtítulo bajo el título "La Pluma"
  subtitulo: `El semanario del Gimnasio Moderno, dirigido a la comunidad gimnasiana. Actualidad, opinión y reflexión desde las aulas. Fundado en 2024 por el docente Juan Carlos Muñoz.`,
  // Texto destacado de la edición actual (titular o tema principal)
  destacadoEdicion: `El regreso del Gimnasio Moderno a la cima con su histórica victoria en la Batuta de Plata 2026.`,
};

const LA_PLUMA = [
  // Ejemplo para añadir edición 14:
  // { numero: 14, mes: "Junio 2026", link: "https://drive.google.com/file/d/TU_ID/view" },
  { numero: 13, mes: "Junio 2026",      link: "https://drive.google.com/file/d/1hxTBUS80TswPzaC2qgH8XezqAlfsqOTF/view?usp=share_link" },
  { numero: 12, mes: "Mayo 2026",       link: "https://drive.google.com/file/d/1k6AWCD4TvnBEyK0PkfVZyEQ8RgZ8K-QO/view?usp=share_link" },
  { numero: 11, mes: "Abril 2026",      link: "https://drive.google.com/file/d/10q2a0iiuBgiIbbpy82Ky_UPWjaIHvkDE/view?usp=share_link" },
  { numero: 8,  mes: "Noviembre 2025",  link: "https://drive.google.com/file/d/1OP1QYQGpHza1_yREW4H2fZDVHejFMfIG/view" },
  { numero: 7,  mes: "Septiembre 2025", link: "https://drive.google.com/file/d/1iOTVHhjocZBnN9cH1vL_STgE1l-cSIOI/view" },
  { numero: 6,  mes: "Junio 2025",      link: "https://drive.google.com/file/d/1lsgDp8Nf3akIWCy_-V8RpK3-0B25u13T/view" },
  { numero: 5,  mes: "Junio 2025",      link: "https://drive.google.com/file/d/1dXPwtmaLxgwa48BkRCHIW_iFTlk7nSvN/view" },
  { numero: 4,  mes: "Abril 2025",      link: "https://drive.google.com/file/d/19cjFxkF94_2leWWcy7ubV3sMGKrnoiwg/view" },
  { numero: 2,  mes: "Agosto 2024",     link: "https://drive.google.com/file/d/1MdjVp4V3HSUjnUT3PAVWJ9Rei5fC1DW8/view" },
  { numero: 1,  mes: "Junio 2024",      link: "https://drive.google.com/file/d/190Kh4dRVjipjLqOzA90X2HrdNDXGwOsH/view" },
  { numero: 0,  mes: "Junio 2024",      link: "https://drive.google.com/file/d/1TTXgEpYM_RL5AAl7QjW_E08OFaVQudjx/view" },
  // ⚠️ Ediciones 3, 9 y 10: pendientes de digitalizar (sin link en el directorio)
];


// ──────────────────────────────────────────────────────────────
//  5. PRESIDENTES DEL COMITÉ
//     Actualizar al inicio de cada año con el nuevo comité.
//     Fotos: reemplaza los archivos en images/ con el mismo nombre.
// ──────────────────────────────────────────────────────────────
const PRESIDENTES = [
  {
    nombre:  "Miguel Montaño",
    cargo:   "Presidente del Comité Editorial",
    foto:    "images/presidente-1.jpg",
    periodo: "2025 – 2026",
  },
  {
    nombre:  "Alejandro Torres",
    cargo:   "Presidente del Comité Financiero",
    foto:    "images/presidente-2.jpg",
    periodo: "2025 – 2026",
  },
  {
    nombre:  "Juan Cruz",
    cargo:   "Presidente del Comité Gráfico",
    foto:    "images/presidente-3.jpg",
    periodo: "2025 – 2026",
  },
  {
    nombre:  "Matías Granados",
    cargo:   "Presidente del Comité de Comunicaciones",
    foto:    "images/presidente-4.jpg",
    periodo: "2025 – 2026",
  },
  {
    nombre:  "PENDIENTE",   // ← Completar con el nombre del Director General
    cargo:   "Director General",
    foto:    "images/presidente-5.jpg",
    periodo: "2025 – 2026",
  },
];


// ──────────────────────────────────────────────────────────────
//  6. EQUIPO
//     Para añadir un miembro: copia una línea y agrégala.
//     Para eliminar: borra la línea completa.
// ──────────────────────────────────────────────────────────────
const EQUIPO = [
  { nombre: "Pablo de la Hoz",        cargo: "Comité Editorial" },
  { nombre: "Martín García",           cargo: "Comité Editorial" },
  { nombre: "Pablo Atuesta",           cargo: "Comité Editorial" },
  { nombre: "Pablo Uribe",             cargo: "Comité Editorial" },
  { nombre: "Tomás Bernal",            cargo: "Comité Financiero" },
  { nombre: "Mateo Durán",             cargo: "Comité Financiero" },
  { nombre: "Rafael García Herreros",  cargo: "Comité Financiero" },
  { nombre: "Pedro Stiefken",          cargo: "Comité Financiero" },
  { nombre: "Facundo Gómez",           cargo: "Comité Financiero" },
  { nombre: "Pedro Saavedra",          cargo: "Comité Gráfico" },
  { nombre: "Luis Enrique Dordelly",   cargo: "Comité Gráfico" },
  { nombre: "Pablo Azevedo",           cargo: "Comité de Comunicaciones" },
  { nombre: "Matías Peña",             cargo: "Comité de Comunicaciones" },
  { nombre: "Juan Esteban Gómez",      cargo: "Comité de Comunicaciones" },
];


// ──────────────────────────────────────────────────────────────
//  8. NUESTRA HISTORIA — Sección "El Aguilucho"
//     Edita los párrafos, la cita y el pie de foto aquí.
//     Para añadir o quitar párrafos, agrega/elimina entradas
//     del array "parrafos". El texto acepta <em> y <strong>.
// ──────────────────────────────────────────────────────────────
const HISTORIA = {
  imagen:      "images/aguilucho.jpg",
  imagenAlt:   "Collage de portadas históricas de El Aguilucho",
  pieFoto:     "Portadas históricas · Archivo El Aguilucho",

  parrafos: [
    `<em>El Aguilucho</em> es la revista estudiantil del Gimnasio Moderno de Bogotá,
     fundada en 1927. Con casi un siglo de trayectoria ininterrumpida, es reconocida
     como la publicación estudiantil más antigua de América Latina.`,

    `Nacida en los claustros del Gimnasio Moderno bajo la inspiración pedagógica de
     Agustín Nieto Caballero, y fundada por el entonces estudiante Eduardo Caballero
     Calderón, la revista surgió como un espacio de expresión, reflexión y debate.
     Desde sus primeras páginas artesanales hasta las ediciones contemporáneas,
     <em>El Aguilucho</em> ha sido testigo y cronista del devenir del país.`,

    `A lo largo de sus ediciones, la publicación ha acogido las plumas de generaciones
     de gimnasiales que con el tiempo se convirtieron en escritores, periodistas,
     académicos, políticos y líderes del pensamiento colombiano.`,
  ],

  cita:       `"No me parece dejarlo bajo un tablero, quiero dejar mi nombre en un Aguilucho"`,
  citaAutor:  `Pablo De la Hoz, miembro del Aguilucho`,
};



//     Lista de ediciones digitalizadas con sus links de Drive.
//     Para añadir una edición nueva al final, copia el formato:
//     { numero: "N.257", anio: "2026", link: "https://drive.google.com/..." }
//
//     ⚠️  PENDIENTE: Verificar los links de N.158 y N.169 —
//         pueden estar apuntando a ediciones incorrectas.
//     ⚠️  PENDIENTE: Añadir ediciones N.252–N.255 cuando
//         estén disponibles en Drive.
// ──────────────────────────────────────────────────────────────
const ARCHIVO = [
  { numero: "N.1",   anio: "1927", link: "https://drive.google.com/file/d/1alMiZFvLDbodu3K-F33z6QzQY0-o2ouc/view" },
  { numero: "N.2",   anio: "1927", link: "https://drive.google.com/file/d/1wcc_DcAVIInKwYwZ8kiXlba721_898sr/view" },
  { numero: "N.3",   anio: "1927", link: "https://drive.google.com/file/d/1IyqLJI9LKk8B9y-MVUUQg8l4pAA4e4k4/view" },
  { numero: "N.4",   anio: "1927", link: "https://drive.google.com/file/d/1OE5XE26PxtFBM5O31iYVE6hQPjtzCFri/view" },
  { numero: "N.5",   anio: "1927", link: "https://drive.google.com/file/d/1_PC_gzCvoP7cI_3K6pFfkl0PZh1wraca/view" },
  { numero: "N.6",   anio: "1927", link: "https://drive.google.com/file/d/1SQA9hsgzXiCGV5x8JZuDNDG9B7cOFUcq/view" },
  { numero: "N.7",   anio: "1927", link: "https://drive.google.com/file/d/1qk9VlzaOQzoeuSbMyBkjf9UiEnL6aaHh/view" },
  { numero: "N.8",   anio: "1927", link: "https://drive.google.com/file/d/1PZD9SwEip7jYOFyLP5cw7k-gubX4e8HJ/view" },
  { numero: "N.9",   anio: "1927", link: "https://drive.google.com/file/d/14L1fc44flRcmS9vPNqFgLZ4X9fcO6Uie/view" },
  { numero: "N.10",  anio: "1927", link: "https://drive.google.com/file/d/1ZTNWfGkb5yUvTB3KB9PZLWzrtcVjSm3Z/view" },
  { numero: "N.11",  anio: "1927", link: "https://drive.google.com/file/d/1ZK5ov2nxMAJ60vKbbDnslcSKHJrckLz_/view" },
  { numero: "N.12",  anio: "1927", link: "https://drive.google.com/file/d/1f1bcoTB-K1zoTs0iRKj30PODJ7r0_3JA/view" },
  { numero: "N.13",  anio: "1928", link: "https://drive.google.com/file/d/1Zdd5V2I2BE-gbfQSuZ9cwyLo5ntjKTeX/view" },
  { numero: "N.14",  anio: "1928", link: "https://drive.google.com/file/d/1n9jYSt90ESXvH8WXuc2zNccoh10LDfFj/view" },
  { numero: "N.15",  anio: "1928", link: "https://drive.google.com/file/d/1gJXwDxCmu0c_rEb4IJrFPbzu9g9zrGmi/view" },
  { numero: "N.16",  anio: "1928", link: "https://drive.google.com/file/d/1Uw7LKOHEHxfjFMzJXHZPczcy6NbsBOrmx/view" },
  { numero: "N.17",  anio: "1928", link: "https://drive.google.com/file/d/1qX_952UIIkyLc_Jpt8nPUY_Jlr2sPBtL/view" },
  { numero: "N.18",  anio: "1928", link: "https://drive.google.com/file/d/11mEuzBxcNTTRtPMSL4nbbqp9jCWijFAM/view" },
  { numero: "N.19",  anio: "1928", link: "https://drive.google.com/file/d/10IifLbGbOI9DBIETLg8q1SD5mMBvFfPs/view" },
  { numero: "N.20",  anio: "1928", link: "https://drive.google.com/file/d/14tztXajmBFqBkKtcGWGj0GRp5i2RZjLL/view" },
  { numero: "N.21",  anio: "1928", link: "https://drive.google.com/file/d/1UmLmOcKJfj07p91PEjlLn6ieffMoDHgJ/view" },
  { numero: "N.22",  anio: "1928", link: "https://drive.google.com/file/d/1DIj7OHzWUhyNY9iYT9V4rU-RuMp38TOc/view" },
  { numero: "N.23",  anio: "1928", link: "https://drive.google.com/file/d/1Ee-oldQYr2jBINIIF3_OWlhDbyvRMskx/view" },
  { numero: "N.24",  anio: "1928", link: "https://drive.google.com/file/d/1WtIW1VMzOOR-tzJXnvGHoWzusioqUmkp/view" },
  { numero: "N.25",  anio: "1928", link: "https://drive.google.com/file/d/1kpK1hFc3Xh1H40p89yRa70MdxNgIhaLv/view" },
  { numero: "N.26",  anio: "1928", link: "https://drive.google.com/file/d/1K1XuzGwtCWVRmBvXCY4FsKKS4GkkE6jP/view" },
  { numero: "N.27",  anio: "1928", link: "https://drive.google.com/file/d/18EGdcGSp2yCmR0JBFy1gTFfRK2Yl1l7I/view" },
  { numero: "N.28",  anio: "1929", link: "https://drive.google.com/file/d/1zJWtXEn9z0pbmf7bWADvf0ZHlCkgGr6u/view" },
  { numero: "N.29",  anio: "1929", link: "https://drive.google.com/file/d/1oFHTnKS3RkPFjGg6MMAnQULe_tL0Lp6e/view" },
  { numero: "N.30",  anio: "1929", link: "https://drive.google.com/file/d/16kDIKPVbMQAyC_8E0M2AqHkJrjGGIILe/view" },
  { numero: "N.31",  anio: "1929", link: "https://drive.google.com/file/d/1PgjGMORXmQ3pI-XM2JBW6y1IfzPkAp-5/view" },
  { numero: "N.32",  anio: "1929", link: "https://drive.google.com/file/d/1r5GKwDpZY1rYtXbhUZWXQhNe5jlFjK7b/view" },
  { numero: "N.33",  anio: "1930", link: "https://drive.google.com/file/d/18lQtM1R8ERz_Mn7yZ4bNOQHBHfqsBGlV/view" },
  { numero: "N.34",  anio: "1930", link: "https://drive.google.com/file/d/1a4nFGwB1OJZH8UknC9akFv7J1FUAhwts/view" },
  { numero: "N.35",  anio: "1930", link: "https://drive.google.com/file/d/1HdJK7X5f_hJXPM3p6dGCZ_h4EBCBdyHZ/view" },
  { numero: "N.36",  anio: "1930", link: "https://drive.google.com/file/d/17KU0aJtpDEPWWkuLdHCpUn2DgHCT7W8d/view" },
  { numero: "N.37",  anio: "1930", link: "https://drive.google.com/file/d/1GFO8YGBkxDfPK2nCimzLiR5TIqL_3-iQ/view" },
  { numero: "N.38",  anio: "1931", link: "https://drive.google.com/file/d/1b16DEXa3WkYGEWGJJEtnRMoA9Hf0Qg25/view" },
  { numero: "N.39",  anio: "1931", link: "https://drive.google.com/file/d/1yD2VAfFHAr0iC5q9pItE2lHpT7aMhlVp/view" },
  { numero: "N.40",  anio: "1931", link: "https://drive.google.com/file/d/1gXyWNgM_Q2v-5BLaJfm5HJgPtnVB3FBh/view" },
  { numero: "N.41",  anio: "1932", link: "https://drive.google.com/file/d/1lVjCqc7aQHPkVY7Tp9I0Sov9FBwOGNTl/view" },
  { numero: "N.42",  anio: "1932", link: "https://drive.google.com/file/d/1yI4Q6VFgFjuUhZ3ib_V5RueMb-iS34cI/view" },
  { numero: "N.43",  anio: "1932", link: "https://drive.google.com/file/d/1DuevSiOSq4MFvH5FKEnOIkDMmM_lf3AX/view" },
  { numero: "N.44",  anio: "1933", link: "https://drive.google.com/file/d/1OfVh2nZ8RHiJhYKxFpEjRqDxVcNlbK-h/view" },
  { numero: "N.45",  anio: "1933", link: "https://drive.google.com/file/d/1P5ZpFVLBLanqB_g5XS6_X0rYQKoB5VBe/view" },
  { numero: "N.46",  anio: "1933", link: "https://drive.google.com/file/d/1VHt5qzGUllQHIAj7V9IKpZ7QBajXnvlT/view" },
  { numero: "N.47",  anio: "1933", link: "https://drive.google.com/file/d/1fkN_7Ks7Lf2cGhBrwAqkZeX0tGumAeSY/view" },
  { numero: "N.48",  anio: "1933", link: "https://drive.google.com/file/d/1IW8jbzHW1bBq8xJKBe4zz2mKq5sWFUjf/view" },
  { numero: "N.49",  anio: "1933", link: "https://drive.google.com/file/d/1kLO5OLQ77t2MkMDlHSmJWg8hzI1kfkNS/view" },
  { numero: "N.50",  anio: "1933", link: "https://drive.google.com/file/d/19GrKPqWCz3IYB-pTDRPZ1JCgOjl7Tz15/view" },
  { numero: "N.51",  anio: "1933", link: "https://drive.google.com/file/d/1_R8c8o5pB-y3pW2vQlYF8qz2rNNbMv02/view" },
  { numero: "N.52",  anio: "1933", link: "https://drive.google.com/file/d/1Nck03UHVEgfMXivBrMxS8oJYqSbXE8Zx/view" },
  { numero: "N.53",  anio: "1933", link: "https://drive.google.com/file/d/1u5nQ-g76W-9K9e-mR1nJlxzSPl2vZjFc/view" },
  { numero: "N.54",  anio: "1933", link: "https://drive.google.com/file/d/1oAIEpXBQTPYqkJRbI9Gm4xqKwYe-hNRR/view" },
  { numero: "N.55",  anio: "1934", link: "https://drive.google.com/file/d/17Y2GXmSlQmNZf2JL8n7nNE11RujN3e3Q/view" },
  { numero: "N.56",  anio: "1934", link: "https://drive.google.com/file/d/1c_fMqvMqJpvICsWVAnMibSrD9pBRKJK3/view" },
  { numero: "N.57",  anio: "1934", link: "https://drive.google.com/file/d/1Ci3MG6mwVUJuN2WdZ2fvIFOJYmMzqtLi/view" },
  { numero: "N.58",  anio: "1934", link: "https://drive.google.com/file/d/1_gqTLBRqZFQl8F5P2EhYNRilnkO7yGK5/view" },
  { numero: "N.59",  anio: "1934", link: "https://drive.google.com/file/d/1Fk9pR3fQoEiH8p9lMpbM0mISnAFJJzLz/view" },
  { numero: "N.60",  anio: "1934", link: "https://drive.google.com/file/d/1JuPj-FmjWv6jQQlDYWqh89hV3NsxhS-y/view" },
  { numero: "N.61",  anio: "1934", link: "https://drive.google.com/file/d/1k2G9LjxM-ksmGJP-KFVVjp6HB89N0i0e/view" },
  { numero: "N.62",  anio: "1935", link: "https://drive.google.com/file/d/1NxzRwl1bfAzFm4G5XE-KCJRHFxzGDNJ7/view" },
  { numero: "N.63",  anio: "1935", link: "https://drive.google.com/file/d/1Nxaj5Oi4TFX8XDrr3RTII7OvxfMCGFP0/view" },
  { numero: "N.64",  anio: "1935", link: "https://drive.google.com/file/d/1LkD2-a0z-VJ7e2uXlMdX-T4SbQSBq6iy/view" },
  { numero: "N.65",  anio: "1935", link: "https://drive.google.com/file/d/18FoOqHWzT8mKdivBmiqeAQlbwXrBkq5H/view" },
  { numero: "N.66",  anio: "1936", link: "https://drive.google.com/file/d/1MuHqI4oNfh6xjrOkPzqNh-rMfBR1tqv6/view" },
  { numero: "N.67",  anio: "1936", link: "https://drive.google.com/file/d/1P9NWVAOXsAUbNePkf5A2_NcRdPDyJ0mj/view" },
  { numero: "N.68",  anio: "1936", link: "https://drive.google.com/file/d/1kNLZr5c9K2KCk3T8L4Mn5p4I9HlCxwFl/view" },
  { numero: "N.69",  anio: "1936", link: "https://drive.google.com/file/d/1Z1lPkLGJ3-4t0eMuuHVdIVLLj8V-eFi7/view" },
  { numero: "N.70",  anio: "1937", link: "https://drive.google.com/file/d/10UULj7w2m5J5YTAQW3dLWvBZ0XOFdAI4/view" },
  { numero: "N.71",  anio: "1937", link: "https://drive.google.com/file/d/1Iepj5lfAiFHCR3o9VsXNVSHWt1IUQ8I8/view" },
  { numero: "N.72",  anio: "1937", link: "https://drive.google.com/file/d/1biVCRr1UKSjF8_FXFQTM2kqRvIVQqACC/view" },
  { numero: "N.73",  anio: "1938", link: "https://drive.google.com/file/d/1MfT7GKkXbpXLyiF6e3s5LW4PX3G5G6ck/view" },
  { numero: "N.74",  anio: "1938", link: "https://drive.google.com/file/d/1s-P7PYuqpkuBVnMWbnqH4q2ZP7jJPgzZ/view" },
  { numero: "N.75",  anio: "1938", link: "https://drive.google.com/file/d/12mFtnnGfhLONXXJYxJPNHPMFNEQ15kEo/view" },
  { numero: "N.76",  anio: "1939", link: "https://drive.google.com/file/d/1HT4sRb2oBYnAy4LVFh9f05sQTQRO3z5y/view" },
  { numero: "N.77",  anio: "1939", link: "https://drive.google.com/file/d/1V0kYJZHJNDDW3TlRFJ_e1m2bJBuNkVK2/view" },
  { numero: "N.78",  anio: "1940", link: "https://drive.google.com/file/d/1MBfbVWJGm7xaGHmHe7xtuvLiMGC-wZDE/view" },
  { numero: "N.79",  anio: "1940", link: "https://drive.google.com/file/d/1YiFeSzSoSqLmr-Q2I33JMBkZmrJBNWG2/view" },
  { numero: "N.80",  anio: "1940", link: "https://drive.google.com/file/d/1E_8FHGaKxbQNcBCIh2v-LMi-i_r3k8hD/view" },
  { numero: "N.81",  anio: "1941", link: "https://drive.google.com/file/d/1hODuHXnDLcz6b_wLY2EeluFrm1bBrJWZ/view" },
  { numero: "N.82",  anio: "1941", link: "https://drive.google.com/file/d/1r6IJQ1IUE0FkCRyRm6IFiWzGzxfqLMlp/view" },
  { numero: "N.83",  anio: "1942", link: "https://drive.google.com/file/d/1R2njbJqJD5Y2gO4CZAJ53dCPTB33vSbz/view" },
  { numero: "N.84",  anio: "1942", link: "https://drive.google.com/file/d/1X2_TuLBOzjwqEaMDJqjfj6iFyFJGPmgU/view" },
  { numero: "N.85",  anio: "1943", link: "https://drive.google.com/file/d/1kqMQunrMQp7VVBX6IKCGXFMlm5bX-v4D/view" },
  { numero: "N.86",  anio: "1943", link: "https://drive.google.com/file/d/13VmFJ6jjsN0DqpEJMpSKKJKNLm3YUSV4/view" },
  { numero: "N.87",  anio: "1944", link: "https://drive.google.com/file/d/1QqOj5K1S6N3lM4MApSE7t7Ub1EtFM0CU/view" },
  { numero: "N.88",  anio: "1944", link: "https://drive.google.com/file/d/1Fne2JFtxADKaRtBjzLPKbPJTbLIioqas/view" },
  { numero: "N.89",  anio: "1945", link: "https://drive.google.com/file/d/1bk8F7iEdEe7wQiXuaSflbQxv34k3JkDG/view" },
  { numero: "N.90",  anio: "1945", link: "https://drive.google.com/file/d/1NVaV_xA5bPnJOvJcz6g7IH3_llwmjmYZ/view" },
  { numero: "N.91",  anio: "1946", link: "https://drive.google.com/file/d/1hJqfFLyvGPCPLvb8JKZB3Nk3T1t0yPVH/view" },
  { numero: "N.92",  anio: "1946", link: "https://drive.google.com/file/d/1yEGGVqkZcFbWqfJvFfM1KbNX1mSvBnZ6/view" },
  { numero: "N.93",  anio: "1947", link: "https://drive.google.com/file/d/1Yy8cFakCvkqvRnMiEgAImWxbGkbsGU67/view" },
  { numero: "N.94",  anio: "1947", link: "https://drive.google.com/file/d/1l4ZPt5ADj0ULJvw5mGMB_oUeO8Nw1TKE/view" },
  { numero: "N.95",  anio: "1948", link: "https://drive.google.com/file/d/1tqbXFOZPpCBbdqkk5S5aBIuFTlDXz3Nb/view" },
  { numero: "N.96",  anio: "1948", link: "https://drive.google.com/file/d/1wkHxQWiAaJSvHgNvOB1R3K4v5YGYL5uS/view" },
  { numero: "N.97",  anio: "1949", link: "https://drive.google.com/file/d/1B-xGsUTfBfqMvkpLsQ_i8P2IFQcaBxnH/view" },
  { numero: "N.98",  anio: "1949", link: "https://drive.google.com/file/d/13rJuYPHXMKxwPQqCHyVe-y6mGGIAHc4G/view" },
  { numero: "N.99",  anio: "1950", link: "https://drive.google.com/file/d/10ssMtbClnynuRPZ7vNJ_Q1Z_GuvPLPvT/view" },
  { numero: "N.100", anio: "1950", link: "https://drive.google.com/file/d/1v1b8K3JBlxpBkMIr3a5Bh5s16F1pbN0o/view" },
  { numero: "N.101", anio: "1951", link: "https://drive.google.com/file/d/1Z9nrBCvKR6X4TGRN5XSfVTLkWUE0mf8e/view" },
  { numero: "N.102", anio: "1951", link: "https://drive.google.com/file/d/1yEQf0GdFNGSSf42pXYnFPBp9E3NvNfHW/view" },
  { numero: "N.103", anio: "1952", link: "https://drive.google.com/file/d/17PPUA1lKS7NWTPC8PZQP2qXtpkHVJ2pB/view" },
  { numero: "N.104", anio: "1952", link: "https://drive.google.com/file/d/1l2S7rblJVoOxRGijiqM62hhXGb5_jENg/view" },
  { numero: "N.105", anio: "1953", link: "https://drive.google.com/file/d/1iYgMkX2q3GEjpVUFb3fU0ERIFMy8mkck/view" },
  { numero: "N.106", anio: "1953", link: "https://drive.google.com/file/d/1GkMDuGp7uJdBRfpvOHniM1vVgCbGCRqv/view" },
  { numero: "N.107", anio: "1954", link: "https://drive.google.com/file/d/1FMWqHPrfj3dSREr_lSJkBn5HzWjipbRu/view" },
  { numero: "N.108", anio: "1954", link: "https://drive.google.com/file/d/1k6tIhXgHb-7Aa2AEdC_9GDt0gflmEXJP/view" },
  { numero: "N.109", anio: "1955", link: "https://drive.google.com/file/d/17SRMTG1NRFCGRr6E-3h1dE2J6Kd_KnOb/view" },
  { numero: "N.110", anio: "1955", link: "https://drive.google.com/file/d/1GMV6msSrpZNJkibOqCmGW4EqV2gJ8lQr/view" },
  { numero: "N.111", anio: "1956", link: "https://drive.google.com/file/d/1IUl5aLNzGj4XW9C0dv8mgkPpGMYU0E7k/view" },
  { numero: "N.112", anio: "1956", link: "https://drive.google.com/file/d/1E3uZN_IVmflBRaTaXV1a_1s5aXxX_7Xz/view" },
  { numero: "N.113", anio: "1957", link: "https://drive.google.com/file/d/18M-9UiZuqtNlJD0AhXFzBX1WX7QDXR5W/view" },
  { numero: "N.114", anio: "1957", link: "https://drive.google.com/file/d/1RWo1F-MChkEHmGV7PCFT8n-1GbH14pFh/view" },
  { numero: "N.115", anio: "1958", link: "https://drive.google.com/file/d/10rvH4k7gAdK4gCnCFz7z_cGkfnYKBVGT/view" },
  { numero: "N.116", anio: "1958", link: "https://drive.google.com/file/d/1cR3nIABhwLAhSekBMHwDMl_D4t0mTfj1/view" },
  { numero: "N.117", anio: "1959", link: "https://drive.google.com/file/d/13x1VjFIEiQ1CxupLIzSnvpP8bO7FhTuI/view" },
  { numero: "N.118", anio: "1959", link: "https://drive.google.com/file/d/1o8ByaQ_4DhVrg_Z6e8CmVvpIz0d8PpNh/view" },
  { numero: "N.119", anio: "1959", link: "https://drive.google.com/file/d/1N58-HFd5apJOlGr3d2xMdL3iV_lcqUH4/view" },
  { numero: "N.120", anio: "1959", link: "https://drive.google.com/file/d/1ZUjhJMqnVEEb8CHSXFE4iRBfMGSA2X8j/view" },
  { numero: "N.121", anio: "1960", link: "https://drive.google.com/file/d/1iHWGI_i8l9YMJ7d6lHIw_V-HCb_JB5MF/view" },
  { numero: "N.122", anio: "1960", link: "https://drive.google.com/file/d/1a8HikIAEi7nq-XBNfJHYfRKnajDzwZAk/view" },
  { numero: "N.123", anio: "1961", link: "https://drive.google.com/file/d/1R8V1FmpZAMWzgjNkxHQcnl8ycKJbL7S8/view" },
  { numero: "N.124", anio: "1961", link: "https://drive.google.com/file/d/18sJsqHH8PtdqD1Kl0lTDRvGf0rLHv9O_/view" },
  { numero: "N.125", anio: "1962", link: "https://drive.google.com/file/d/1MoVKE7yK9FJz5nWO_5N-lTpkLEVKU-Uc/view" },
  { numero: "N.126", anio: "1962", link: "https://drive.google.com/file/d/1k4NdpCfKUEenSfVlFa2iWlCbVqOqRhFa/view" },
  { numero: "N.127", anio: "1963", link: "https://drive.google.com/file/d/1pJGG3bBfXHJM3-lEFHMzQfNNqRjZdHKW/view" },
  { numero: "N.128", anio: "1963", link: "https://drive.google.com/file/d/1TzSpJKVxaFkI77FpApPMqmDnFVLx2eFf/view" },
  { numero: "N.129", anio: "1964", link: "https://drive.google.com/file/d/1HjTH0OABlwPkKq1eAbEjvT_cK0cTzB-x/view" },
  { numero: "N.130", anio: "1964", link: "https://drive.google.com/file/d/1yDJlm2wTjZfM1F8akZ_E7bk5x3dBHGK8/view" },
  { numero: "N.131", anio: "1965", link: "https://drive.google.com/file/d/10PMiYJdJuPOuVlX4UlUHiSaEYiJOWVJO/view" },
  { numero: "N.132", anio: "1965", link: "https://drive.google.com/file/d/1cqjvVDVwT5u6P9gGVpanMBf0b4t9g7VG/view" },
  { numero: "N.133", anio: "1966", link: "https://drive.google.com/file/d/1xCjYHcGl1oOB0x9FUaJEiEzOJaUC6pFh/view" },
  { numero: "N.134", anio: "1966", link: "https://drive.google.com/file/d/17vH9sFAaqoXz-d4eOqEiLQ73N2-UvUqK/view" },
  { numero: "N.135", anio: "1967", link: "https://drive.google.com/file/d/1DvhCECsVyETSBMmGVNmGQmOqDnhipVHR/view" },
  { numero: "N.136", anio: "1967", link: "https://drive.google.com/file/d/1UqmC0GiBEDcriJGNiqH_8z0PXWtEAkDe/view" },
  { numero: "N.137", anio: "1967", link: "https://drive.google.com/file/d/1K8LBm9BhVQoWqdBBZM6Vy7CuCGFAhAFI/view" },
  { numero: "N.138", anio: "1968", link: "https://drive.google.com/file/d/1GrVNNfL8qHFm-lXJEyuCJuMh94yYoVGU/view" },
  { numero: "N.139", anio: "1968", link: "https://drive.google.com/file/d/15Q8fIlgQX2l1aQtmkWMz1tMjNZuC1D30/view" },
  { numero: "N.140", anio: "1969", link: "https://drive.google.com/file/d/1dL1NN8N6oPlGSJYbdJ_YXr-SLXi1k6F5/view" },
  { numero: "N.141", anio: "1969", link: "https://drive.google.com/file/d/16eGZbVi9_RsHSNvC4fKSQGRY3S3l6VSG/view" },
  { numero: "N.142", anio: "1969", link: "https://drive.google.com/file/d/1vlgkJHxg4ywW2jkB_q4O2OqfZqHjSNNq/view" },
  { numero: "N.143", anio: "1970", link: "https://drive.google.com/file/d/1OT5cg-ZRWxjHMYHb5JvZJOVMJGPmBr4s/view" },
  { numero: "N.144", anio: "1970", link: "https://drive.google.com/file/d/1hQISk1UfZ3KeUu0MsIkBzBnQv0JFagJU/view" },
  { numero: "N.145", anio: "1970", link: "https://drive.google.com/file/d/1xepWQ_vIvD4J1tEgkEEJISRKhyJMDuOC/view" },
  { numero: "N.146", anio: "1971", link: "https://drive.google.com/file/d/1HgQH-mLRxH6QfONZpfpkGq8AO1RMfzXP/view" },
  { numero: "N.147", anio: "1971", link: "https://drive.google.com/file/d/1t1YCLi-ZfHFiuBPuM-bMVhOEWQ2xAqPV/view" },
  { numero: "N.148", anio: "1971", link: "https://drive.google.com/file/d/1aEJsWrJO4T3d29IhYqQpF_Ei_rkPiNIF/view" },
  { numero: "N.149", anio: "1971", link: "https://drive.google.com/file/d/1gDuvRx-_MEBxHqxIQeQMqiAI6oa9E-Ck/view" },
  { numero: "N.150", anio: "1971", link: "https://drive.google.com/file/d/1rT76pVTPlvuSOASjPuqYhGMxK4a5RBLV/view" },
  { numero: "N.151", anio: "1971", link: "https://drive.google.com/file/d/1Azoa8F6pk8RnOAINBhWgravS_wdtgEFt/view" },
  { numero: "N.152", anio: "1972", link: "https://drive.google.com/file/d/1ReE8EXZa8y_neaNpjYbpFq8jDd7RoyZ8/view" },
  { numero: "N.153", anio: "1972", link: "https://drive.google.com/file/d/1unD45K1S1EcRjU2Esh3mvevkP4gLR-XU/view" },
  { numero: "N.154", anio: "1973", link: "https://drive.google.com/file/d/193AnoECAVrfc9ljj2xpl3IJtAXPQVeqn/view" },
  { numero: "N.155", anio: "1974", link: "https://drive.google.com/file/d/1laTUj_a4Sv-h0twCchjbVDqOXMnZbwDL/view" },
  { numero: "N.156", anio: "1974", link: "https://drive.google.com/file/d/1VLFRxHYIp3cirVu7wu1x2AoI2RgArg3V/view" },
  { numero: "N.157", anio: "1974", link: "https://drive.google.com/file/d/1e94JaE5NJNJ5D-vfBplJLbavc0WSHjCT/view" },
  { numero: "N.158", anio: "1975", link: "https://drive.google.com/file/d/1nAjVoNz_PnaUiNeb6z6dExutxjcC0IeY/view" }, // ⚠️ verificar link
  { numero: "N.159", anio: "1975", link: "https://drive.google.com/file/d/1nAjVoNz_PnaUiNeb6z6dExutxjcC0IeY/view" },
  { numero: "N.160", anio: "1976", link: "https://drive.google.com/file/d/1mF_EpONERkleSOGTAhfaS9zX_HC0iGIa/view" },
  { numero: "N.161", anio: "1976", link: "https://drive.google.com/file/d/11TKUIxsRIV9rudc8qqmj9QfA51nWBTnI/view" },
  { numero: "N.162", anio: "1977", link: "https://drive.google.com/file/d/1CkBLvCpIHr1rD2I33-4rDp-QT-kNjkr7/view" },
  { numero: "N.163", anio: "1977", link: "https://drive.google.com/file/d/1b6DuXdRatYVL_GP8JQfWwu-t44VJjYFi/view" },
  { numero: "N.164", anio: "1978", link: "https://drive.google.com/file/d/1x4cDBuTZFgzV7ezuYupGIalxSkysrcP0/view" },
  { numero: "N.165", anio: "1978", link: "https://drive.google.com/file/d/1UZaPG3LKNCOm-WaHbfTyaUmAJI8hPpn/view" },
  { numero: "N.167", anio: "1979", link: "https://drive.google.com/file/d/1kDgI9ZtFRX4aZ80uI49veAA3VPsTp2na/view" },
  { numero: "N.168", anio: "1980", link: "https://drive.google.com/file/d/17yl_lzWn5fFG47ILwNnd1YGGQOqix3gA/view" },
  { numero: "N.169", anio: "1980", link: "https://drive.google.com/file/d/1hgEmX1mPjFRmaAy87_8EY8NQR3nIn0sQ/view" }, // ⚠️ verificar link
  { numero: "N.170", anio: "1981", link: "https://drive.google.com/file/d/1hgEmX1mPjFRmaAy87_8EY8NQR3nIn0sQ/view" },
  { numero: "N.172", anio: "1982", link: "https://drive.google.com/file/d/1-zAziwWiwbf5LMnddMIsdnVqNERoLkdv/view" },
  { numero: "N.173", anio: "1982", link: "https://drive.google.com/file/d/1KRgE9GLBCewQdQC-SXdoDxRKroFUBQAm/view" },
  { numero: "N.174", anio: "1983", link: "https://drive.google.com/file/d/1unahI1a2EHcI8hkJLzk-U5ajALrWdV7g/view" },
  { numero: "N.175", anio: "1983", link: "https://drive.google.com/file/d/1fJmiHxtIg3ML5SuV9lBHOvWXelCJr04j/view" },
  { numero: "N.176", anio: "1984", link: "https://drive.google.com/file/d/1wtaVQlqoRfexOoycRWKB2KAyXKc-36Mp/view" },
  { numero: "N.177", anio: "1984", link: "https://drive.google.com/file/d/11mGPUr_R7YVGq3gDwM6EynEgpG57Wlra/view" },
  { numero: "N.178", anio: "1985", link: "https://drive.google.com/file/d/1tMobDu3bTNKMNabei1D_CMXbTrWuYqzR/view" },
  { numero: "N.179", anio: "1985", link: "https://drive.google.com/file/d/1eYXeQj3ogIKpXfErHGH14nTv3zTEcqF9/view" },
  { numero: "N.180", anio: "1986", link: "https://drive.google.com/file/d/1MWET0hbj2oWQrxMumPlTs-szckD6y8-m/view" },
  { numero: "N.181", anio: "1986", link: "https://drive.google.com/file/d/1rYLaFVonPIzZiphp7HsVqVrMzfuQoCeb/view" },
  { numero: "N.182", anio: "1987", link: "https://drive.google.com/file/d/1lODVzRNc6i253JyqXQSYU3pJVQNbaRD2/view" },
  { numero: "N.183", anio: "1987", link: "https://drive.google.com/file/d/1A0gICbEBBT8EDChebS_VfiVptUKovRuB/view" },
  { numero: "N.184", anio: "1988", link: "https://drive.google.com/file/d/14weJbLACejpW_vvvvvbWUZz0BM2AZfhd/view" },
  { numero: "N.185", anio: "1988", link: "https://drive.google.com/file/d/1T6lQeElh3uGJtzMTqrVhaA-E_qjaVSo1/view" },
  { numero: "N.186", anio: "1989", link: "https://drive.google.com/file/d/1WigDz4Ig9mwU3Fr1i0xnRFEM-O--ev7s/view" },
  { numero: "N.187", anio: "1989", link: "https://drive.google.com/file/d/1fhRKCCT7kx0Da0YLzDmbNukvCEi-TqFS/view" },
  { numero: "N.188", anio: "1990", link: "https://drive.google.com/file/d/1DcMiKW3xgirWNPppw-G1as6jz6zSLi3e/view" },
  { numero: "N.190", anio: "1991", link: "https://drive.google.com/file/d/1yrVu9iAZ190ilSUcCdumpS-FA-2yXjWE/view" },
  { numero: "N.191", anio: "1991", link: "https://drive.google.com/file/d/1sNlCyHe8H0ee7GOTQtl9yVKmgq3JEuAC/view" },
  { numero: "N.192", anio: "1992", link: "https://drive.google.com/file/d/1HGvlKT4yIEfRKar0l3DOHxm-B6asLx6V/view" },
  { numero: "N.194", anio: "1993", link: "https://drive.google.com/file/d/148ZAumpnaLFBFVvBzYlQ5L4dyME9wZI9/view" },
  { numero: "N.195", anio: "1993", link: "https://drive.google.com/file/d/1XaQgqwlRvCrGRQYTASjG1sNxaoVMv392/view" },
  { numero: "N.196", anio: "1994", link: "https://drive.google.com/file/d/19iurA6elbuPbZh54nC3vPxBcxZpepZfU/view" },
  { numero: "N.197", anio: "1994", link: "https://drive.google.com/file/d/1qsbK6kSp4XxwSnMaMBb3Ns82gnw3jIua/view" },
  { numero: "N.198", anio: "1995", link: "https://drive.google.com/file/d/1NjUxvxFlze5ZYdsp7OHaX1mRR5X-jFfk/view" },
  { numero: "N.199", anio: "1995", link: "https://drive.google.com/file/d/1gX4XYg7FhP0nEKsgiktd61WjZq3BWZaN/view" },
  { numero: "N.200", anio: "1996", link: "https://drive.google.com/file/d/12AgU8YZUWJDWuev6Cwo_ElXW9iJp6_9g/view" },
  { numero: "N.201", anio: "1996", link: "https://drive.google.com/file/d/1wTu30XddWEZeUtzvZGCrvBthIywI4Ub6/view" },
  { numero: "N.202", anio: "1997", link: "https://drive.google.com/file/d/1Miwm0AwXT0EIfz8KTT-IQqMK0xaQlTLI/view" },
  { numero: "N.203", anio: "1997", link: "https://drive.google.com/file/d/1On4g1-Rt3QnDq_WxqfTEigzQKGsX2U20/view" },
  { numero: "N.204", anio: "1998", link: "https://drive.google.com/file/d/1Z0yuJoubjJh61tnOu1ylfS7TuQzqrY_e/view" },
  { numero: "N.205", anio: "1998", link: "https://drive.google.com/file/d/1FXsrGQe4lfBXgvYCsOiMTJnci2d3mP2s/view" },
  { numero: "N.206", anio: "1999", link: "https://drive.google.com/file/d/1u0Mapal_T86AL6kXAqAb5xytWUX_a0_7/view" },
  { numero: "N.207", anio: "1999", link: "https://drive.google.com/file/d/1gceZSuAzwhEAptc-HcXUgsIYnUyeeOmu/view" },
  { numero: "N.208", anio: "2000", link: "https://drive.google.com/file/d/1mzWiLCYBSCTg1I5KgJl7Hmeu3-ENKs9P/view" },
  { numero: "N.209", anio: "2000", link: "https://drive.google.com/file/d/14h550L0MF1b1l_-3hYLe0JtqSDUIYZBd/view" },
  { numero: "N.210", anio: "2001", link: "https://drive.google.com/file/d/1br9UlJJSTnO3xmmXQhXpR4puygLxbjon/view" },
  { numero: "N.211", anio: "2002", link: "https://drive.google.com/file/d/1wneFoqa6_zmXPtzkF9zKlSVcX5gKGhiq/view" },
  { numero: "N.212", anio: "2002", link: "https://drive.google.com/file/d/1iKknYkwTlpO6wgAqOTVlBW9KyO-cxn_p/view" },
  { numero: "N.213", anio: "2003", link: "https://drive.google.com/file/d/1aLufZjtXiTcFj49JmjIlhqQv5njvhFUc/view" },
  { numero: "N.214", anio: "2003", link: "https://drive.google.com/file/d/15RjBjVUhBmSGdM8X4sPdIntD95u8Ps2O/view" },
  { numero: "N.215", anio: "2004", link: "https://drive.google.com/file/d/1as6_EfyY30Mjsvb6DSp7dZyrnKsv8w8X/view" },
  { numero: "N.216", anio: "2004", link: "https://drive.google.com/file/d/16j7R1gJDR7IGkVEEljIyfNUnrVprylVd/view" },
  { numero: "N.217", anio: "2005", link: "https://drive.google.com/file/d/1rOwdF-R1gg-EwMbmvn22KngZj59Zd4LP/view" },
  { numero: "N.218", anio: "2005", link: "https://drive.google.com/file/d/1SH7514PXwqkkdoP2QpJxLB-pqqQG-TKX/view" },
  { numero: "N.219", anio: "2006", link: "https://drive.google.com/file/d/1JutuK0OMG2fNKuvLAAxl9M5q3CThbZgF/view" },
  { numero: "N.220", anio: "2006", link: "https://drive.google.com/file/d/1gIni21hagkA7XQi-gK12HhRSMdNpnWXX/view" },
  { numero: "N.221", anio: "2007", link: "https://drive.google.com/file/d/1D6mBurdnYKqqBCUG9eAkQGTZQUI6mWFs/view" },
  { numero: "N.222", anio: "2007", link: "https://drive.google.com/file/d/1pwwKqB1WYLJLFk6EofzkVsZ6HCvtlInk/view" },
  { numero: "N.223", anio: "2008", link: "https://drive.google.com/file/d/1DYM17f9kfwjJ7wGKeoD4oQMwOfWX8tWt/view" },
  { numero: "N.224", anio: "2008", link: "https://drive.google.com/file/d/1dnjfV0iXVmRlVNtjCbENUchnOhRt280x/view" },
  { numero: "N.225", anio: "2009", link: "https://drive.google.com/file/d/1wxA1tfFlmuzgapRCA4OpZJP4fOHrS3rh/view" },
  { numero: "N.226", anio: "2009", link: "https://drive.google.com/file/d/1COTS4G7PtXVyneqwif8wtvDjcxfVRXvb/view" },
  { numero: "N.227", anio: "2010", link: "https://drive.google.com/file/d/1OJlf5JQqfoOhzcOkRzEMipA5Jv6jKc8L/view" },
  { numero: "N.228", anio: "2010", link: "https://drive.google.com/file/d/1r3lBkTpm7sRcneSBMebbeXdfBynR-eie/view" },
  { numero: "N.229", anio: "2011", link: "https://drive.google.com/file/d/1m65IFhZZ8Wu6U0r4NJldTe8RJA8RjiQm/view" },
  { numero: "N.230", anio: "2011", link: "https://drive.google.com/file/d/15eLJeBUhtC12n6K6ea_-Ak1FqH9zaEqB/view" },
  { numero: "N.231", anio: "2012", link: "https://drive.google.com/file/d/12-arGhbBHmvXeA_-L8FKe-4KVh1eztmK/view" },
  { numero: "N.232", anio: "2012", link: "https://drive.google.com/file/d/1SqIjRHIK4SmsIPh9xir9v7q7ht0okBjI/view" },
  { numero: "N.233", anio: "2013", link: "https://drive.google.com/file/d/1Qjeb0Yty7ZZd3G60d9TImp88Uv1HODVa/view" },
  { numero: "N.234", anio: "2013", link: "https://drive.google.com/file/d/1VgI62N_LxU22tgJ_X79wjHJBIs6zNMLY/view" },
  { numero: "N.235", anio: "2014", link: "https://drive.google.com/file/d/1W4kEWgVBJYDqsv_HHz3gmtBJaylW1kY6/view" },
  { numero: "N.236", anio: "2014", link: "https://drive.google.com/file/d/1oankvgXpiYYHn8TlWulIeYVmFDsb0ddT/view" },
  { numero: "N.237", anio: "2015", link: "https://drive.google.com/file/d/1e3eF8GX-JbKdORwGgxWALB-x29rWg7c7/view" },
  { numero: "N.238", anio: "2015", link: "https://drive.google.com/file/d/1djEnUWtLixhRPo7an2HUsnrfJ6VByidE/view" },
  { numero: "N.239", anio: "2016", link: "https://drive.google.com/file/d/1rUYw6zUcDe0BMc6cqX99zJY3uWO9K6Rr/view" },
  { numero: "N.240", anio: "2016", link: "https://drive.google.com/file/d/1e2aKJu-jcjuUcC9ahC0LvUsH0oNfRB4a/view" },
  { numero: "N.241", anio: "2017", link: "https://drive.google.com/file/d/1wkb09GW8qywRX5jlYroggEyMDXuvNlmy/view" },
  { numero: "N.242", anio: "2017", link: "https://drive.google.com/file/d/1ELJcXE7cdgpFUrSuMZmBrHcx2p1l8d8s/view" },
  { numero: "N.244", anio: "2018", link: "https://drive.google.com/file/d/1fbknwQ-YSKNOkVqKL0le4Aj4G5Bb4RFJ/view" },
  { numero: "N.245", anio: "2018", link: "https://drive.google.com/file/d/1lx4en-hfnE61uS_YRwdJllcT-3jtV1I_/view" },
  { numero: "N.246", anio: "2019", link: "https://drive.google.com/file/d/1m4IQlyigWIXa5lUHY2y5S4hQf2z_W_p4/view" },
  { numero: "N.247", anio: "2019", link: "https://drive.google.com/file/d/1T8w7vW2HOIv_pUMf6uejUJnQ2UoJ-5sP/view" },
  { numero: "N.248", anio: "2020", link: "https://drive.google.com/file/d/1Fi68_4Y3MjwSy8308LdlPXBbfy4-xenE/view" },
  { numero: "N.249", anio: "2021", link: "https://drive.google.com/file/d/1GJFNhzLgxIbtu4TA69dHEHXXGAiFqu_I/view" },
  { numero: "N.250", anio: "2022", link: "https://drive.google.com/file/d/1btto3Tes8zvqRiHhAsPWbR7KPtOdnbB2/view" },
  { numero: "N.251", anio: "2022", link: "https://drive.google.com/file/d/1uYg7UrO2rOwRgmEDErlc-5R4tGBg8XRG/view" },
];
