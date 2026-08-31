# Guía de actualización — El Aguilucho

## Lo único que necesitas saber

**Toca únicamente el archivo `datos.js`.**
`index.html` es la plantilla. Nunca la edites.

---

## Cómo usar esta guía con una IA (Claude, ChatGPT, etc.)

1. Abre `datos.js` y copia **todo** el contenido.
2. Dile a la IA: *"Actualiza este archivo de configuración con los siguientes cambios: [describe los cambios]"*
3. Reemplaza `datos.js` con la versión que te dé la IA.
4. Abre `index.html` en el navegador para verificar que todo se ve bien.

---

## Cómo está organizada la página

Siete secciones, numeradas como en una revista impresa:

| | Sección | Qué hay |
| --- | --- | --- |
| — | **Portada** | El cartel de la revista sobre la foto del colegio |
| — | **Sumario** | Índice con enlaces a todo lo demás |
| I | **Edición actual** | Portada, texto y botón de compra |
| II | **El Aguilucho** | La historia y la cita |
| III | **Un siglo en papel** | **El archivo completo**, año por año |
| IV | **La Pluma** | El semanario |
| V | **Mancheta** | Presidentes y equipo |
| VI | **Contacto** | Redes, dirección y correo |

### El archivo (sección III)

Es el corazón del sitio. El gráfico dibuja **una barra por año** y su altura son
las ediciones publicadas ese año — se lee de un vistazo que entre 1927 y 1936 la
revista salía casi cada mes y que después encontró un ritmo de dos al año.

Todo eso **se calcula solo desde el array `ARCHIVO`**. Cuando agregues una edición,
la barra de ese año crece, el contador sube y la edición aparece en el buscador.
No hay nada más que tocar.

Cada año tiene su propio enlace para compartir: `…/index.html#a1974` abre la
página directamente en 1974.

Junto al año seleccionado aparece la **portada de esa década**, en `images/decadas/`
(ver más abajo). Cambia solo al cruzar de década, no en cada año, con una
transición suave — y ya están las once puestas.

### El buscador

Se abre con el botón **Buscar**, con `⌘K` (`Ctrl K` en Windows) o con la tecla `/`.
Encuentra números de edición (`N.100` o solo `100`), años, secciones y **nombres
de las personas de la mancheta**. Se navega con las flechas y se abre con Enter.

---

## Tareas comunes

### Nueva edición de El Aguilucho
En `datos.js`, busca `EDICION_ACTUAL` y cambia:
- `numero` → nuevo número de edición
- `anioEscolar` → nuevo año escolar
- `intro` → texto editorial de la nueva edición
- `subtexto` → descripción breve (ej: "Segunda edición del año escolar 2026-2027")
- `portada` → reemplaza el archivo `images/portada.jpg` con la nueva portada

### Nueva edición de La Pluma
En `datos.js`, busca `LA_PLUMA` y agrega al **inicio** de la lista:
```js
{ numero: 14, mes: "Junio 2026", link: "https://drive.google.com/file/d/TU_ID/view" },
```
Sube el PDF a Google Drive, obtén el link para compartir y pégalo en `link`.
La web muestra la edición destacada + 2 ediciones, y el resto aparece al pulsar "Ver todas".

**Textos de La Pluma:** justo arriba del array `LA_PLUMA` está `PLUMA_INFO` con dos textos editables:
- `subtitulo` — el texto descriptivo bajo el título "La Pluma".
- `destacadoEdicion` — el titular o tema principal de la edición más reciente. Cámbialo cada vez que salga una nueva edición.

### Nuevo presidente o cambio de equipo
Busca `PRESIDENTES` o `EQUIPO` en `datos.js` y edita los datos directamente.

**Fotos de presidentes:** reemplaza `images/presidente-1.jpg` (o el número correspondiente).
Los retratos se muestran en formato **vertical 4:5**, así que usa fotos verticales;
la web las recorta y las pasa a blanco y negro sola (recuperan el color al pasar el cursor).
Si una foto falta, el marco queda vacío con una línea — no se rompe nada.
Si el `nombre` dice "PENDIENTE", la web escribe *"Por designar"* en cursiva.

**Equipo:** los nombres se agrupan solos por `cargo`, en columnas tipo mancheta de revista.
No repitas el comité en cada línea: basta con que el `cargo` esté bien escrito e igual
en todos los miembros del mismo comité. El orden de las columnas es el orden en que
aparece cada comité por primera vez en el array.

