// Importa React para poder usar la sintaxis JSX en este componente
import React from 'react';
// Importa el archivo CSS de Bootstrap para utilizar sus estilos predefinidos
import 'bootstrap/dist/css/bootstrap.min.css';
 
// Define el componente funcional llamado ResponsiveBootstrapLayout
const ResponsiveBootstrapLayout = () => {
  return (
    // Un contenedor principal de Bootstrap que centra y ajusta el contenido automáticamente
<div className="container">
      {/* Sección de encabezado con fondo azul y texto blanco centrado */}
<header className="bg-primary text-white text-center py-3">
<h1>Encabezado</h1> {/* Título principal del encabezado */}
</header>
 
      {/* Fila que contiene las tres columnas, con un margen vertical */}
<div className="row my-4">
        {/* Primera columna, que ocupa 4 columnas en pantallas medianas y todo el ancho en pantallas pequeñas */}
<div className="col-md-4 col-sm-12 mb-3">
<div className="p-3 bg-light">Columna 1</div> {/* Contenido de la primera columna con padding y fondo claro */}
</div>
        {/* Segunda columna, con el mismo comportamiento que la primera */}
<div className="col-md-4 col-sm-12 mb-3">
<div className="p-3 bg-light">Columna 2</div> {/* Contenido de la segunda columna con padding y fondo claro */}
</div>
        {/* Tercera columna, también con el mismo comportamiento */}
<div className="col-md-4 col-sm-12 mb-3">
<div className="p-3 bg-light">Columna 3</div> {/* Contenido de la tercera columna con padding y fondo claro */}
</div>
</div>
 
      {/* Sección de pie de página con fondo oscuro y texto blanco centrado */}
<footer className="bg-dark text-white text-center py-2">
<p>Pie de Página</p> {/* Texto del pie de página */}
</footer>
</div>
  );
};
 
// Exporta el componente ResponsiveBootstrapLayout para que pueda ser utilizado en otras partes de la aplicación
export default ResponsiveBootstrapLayout;