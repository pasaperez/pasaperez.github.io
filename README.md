# pasaperez.github.io

Portfolio personal y CV interactivo de Angel Santiago Perez, desplegado en GitHub Pages.

## 📋 Descripción

Este proyecto es un sitio web portfolio moderno y responsivo construido con Angular 22, que presenta mi experiencia profesional, habilidades técnicas, formación académica y proyectos. El sitio está diseñado para proporcionar una experiencia visual atractiva y accesible para reclutadores, compañeros profesionales y cualquier persona interesada en conocer mi trayectoria como desarrollador Full-Stack.

## ✨ Características Principales

- **Diseño Moderno y Responsivo**: Interfaz adaptativa que funciona perfectamente en dispositivos móviles, tablets y escritorio
- **Multiidioma**: Sistema de traducción integrado para soportar múltiples idiomas
- **Secciones**, una o dos pantallas cada una:
  - Hero con el nombre, la especialidad, la descarga del CV, la foto y el deploy de Visto Bueno animado
  - Proyectos (Visto Bueno, Wepa, DevFlow y QAFlow) con diagramas, una checklist y una terminal animados
  - Especialidad en letras que se arman al hacer scroll, con tres cifras, y experiencia con los años en insignias
  - Tecnologías por grupo (las cuatro más usadas con su logo y el resto nombradas), sobre mí con el retrato, formación con las barras de nivel de cada idioma
  - Cierre con la descarga del CV junto a su primera página (`public/cv-es.jpg` y `public/cv-en.jpg`, sin la línea de contacto) y pie con emails y perfiles
- **Sistema de diseño de taste-skill**: tokens, grilla, botones, movimiento y momentos copiados en `public/assets` (no se editan a mano, salvo `moments/iris-opens/moment.js`, que suma las opciones `start`, `end` y `ease`; si se vuelve a copiar el kit, hay que reaplicarlas)
- **Optimizado para GitHub Pages**: Configuración lista para despliegue automático
- **CV Descargable**: Opción de descarga del CV en formato PDF

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 22.2**: Framework principal (zoneless), pre-renderizado en el build con `@angular/ssr`
- **TypeScript 6.0**: Lenguaje de programación
- **RxJS 7.8.0**: Programación reactiva

### Estilos
- **Kit de taste-skill** (`public/assets`): `system.css`, `layout.css`, `motion.css`, `icon.css` y sus scripts, que cargan desde `src/main.ts` cuando Angular terminó de renderizar
- **CSS propio**: `src/styles.css`, solo lo que el kit no trae
- **Google Fonts**: Host Grotesk y JetBrains Mono
- **Íconos**: logos reales de cada herramienta en `public/assets/icons` (marcas de sus dueños)

### Herramientas de Desarrollo
- **Angular CLI 22.2**: Herramienta de línea de comandos
- **Jasmine 6.2**: Framework de testing
- **Karma 6.4.0**: Test runner
- **angular-cli-ghpages 3.0**: Utilidad de despliegue

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: 22.22+ o 24.15+ (lo exige Angular 22)
- **npm**: versión 9.x o superior (incluido con Node.js)
- **Git**: para clonar el repositorio

Opcionalmente:
- **Bun**: Gestor de paquetes alternativo (no se versiona ningún lockfile)

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/pasaperez/pasaperez.github.io.git
cd pasaperez.github.io
```

### 2. Instalar Dependencias

Con npm:
```bash
npm install
```

Con bun:
```bash
bun install
```

### 3. Configuración del Proyecto

El proyecto viene preconfigurado, pero puedes personalizar:

- **Contenido**: Edita los archivos en `src/app/core/services/language.service.ts` para actualizar traducciones
- **Estilos**: Modifica `src/styles.css` para cambios globales
- **Colores y tipografía**: el bloque `:root` de `src/index.html` (fondo blanco, texto azul marino, acento azul y una banda celeste en Tecnologías y Sobre mí)

## 💻 Comandos de Desarrollo

### Servidor de Desarrollo

Inicia el servidor de desarrollo y abre automáticamente el navegador:

```bash
npm run start
```

O simplemente:
```bash
ng serve -o
```

El sitio estará disponible en `http://localhost:4200/`. La aplicación se recargará automáticamente cuando realices cambios en los archivos fuente.

### Build de Producción