### Nuevo anuncio
Busca `ANUNCIOS` en `datos.js`. Pon las imágenes en la carpeta `announcements/`
y actualiza las rutas. Si el anuncio lleva a una URL, agrégala en `link:`.
**Si no hay imágenes, la sección desaparece sola** — no queda un hueco en la página.

### Añadir edición al archivo histórico
Al final del array `ARCHIVO` en `datos.js`, agrega:
```js
{ numero: "N.257", anio: "2026", link: "https://drive.google.com/file/d/TU_ID/view" },
```

---

## Estructura de archivos

```
aguilucho/
├── datos.js              ← El único archivo que editas
├── index.html            ← Plantilla (no editar)
├── GUIA.md               ← Esta guía
├── respaldo/             ← Versiones anteriores del sitio (puedes borrarla)
│   ├── index-original.html
│   └── index-pulido.html
├── announcements/
│   ├── anuncio-1.jpg
│   └── anuncio-2.jpg
├── images/
│   ├── hero.jpg
│   ├── portada.jpg
│   ├── aguilucho.jpg
│   ├── logo.png          ← Águila original (fuente de los favicons, no se usa en la página)
│   ├── presidente-1.jpg … presidente-5.jpg
│   ├── originales/       ← Copias sin comprimir de hero/portada/aguilucho
│   ├── decadas/          ← Portadas históricas, una por década (ver abajo)
│   │   ├── 1920.jpg … 2020.jpg
│   │   └── originales/   ← Copias sin comprimir de las once
│   └── favicon/          ← Ícono de la pestaña del navegador (ver abajo)
│       ├── icon-16.png, icon-32.png, icon-192.png
│       └── apple-touch-icon.png
└── (Los PDFs de El Aguilucho y La Pluma viven en Google Drive)
```

### Sobre las imágenes
Las fotos grandes (`hero`, `portada`, `aguilucho`) están comprimidas para que la
página cargue rápido: pesaban 10 MB entre las tres y ahora pesan 1,6 MB. Los archivos
sin comprimir quedaron guardados en `images/originales/` por si alguna vez los necesitas.

Si reemplazas alguna, **no subas la foto directa de la cámara**: exporta a un ancho
máximo de ~2000 px y calidad 70–80 %. Una imagen de 5 MB hace que la página tarde
segundos en aparecer.

### Portadas por década (`images/decadas/`)

Ya están las once puestas, una por cada década que cubre el archivo:

```
images/decadas/1920.jpg   1930.jpg   1940.jpg   1950.jpg   1960.jpg
               1970.jpg   1980.jpg   1990.jpg   2000.jpg   2010.jpg   2020.jpg
```

**El nombre es siempre el inicio de la década** (`1920`, no `1927`; `1990`, no `1993`),
sin importar de qué año exacto sea el escaneo — así calza con lo que calcula la página
sola (`año → década = año − año%10`). Si reemplazas una, mantenle el mismo nombre.

Los originales sin comprimir quedaron en `images/decadas/originales/` por si algún día
quieres usarlos a mayor resolución.

### El ícono de la pestaña (favicon)

Es el águila de `images/logo.png`, en blanco sobre un cuadrado negro sólido —
a propósito, no transparente. Un ícono recortado y transparente hace que Safari
le agregue su propio fondo detrás en la pestaña y se vea enmarcado en vez de nítido;
uno cuadrado y sólido se ve limpio en cualquier navegador, tema claro u oscuro.

Si algún día cambias el logo, regenera los cuatro tamaños en `images/favicon/`
a partir del nuevo `images/logo.png` (pídele a una IA que lo haga con Pillow/Python:
águila en blanco, centrada, sobre fondo `#111111`, exportada a 16, 32, 192 y 180 px).

### Retratos reales de la mancheta

Sigue pendiente para cuando el comité los tenga:
1. **Retratos verticales de los presidentes**, en vez de las fotos de relleno de hoy.
2. **La foto del quinto presidente** (`images/presidente-5.jpg`) y su nombre en `datos.js`.

---

## Pendientes antes de publicar

- [ ] Completar el nombre del quinto presidente (Director General)
- [ ] Verificar el link de N.158 en el archivo histórico
- [ ] Verificar el link de N.169 en el archivo histórico
- [ ] Añadir ediciones N.252–N.255 al archivo cuando estén disponibles en Drive

---

## Hosting (GitHub Pages)

El sitio está diseñado para publicarse gratis con GitHub Pages.
Si necesitas ayuda para configurarlo, pídele a una IA:
*"Explícame paso a paso cómo publicar una carpeta de archivos HTML en GitHub Pages"*
