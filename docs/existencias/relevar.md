---
sidebar_position: 3
title: Relevar
---

# Relevar productos

La funcionalidad **Relevar productos** permite registrar unidades de productos que existen físicamente en una ubicación, como ser en una **oficina** o en una **fuente de abastecimiento**, pero que aún no cuentan con un registro de ubicación dentro del sistema.

El objetivo principal del relevamiento es completar la trazabilidad del inventario, registrando la ubicación actual de aquellos productos que fueron identificados físicamente durante una revisión.

## Acceso a la pantalla

Para ingresar a esta funcionalidad, el usuario debe acceder a la sección **Existencias** y seleccionar el botón **Relevar**, ubicado en la parte superior derecha de la pantalla.

![Acceso a pantalla de relevamiento](/img/relevar/1.png)

Una vez seleccionada la opción, el sistema muestra la pantalla **Relevar Productos**, desde la cual se inicia el proceso de búsqueda, carga y asignación de productos.


## Selección del producto

El primer paso consiste en seleccionar el producto que se desea relevar. Para ello, el usuario debe presionar el ícono de búsqueda ubicado junto al campo **Producto**.

![Pantalla Relevar Productos](/img/relevar/2.gif)

Al hacerlo, se abrirá una ventana emergente que permite buscar y seleccionar el producto correspondiente.

![Ventana Seleccionar Producto](/img/relevar/3.png)

Dentro de esta ventana, el usuario puede utilizar distintos criterios de búsqueda:

| Filtro   | Descripción                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Grupo    | Permite filtrar productos según el grupo al que pertenecen.                                                                  |
| Subgrupo | Permite filtrar productos según el subgrupo correspondiente. Para utilizar este filtro, primero debe seleccionarse un grupo. |
| Producto | Permite buscar por código o descripción del producto.                                                                        |

Una vez ingresados los criterios de búsqueda, el usuario debe presionar el botón **Buscar** para actualizar los resultados.

El sistema mostrará una grilla con los productos que coincidan con los filtros aplicados. Para seleccionar un producto, el usuario debe marcar la casilla ubicada a la derecha de la fila correspondiente.

![Fila Seleccionar Producto](/img/relevar/4.gif)

Luego de seleccionar el producto, el sistema retorna a la pantalla principal de **Relevar Productos**, mostrando el producto elegido en el campo correspondiente.

## Ingreso de cantidad

Con el producto ya seleccionado, el usuario debe ingresar la cantidad de unidades que fueron identificadas físicamente en la ubicación relevada.

Esta cantidad representa el número de unidades que se incorporarán al sistema mediante el relevamiento.

![Campo Cantidad Producto](/img/relevar/5.png)

## Selección de la ubicación

Luego de seleccionar el producto e ingresar la cantidad correspondiente, el usuario debe indicar la ubicación actual en la que se encuentran las unidades relevadas.

El sistema permite elegir entre dos tipos de ubicación:

* **Oficina**
* **Fuente**

![Selección de la ubicación](/img/relevar/6.png)

## Asignación a una oficina

Si el usuario selecciona la opción **Oficina**, el sistema muestra el organigrama institucional.

Desde allí, el usuario debe desplegar las áreas correspondientes y seleccionar la oficina donde se encuentran físicamente las unidades del producto.

La oficina seleccionada será utilizada como ubicación actual del relevamiento.

![Selección de oficina en organigrama](/img/relevar/7.png)

## Asignación a una fuente de abastecimiento

Si el usuario selecciona la opción **Fuente**, el sistema abre la ventana emergente **Seleccionar Fuente**.

![Ventana Seleccionar Fuente](/img/relevar/8.png)

En esta ventana, el usuario puede buscar la fuente de abastecimiento utilizando los siguientes filtros:

| Filtro         | Descripción                                                             |
| -------------- | ----------------------------------------------------------------------- |
| Localidad      | Permite filtrar las fuentes según la localidad en la que se encuentran. |
| Tipo de Fuente | Permite filtrar las fuentes según su tipo o clasificación.              |
| Fuente         | Permite buscar una fuente por su denominación.                          |

Una vez aplicados los filtros, el sistema muestra las fuentes disponibles en una grilla ubicada en la parte inferior de la ventana.

Para seleccionar una fuente, el usuario debe hacer clic sobre la fila correspondiente. Luego, debe presionar el botón **Guardar** para confirmar la selección.

![Fuentes filtradas](/img/relevar/9.png)

Al guardar la fuente seleccionada, el sistema retorna a la pantalla principal de **Relevar Productos**, manteniendo cargada la ubicación elegida.

## Cargar productos relevados

Luego de seleccionar el producto, ingresar la cantidad y definir la ubicación correspondiente, el usuario debe presionar el botón **Agregar**.

Esta acción incorpora la información cargada a la grilla **Productos a Relevar**.

![Productos a relevar cargados](/img/relevar/10.png)

En esta grilla se muestran los productos que serán incluidos en el relevamiento, junto con la cantidad indicada y la ubicación asignada.

Desde esta sección, el usuario puede revisar la información antes de confirmar la operación. En caso de haber cargado un producto por error, puede quitarlo utilizando la opción disponible en la columna correspondiente.

## Confirmar relevamiento

Una vez verificada la información cargada, el usuario debe presionar el botón **Confirmar**.

Al confirmar, el sistema registra el relevamiento y actualiza la trazabilidad de las unidades ingresadas, asociándolas a la oficina o fuente de abastecimiento indicada.

![Confirmar egreso](/img/relevar/11.png)

## Consideraciones

Antes de confirmar el relevamiento, se recomienda verificar que:

* El producto seleccionado sea el correcto.
* La cantidad ingresada coincida con las unidades identificadas físicamente.
* La ubicación seleccionada sea la adecuada.
* La información cargada en la grilla **Productos a Relevar** sea correcta.

Una vez confirmado el relevamiento, las unidades quedarán registradas en el sistema y asociadas a la ubicación indicada.
