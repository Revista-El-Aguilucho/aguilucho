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
Para las fotos de presidentes: reemplaza `images/presidente-1.jpg` (o el número correspondiente) con la nueva foto.

### Nuevo anuncio
Busca `ANUNCIOS` en `datos.js`. Reemplaza la imagen en la carpeta `announcements/` y actualiza la ruta. Si el anuncio lleva a una URL, agrégala en `link:`.

### Añadir edición al archivo histórico
Al final del array `ARCHIVO` en `datos.js`, agrega:
```js
{ numero: "N.257", anio: "2026", link: "https://drive.google.com/file/d/TU_ID/view" },
```

---

## Estructura de archivos

```
aguilucho/
├── datos.js            ← El único archivo que editas
├── index.html          ← Plantilla (no editar)
├── GUIA.md             ← Esta guía
├── announcements/
│   ├── anuncio-1.jpg
│   └── anuncio-2.jpg
├── images/
│   ├── hero.jpg
│   ├── portada.jpg
│   ├── aguilucho.jpg
│   ├── logo.png
│   ├── presidente-1.jpg
│   ├── presidente-2.jpg
│   ├── presidente-3.jpg
│   ├── presidente-4.jpg
│   └── presidente-5.jpg
└── (Los PDFs de El Aguilucho y La Pluma viven en Google Drive)
```

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
