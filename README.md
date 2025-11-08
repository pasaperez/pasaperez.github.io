# pasaperez.github.io

Portfolio personal y CV interactivo de Angel Santiago Perez, desplegado en GitHub Pages.

## 📋 Descripción

Este proyecto es un sitio web portfolio moderno y responsivo construido con Angular 20, que presenta mi experiencia profesional, habilidades técnicas, formación académica y proyectos. El sitio está diseñado para proporcionar una experiencia visual atractiva y accesible para reclutadores, compañeros profesionales y cualquier persona interesada en conocer mi trayectoria como desarrollador Full-Stack.

## ✨ Características Principales

- **Diseño Moderno y Responsivo**: Interfaz adaptativa que funciona perfectamente en dispositivos móviles, tablets y escritorio
- **Multiidioma**: Sistema de traducción integrado para soportar múltiples idiomas
- **Secciones Interactivas**:
  - Hero section con información de perfil y estadísticas destacadas
  - Timeline de experiencia profesional
  - Skills organizadas por categorías con niveles de expertise
  - Formación académica y certificaciones
  - Información de contacto y enlaces a redes profesionales
- **Material Design**: Utiliza Angular Material para componentes UI consistentes y modernos
- **Optimizado para GitHub Pages**: Configuración lista para despliegue automático
- **CV Descargable**: Opción de descarga del CV en formato PDF

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 20.1.0**: Framework principal
- **TypeScript 5.8.2**: Lenguaje de programación
- **Angular Material 20.1.0**: Biblioteca de componentes UI
- **Angular CDK 20.1.0**: Component Dev Kit
- **RxJS 7.8.0**: Programación reactiva

### Estilos
- **CSS3**: Estilos personalizados
- **Material Design**: Sistema de diseño
- **Bootstrap 5.3.7**: Framework CSS para componentes adicionales
- **Google Fonts**: Tipografía Roboto

### Herramientas de Desarrollo
- **Angular CLI 20.1.0**: Herramienta de línea de comandos
- **Jasmine 5.8.0**: Framework de testing
- **Karma 6.4.0**: Test runner
- **angular-cli-ghpages 2.0.3**: Utilidad de despliegue

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: versión 18.x o superior
- **npm**: versión 9.x o superior (incluido con Node.js)
- **Git**: para clonar el repositorio

Opcionalmente:
- **Bun**: Gestor de paquetes alternativo (el proyecto incluye `bun.lock`)

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
- **Tema de Material**: Configurado en `angular.json` (actualmente usa `magenta-violet.css`)

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
│   │   ├── app-routing.module.ts       # Configuración de rutas
│   │   └── app.config.ts      # Configuración de la aplicación
│   ├── index.html             # HTML principal
│   ├── main.ts                # Punto de entrada
│   └── styles.css             # Estilos globales
├── public/
│   ├── perfil.jpg             # Imagen de perfil
│   ├── Angel_Perez_CV_2025.pdf  # CV descargable
│   └── favicon.ico            # Icono del sitio
├── angular.json               # Configuración de Angular
├── package.json               # Dependencias del proyecto
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Este archivo
```

## 🚀 Despliegue a GitHub Pages

### Despliegue Automático

El proyecto está configurado con `angular-cli-ghpages` para facilitar el despliegue:

```bash
npm run deploy
```

Este comando:
1. Compila el proyecto en modo producción
2. Optimiza los archivos
3. Despliega automáticamente a la rama `gh-pages`
4. El sitio estará disponible en: `https://pasaperez.github.io`

### Configuración de GitHub Pages

1. Ve a la configuración del repositorio en GitHub
2. Navega a "Pages" en el menú lateral
3. Asegúrate de que la fuente esté configurada en la rama `gh-pages`
4. El sitio se actualizará automáticamente con cada despliegue

## 🎨 Personalización

### Cambiar Colores y Tema

Los colores principales se definen mediante gradientes CSS en los componentes. Para cambiar el tema:

1. **Tema de Material Design**: Edita `angular.json` línea 50:
   ```json
   "@angular/material/prebuilt-themes/magenta-violet.css"
   ```
   Opciones disponibles: `indigo-pink.css`, `deeppurple-amber.css`, `pink-bluegrey.css`, `purple-green.css`

2. **Gradientes Personalizados**: En `home.component.ts`, busca y modifica:
   ```css
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   ```

### Agregar Nuevas Secciones

1. Crea un nuevo componente:
   ```bash
   ng generate component pages/nueva-seccion
   ```

2. Añade la ruta en `app-routing.module.ts`

3. Actualiza el menú en el componente header

## 🌐 Multiidioma

El proyecto incluye un servicio de idiomas (`LanguageService`) que permite agregar soporte para múltiples idiomas:

1. Edita `src/app/core/services/language.service.ts`
2. Agrega nuevos idiomas al objeto de traducciones
3. Implementa un selector de idioma en el header

## 📊 Optimización y Performance

El proyecto incluye configuraciones de optimización:

- **Bundle Budgets**: Límites de tamaño configurados en `angular.json`
  - Initial bundle: máximo 1MB
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
- Material Design por los componentes UI
- GitHub Pages por el hosting gratuito
- La comunidad de desarrollo por las herramientas y recursos

---

⭐ Si te gusta este proyecto o te resulta útil, ¡considera darle una estrella!

**Última actualización**: Enero 2025
