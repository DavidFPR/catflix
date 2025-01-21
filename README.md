# Catflix

Catflix es una aplicación web para ver y gestionar videos de gatos. La aplicación permite a los usuarios navegar por diferentes categorías de videos, agregar videos a favoritos y añadir nuevos videos.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Biblioteca para manejar el enrutamiento en la aplicación.
- **Styled Components**: Biblioteca para escribir estilos CSS en JavaScript.
- **Material UI**: Biblioteca de componentes de interfaz de usuario para React.
- **json-server**: Herramienta para crear una API REST falsa rápidamente.
- **Vite**: Herramienta de construcción rápida para proyectos web modernos.
- **ESLint**: Herramienta de análisis estático para encontrar y arreglar problemas en el código JavaScript.

## Estructura del Proyecto

- `src/`: Contiene todo el código fuente de la aplicación.
  - `components/`: Contiene los componentes reutilizables de la aplicación.
    - `AddVideoModal/`: Componente para añadir nuevos videos.
    - `ChipContainer/`: Componente para mostrar las categorías de videos.
    - `FooterNav/`: Componente para la navegación en el pie de página.
    - `NavBar/`: Componente para la barra de navegación.
    - `VideoCategories/`: Componente para mostrar las categorías de videos.
    - `VideoCategory/`: Componente para mostrar una categoría específica de videos.
      - `VideoCard/`: Componente para mostrar un video individual.
    - `VideoPlayer/`: Componente para reproducir videos.
  - `pages/`: Contiene las páginas principales de la aplicación.
    - `Favoritos/`: Página para mostrar los videos favoritos.
    - `Inicio/`: Página principal de la aplicación.
    - `NotFound/`: Página para manejar rutas no encontradas.
  - `FavoritesContext.jsx/`: Contexto para manejar los videos favoritos.
  - `App.jsx`: Componente principal de la aplicación.
  - `main.jsx`: Punto de entrada de la aplicación.
  - `index.css`: Estilos globales de la aplicación.
- `public/`: Contiene los activos públicos de la aplicación.
- `db.json`: Base de datos falsa utilizada por json-server.

## Cómo Ejecutar el Proyecto

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor json-server con `npx json-server --watch db.json`.
4. Inicia la aplicación en modo de desarrollo con `npm run dev`.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios a tu repositorio (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.