Compila el proyecto para producción:

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`.

### Build en Modo Desarrollo con Watch

Para desarrollo continuo con recompilación automática:

```bash
npm run watch
```

### Ejecutar Tests

Ejecuta las pruebas unitarias con Karma:

```bash
npm run test
```

## 📁 Estructura del Proyecto

```
pasaperez.github.io/
├── src/
│   ├── app/
│   │   ├── core/              # Servicios core (ej: language.service)
│   │   ├── pages/
│   │   │   └── home/          # Componente página principal
│   │   ├── shared/            # Módulo compartido (header, footer)
│   │   ├── app-pasaperez.component.ts  # Componente raíz
│   │   └── app.config.ts      # Configuración de la aplicación
│   ├── index.html             # HTML principal
│   ├── main.ts                # Punto de entrada
│   └── styles.css             # Estilos globales
├── public/
│   ├── perfil.jpg             # Imagen de perfil
│   ├── Angel_Perez_CV_2026.pdf     # CV en inglés (compilado desde main.tex)
│   ├── Angel_Perez_CV_2026_ES.pdf  # CV en español (compilado desde main.es.tex)
│   ├── assets/                # Kit de taste-skill e íconos
│   ├── share.jpg              # Imagen para compartir (og:image)
│   ├── favicon.svg            # Icono del sitio
│   └── favicon.ico            # Icono alternativo
├── angular.json               # Configuración de Angular
├── package.json               # Dependencias del proyecto
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Este archivo
```

## 🚀 Despliegue a GitHub Pages

GitHub Pages sirve la rama `gh-pages`, no `main`: un push a `main` por sí solo no publica nada.
Hay dos formas de publicar y las dos escriben esa rama con `angular-cli-ghpages`, así que dan
el mismo resultado y se pueden alternar.

### Despliegue Automático (GitHub Actions)

`.github/workflows/deploy-gh-pages.yml` compila y publica en cada push a `main`, salvo cuando
solo cambian archivos que no llegan al sitio (`*.md`, `LICENSE`, la configuración de Qodana o
de Dependabot). También se puede lanzar a mano desde la pestaña **Actions** → **Deploy GitHub
Pages** → **Run workflow**. Instala con Bun, compila con Node 24 y publica con el
`GITHUB_TOKEN` del workflow; el commit en `gh-pages` dice `Deploy <sha>`.

### Despliegue Manual

Si GitHub Actions no está disponible (por ejemplo, sin minutos), se publica desde la máquina
local:

```bash
npm run deploy
```

Este comando:
1. Compila el proyecto en modo producción
2. Reemplaza el contenido de la rama `gh-pages` con un commit automático, usando el usuario de git local
3. El sitio estará disponible en: `https://pasaperez.github.io`

`npm run deploy -- --dry-run` compila y muestra qué publicaría, sin pushear.

### Configuración de GitHub Pages

1. Ve a la configuración del repositorio en GitHub
2. Navega a "Pages" en el menú lateral
3. Asegúrate de que la fuente esté configurada en la rama `gh-pages`
4. El sitio se actualizará automáticamente con cada despliegue

Para usar un dominio propio, agregá `public/CNAME` con el dominio: cada despliegue reemplaza
toda la rama y, sin ese archivo, el dominio se pierde.

## 🎨 Personalización

### Cambiar Colores y Tipografía

Los colores y las fuentes son las variables `--p-*` y `--font-*` del bloque `:root` en `src/index.html`.
El resto del sistema (espaciado, grilla, botones) sale de `public/assets/system.css`.

### Cambiar el Contenido

Todo el texto, en español e inglés, está en `src/app/core/services/language.service.ts`; las herramientas
y sus íconos, en `src/app/pages/home/tools.ts`.

## 🌐 Multiidioma

La página está en español en `/` y en inglés en `/en/`; el idioma sale de la ruta. El enlace **English / Español**
de la barra lleva de una a otra, y los enlaces viejos con `?lang=en` o `?lang=es` redirigen a la página de su idioma
(`src/main.ts`). Los textos de los dos idiomas están en `src/app/core/services/language.service.ts`.

## 🔎 SEO

- **Pre-render**: el build (`outputMode: "static"` con `@angular/ssr`) genera `dist/browser/index.html` y
  `dist/browser/en/index.html` con todo el contenido ya escrito, así buscadores y vistas previas de enlaces lo leen sin
  ejecutar JavaScript. Las rutas están en `src/app/app.routes.ts` y `src/app/app.routes.server.ts`; GitHub Pages sigue
  sirviendo archivos estáticos.
- **Cabecera por idioma**: `src/app/core/services/page-head.service.ts` arma título, descripción, canonical, el par
  `hreflang` (`es`, `en` y `x-default`), Open Graph, Twitter y el JSON-LD (`ProfilePage` con la `Person`), todo a partir
  del contenido de cada idioma.
- **Rastreo**: `public/robots.txt` y `public/sitemap.xml` (con los dos idiomas enlazados). Hay que actualizar `lastmod`
  del sitemap cuando cambia el contenido.

## 📊 Optimización y Performance

El proyecto incluye configuraciones de optimización:

- **Bundle Budgets**: Límites de tamaño configurados en `angular.json`
  - Initial bundle: aviso desde 600kB, máximo 1MB
  - Component styles: máximo 20kB
- **Output Hashing**: Habilitado en producción para cache busting
- **Lazy Loading**: Preparado para módulos con carga diferida
- **Tree Shaking**: Eliminación automática de código no utilizado

## 🐛 Solución de Problemas

### El servidor no inicia

```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Errores de compilación

```bash
# Limpia la caché de Angular
ng cache clean
# O limpia el directorio de build
rm -rf dist/
```

### Problemas con el despliegue

```bash
# Verifica la configuración de git
git config user.name
git config user.email

# Asegúrate de tener permisos en el repositorio
```

## 📞 Contacto

**Angel Santiago Perez**

- 📧 Email: [pasaperez@yahoo.com.ar](mailto:pasaperez@yahoo.com.ar)
- 📧 Email alternativo: [angel.pasaperez@gmail.com](mailto:angel.pasaperez@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/pasaperez](https://www.linkedin.com/in/pasaperez/)
- 🐙 GitHub: [github.com/pasaperez](https://github.com/pasaperez)
- 💻 Work GitHub: [github.com/pasaperez-work](https://github.com/pasaperez-work)

## 📄 Licencia

Este proyecto es personal y está destinado a fines de portfolio. © 2025 Angel Santiago Perez

## 🙏 Agradecimientos

- Angular Team por el excelente framework
- GitHub Pages por el hosting gratuito
- La comunidad de desarrollo por las herramientas y recursos

---

⭐ Si te gusta este proyecto o te resulta útil, ¡considera darle una estrella!

**Última actualización**: Noviembre 2026
