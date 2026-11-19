# Manual de Inventario · Aguas del Norte

Este proyecto es el **Manual de Usuario del Sistema de Inventario** en Docusaurus.

## Edición con lenguaje claro

Se mantiene el contenido y la estructura del proyecto anterior y se reescriben las cinco páginas de procedimientos para que sean más fáciles de seguir por personas con poca experiencia usando computadoras.

- Se conserva **sin cambios** la introducción sencilla aprobada.
- Se explican las tareas con instrucciones breves, paso a paso, ejemplos cotidianos y una sección para resolver problemas habituales.
- Se mantienen los nombres de los botones tal como aparecen en el sistema.
- Se conservan las **34 capturas originales** (14 de relevamiento, 8 de consulta, 6 de reportes y 6 de oficinas) y su ubicación dentro de cada procedimiento.
- Se preservan el menú, la configuración Docusaurus, el archivo de ejemplo y las dependencias del proyecto anterior.

## Páginas

1. [Introducción](docs/introduccion.md): para qué sirve el sistema.
2. [Inicio de Existencias](docs/inicio-existencias.md): qué muestra la pantalla y por dónde empezar.
3. [Relevar productos](docs/relevar-productos.md): registrar productos, cantidades, características y ubicación.
4. [Detalle de Existencias](docs/detalle-existencias.md): consultar productos registrados en oficinas y fuentes.
5. [Reportes](docs/reportes-productos-organigrama.md): obtener listados generales o de un producto y oficina específicos.
6. [Oficinas](docs/importar-oficinas.md): incorporar datos de oficinas enviados desde la aplicación de Relevamiento.

## Cómo abrir el manual en una computadora

Necesitás **Node.js 20 o posterior** y **npm**.

Desde una terminal en esta carpeta:

```bash
npm install
npm start
```

Abrí en el navegador la dirección que indique Docusaurus, normalmente `http://localhost:3000`.

## Compilar para publicar

```bash
npm run build
npm run serve
```

La carpeta `build/` contiene el sitio estático generado. Antes de publicarlo en un servidor, revisá `url` y `baseUrl` en `docusaurus.config.js`.

## Sobre los archivos incluidos

- Las capturas se encuentran en `static/img/` y están vinculadas desde las páginas.
- El archivo `ejemplos/relevamiento_oficinas_ejemplo_original.csv` sirve **solo como referencia técnica**. No es necesario para leer el manual y no debe importarse en producción como prueba.
- No se incluyen `node_modules`, `build` ni `.docusaurus` en el ZIP porque se generan localmente.

## Precisiones importantes

En el capítulo **Oficinas**, los resultados de revisión y las acciones están documentados según el código proporcionado: las oficinas pueden mostrarse como **Crear oficina**, **Modificar oficina**, **Oficina existente** o **Posible duplicado**. Los sectores pueden mostrarse como **Agregar sector**, **Sector ya asociado** o **Quitar sector**. La acción **Quitar sector** permanece bloqueada en la versión documentada; no se afirma que el archivo por sí solo permita eliminar asociaciones existentes.
