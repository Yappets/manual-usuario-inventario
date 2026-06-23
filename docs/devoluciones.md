---
sidebar_position: 4
title: Devoluciones
---

# Devoluciones

La funcionalidad **Devoluciones** permite completar el proceso de devolución de unidades de productos a un depósito.

A diferencia de un registro de devolución convencional, esta funcionalidad permite identificar de manera precisa qué unidad fue devuelta y desde qué ubicación proviene, ya sea una **oficina** o una **fuente de abastecimiento**.

El objetivo principal es mantener la trazabilidad de las existencias, registrando el recorrido completo de cada unidad desde su egreso hasta su posterior devolución a depósito.

## Acceso a la pantalla

Para acceder a esta funcionalidad, el usuario debe seleccionar la opción **Devoluciones** en el menú lateral del sistema.

Al ingresar, el sistema muestra un listado de las devoluciones registradas, indicando su estado actual.

Las devoluciones pueden encontrarse en alguno de los siguientes estados:

- **Pendiente:** requiere completar la identificación de las unidades devueltas.
- **Completada:** la devolución ya fue registrada en su totalidad y se encuentra disponible únicamente para consulta.

![Pantalla de devoluciones](/img/devoluciones/1.png)

Para continuar con una devolución pendiente, el usuario debe seleccionar el botón **Detalle** correspondiente al registro deseado.

Una vez seleccionada la opción, el sistema muestra la pantalla de detalle de devolución, desde donde se gestionan los productos y unidades involucradas.

![Pantalla de detalle de devolucion](/img/devoluciones/2.png)

## Selección del producto

En la sección **Productos Pendientes de Devolución**, se muestran los productos para los cuales aún existen unidades pendientes de identificar.

El primer paso consiste en seleccionar el producto cuya devolución se desea completar.

Al hacerlo, el sistema abre una ventana donde se visualiza información relacionada con las unidades pendientes de devolución.

En esta pantalla se muestra:

- Código del producto.
- Descripción del producto.
- Depósitos disponibles para recibir la devolución.
- Cantidad pendiente total.
- Cantidad pendiente por depósito.
- Cantidad seleccionada para cada depósito.

![Ventana de seleccion de unidades](/img/devoluciones/3.png)

Esta información permite controlar el avance del proceso y verificar cuántas unidades faltan asignar a cada depósito.

## Selección del depósito de destino

Dentro de la ventana de detalle, se presenta un listado con los depósitos que recibirán las unidades devueltas.

![Ventana de seleccion de unidades](/img/devoluciones/4.png)

Para continuar, el usuario debe seleccionar uno de los depósitos disponibles.

Al hacerlo, el sistema muestra las unidades que pueden ser asociadas a dicho depósito, asi como la cantidad de unidades pendientes de identificar.

![Ventana de seleccion de unidades](/img/devoluciones/5.png)

## Identificación de las unidades devueltas

Una vez seleccionado el depósito, el sistema presenta el listado de unidades disponibles para completar la devolución.

Cada registro indica la ubicación actual de la unidad antes de ser devuelta, permitiendo identificar exactamente cuál fue la unidad que retornó al depósito.

Por ejemplo, como se puede ver en la imagen anterior, existen dos unidades del mismo producto:

- Una ubicada en el área de **Planificación**.
- Otra ubicada en el área de **Sistemas**.

El usuario deberá indicar cuál de ellas fue efectivamente devuelta al depósito seleccionado.

Para ello, debe marcar la unidad correspondiente dentro de la lista, por ejemplo, la de Sistemas.

![Ventana de seleccion de unidades](/img/devoluciones/6.png)

## Control de cantidades por depósito

El sistema controla automáticamente la cantidad máxima de unidades que pueden asignarse a cada depósito.

Cuando se alcanza la cantidad pendiente correspondiente a un depósito, no será posible seleccionar unidades adicionales para dicho destino.

En ese caso, el usuario deberá continuar con el siguiente depósito pendiente hasta completar la asignación de todas las unidades devueltas.

A medida que se realizan las selecciones, el sistema actualiza automáticamente las cantidades pendientes y seleccionadas.

![Ventana de seleccion de unidades](/img/devoluciones/7.png)

## Cambios realizados

Las unidades seleccionadas se incorporan automáticamente a la sección **Cambios Realizados**.

En esta sección es posible visualizar:

- La ubicación previa de cada unidad.
- El depósito al que fue devuelta.
- El producto asociado.

![Ventana de seleccion de unidades](/img/devoluciones/8.png)

Esta información permite revisar el resultado de la operación antes de confirmar los cambios.

## Modificación de selecciones

Mientras la devolución no haya sido confirmada, es posible modificar las unidades seleccionadas.

Para ello, el usuario puede volver a seleccionar cualquiera de los productos ubicados en la sección **Productos Pendientes de Devolución**.

El sistema mostrará las unidades previamente marcadas, permitiendo:

- Quitar selecciones existentes.
- Seleccionar unidades diferentes.
- Reasignar unidades a los depósitos correspondientes.

## Confirmar devolución

Una vez verificadas todas las unidades devueltas, el usuario debe presionar el botón **Guardar**.

Al confirmar la operación, el sistema registra definitivamente la devolución y actualiza la ubicación de las unidades seleccionadas, asociándolas al depósito correspondiente.

## Consideraciones

Antes de confirmar la devolución, se recomienda verificar que:

- Las unidades seleccionadas correspondan efectivamente a las devueltas.
- Cada unidad haya sido asociada al depósito correcto.
- No existan cantidades pendientes sin asignar.
- La información mostrada en la sección **Cambios Realizados** sea correcta.

Una vez guardada la devolución, las unidades quedarán registradas en el depósito correspondiente y la operación pasará al estado **Completada**.