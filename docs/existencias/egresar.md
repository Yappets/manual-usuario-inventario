---
sidebar_position: 3
title: Egresar
---

# Egresar productos

La funcionalidad **Egresar productos** permite asignar una o varias unidades de un producto a una ubicación específica, ya sea una **oficina** del organigrama institucional o una **fuente de abastecimiento**.

Esta operación se utiliza para registrar el destino de productos que salen de un depósito y que se encuentran pendientes de egreso dentro del sistema.

El objetivo principal del egreso es permitir la trazabilidad de cada unidad, indicando con precisión dónde se encuentra luego de salir del depósito.

## Acceso a la pantalla

Para ingresar a esta funcionalidad, el usuario debe acceder a la sección **Existencias** y seleccionar el botón **Egresar**, ubicado en la parte superior derecha de la pantalla.

![Acceso a pantalla de egreso](/img/egresar/acceso-pantalla-egreso.png)

Una vez seleccionada la opción, el sistema muestra la pantalla **Egresar Productos**, desde la cual se inicia el proceso de búsqueda, selección y asignación de productos.

![Pantalla Egresar Productos](/img/egresar/pantalla-egresar-productos.png)

## Filtros disponibles

En la parte superior de la pantalla se encuentran los filtros que permiten acotar la búsqueda de productos.

| Filtro | Descripción |
| ------ | ----------- |
| **Localidad** | Permite seleccionar una localidad determinada para limitar la búsqueda de depósitos asociados a esa ubicación.<br /><br />Este filtro es opcional. Si no se selecciona una localidad, el sistema permite continuar con la búsqueda sin aplicar esta restricción. |
| **Depósito** | Permite indicar el depósito desde el cual se desea egresar el producto.<br /><br />Por defecto, el sistema muestra la opción **Todos**, lo que permite buscar productos disponibles para egreso en cualquiera de los depósitos registrados.<br /><br />Este filtro también es opcional. |
| **Producto** | Permite seleccionar el producto que se desea egresar.<br /><br />A diferencia de los filtros anteriores, este dato es necesario para continuar con el proceso, ya que el sistema debe identificar qué producto será consultado y posteriormente asignado. |

## Selección del producto

El primer paso consiste en seleccionar el producto que se desea egresar. Para ello, el usuario debe presionar el ícono de búsqueda ubicado junto al campo **Producto**.

![Pantalla Egresar Productos](/img/egresar/egresar-productos.gif)

Al hacerlo, se abrirá una ventana emergente que permite buscar y seleccionar el producto correspondiente.

![Ventana Seleccionar Producto](/img/egresar/seleccionar-producto.png)

Dentro de esta ventana, el usuario puede utilizar distintos criterios de búsqueda:

| Filtro   | Descripción                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Grupo    | Permite filtrar productos según el grupo al que pertenecen.                                                                  |
| Subgrupo | Permite filtrar productos según el subgrupo correspondiente. Para utilizar este filtro, primero debe seleccionarse un grupo. |
| Producto | Permite buscar por código o descripción del producto.                                                                        |

Una vez ingresados los criterios de búsqueda, el usuario debe presionar el botón **Buscar** para actualizar los resultados.

El sistema mostrará una grilla con los productos que coincidan con los filtros aplicados. Para seleccionar un producto, el usuario debe marcar la casilla ubicada a la derecha de la fila correspondiente.

![Fila Seleccionar Producto](/img/egresar/fila-seleccionar-producto.gif)

Luego de seleccionar el producto, el sistema retorna a la pantalla principal de **Egresar Productos**, mostrando el producto elegido en el campo correspondiente.

## Búsqueda de unidades pendientes de egreso

Una vez seleccionado el producto, el usuario debe presionar el botón **Buscar Producto**.

El sistema mostrará una grilla con las unidades del producto seleccionado que se encuentran disponibles para ser egresadas.

![Unidades pendientes de egreso](/img/egresar/seleccionar-pendientes-egreso.gif)

En esta grilla, el usuario debe seleccionar una o varias unidades del producto, según corresponda.

Cada fila representa una unidad o registro disponible para egreso. Para incluir una unidad en la operación, se debe marcar la casilla ubicada en la fila correspondiente.

## Selección de la ubicación de destino

Luego de seleccionar las unidades a egresar, el usuario debe indicar la ubicación a la cual serán asignadas.

El sistema permite elegir entre dos tipos de destino:

* **Oficina**
* **Fuente**

## Asignación a una oficina

Si el usuario selecciona la opción **Oficina**, el sistema muestra el organigrama institucional.

Desde allí, el usuario debe desplegar las áreas correspondientes y seleccionar la oficina a la cual se asignarán las unidades del producto.

La oficina seleccionada será utilizada como destino del egreso.

![Selección de oficina en organigrama](/img/egresar/seleccionar-oficina.png)

## Asignación a una fuente de abastecimiento

Si el usuario selecciona la opción **Fuente**, el sistema abre la ventana emergente **Seleccionar Fuente**.

![Ventana Seleccionar Fuente](/img/egresar/seleccionar-fuente.png)

En esta ventana, el usuario puede buscar la fuente de abastecimiento utilizando los siguientes filtros:

| Filtro         | Descripción                                                             |
| -------------- | ----------------------------------------------------------------------- |
| Localidad      | Permite filtrar las fuentes según la localidad en la que se encuentran. |
| Tipo de Fuente | Permite filtrar las fuentes según su tipo o clasificación.              |
| Fuente         | Permite buscar una fuente por su denominación.                          |

Una vez aplicados los filtros, el sistema muestra las fuentes disponibles en una grilla ubicada en la parte inferior de la ventana.

Para seleccionar una fuente, el usuario debe hacer clic sobre la fila correspondiente. Luego, debe presionar el botón **Guardar** para confirmar la selección.

![Fuentes filtradas](/img/egresar/fuentes-filtradas.png)

Al guardar la fuente seleccionada, el sistema retorna a la pantalla principal de **Egresar Productos**, manteniendo cargada la ubicación elegida.

## Cargar productos a egresar

Luego de seleccionar las unidades del producto y definir la ubicación de destino, el usuario debe presionar el botón **Cargar Producto**.

Esta acción incorpora la selección realizada a la grilla **Productos a Egresar**.

![Productos a egresar cargados](/img/egresar/productos-a-egresar.png)

En esta grilla se muestran los productos que serán incluidos en la operación, junto con la ubicación asignada.

Desde esta sección, el usuario puede revisar la información antes de confirmar el egreso. En caso de haber cargado un producto por error, puede quitarlo utilizando la opción disponible en la columna correspondiente.

## Confirmar egreso

Una vez verificada la información cargada, el usuario debe presionar el botón **Confirmar**.

Al confirmar, el sistema registra el egreso y actualiza la trazabilidad de las unidades seleccionadas, asociándolas a la oficina o fuente de abastecimiento indicada.

![Confirmar egreso](/img/egresar/confirmar-egreso.png)

## Consideraciones

Antes de confirmar el egreso, se recomienda verificar que:

* El producto seleccionado sea el correcto.
* Las unidades marcadas correspondan al producto que se desea egresar.
* La ubicación de destino sea la adecuada.
* La información cargada en la grilla **Productos a Egresar** sea correcta.

Una vez confirmado el egreso, las unidades seleccionadas quedarán asociadas a la ubicación indicada dentro del sistema.
