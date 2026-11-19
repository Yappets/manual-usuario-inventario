---
id: reportes-productos-organigrama
title: Reportes — Productos por Organigrama
sidebar_label: Reportes
sidebar_position: 5
---

# Cómo obtener un listado de productos

La opción **Reportes** sirve para **ver en un listado los productos registrados en la empresa**.

Por ejemplo, podés pedir un listado de **todas las oficinas de Salta**, solamente de **una oficina**, o de **un producto específico**, como las sillas.

Vamos a usar el reporte **Productos por Organigrama**. En este caso, *organigrama* se refiere a los **sectores y áreas de la empresa**.

## 1. Elegir el tipo de reporte

1. Entrá a la opción **Reportes** del menú.
2. Buscá **REPORTE SOLICITADO**.
3. Seleccioná **Productos por Organigrama**.

![Pantalla para elegir Productos por Organigrama](/img/reportes/reportes-inicio.png)

A continuación, el sistema te pedirá elegir una **Unidad Operativa**. Los otros datos son opcionales.

## 2. Elegir una Unidad Operativa (obligatorio)

Una **Unidad Operativa** es el ámbito de la empresa sobre el que querés consultar los productos. Por ejemplo, **SALTA**.

1. Buscá **UNIDAD OPERATIVA**.
2. Abrí la lista de opciones.
3. Elegí la unidad que corresponde; por ejemplo, **SALTA**.
4. Comprobá que el nombre haya quedado seleccionado.

![Elección de una unidad operativa en Reportes](/img/reportes/reportes-filtros-organigrama.png)

**Este paso es obligatorio.** Sin una Unidad Operativa seleccionada no podés generar este reporte.

:::tip Si necesitás un listado general
Después de elegir **SALTA**, podés ir directamente al botón **GENERAR REPORTE**. Si **Oficina** y **Producto** dicen **Todos**, el informe incluirá los productos registrados en las oficinas correspondientes a esa unidad operativa.
:::

## 3. Elegir qué oficinas querés consultar (opcional)

En **OFICINA** podés dejar **Todos** o elegir una oficina en particular.

### Si querés ver todas las oficinas

**No hace falta seleccionar ninguna.** Dejá **OFICINA: Todos**.

### Si querés ver solamente una oficina

1. Presioná **SELECCIONAR OFICINA**.
2. En la ventana que se abre, buscá el sector en **1. Elegí un sector**.
3. En **2. Elegí una oficina**, seleccioná la oficina que necesitás.
4. Revisá el nombre de la oficina y el sector en **Selección actual**.
5. Presioná **CONFIRMAR**.

![Ventana para elegir el sector y la oficina del reporte](/img/reportes/reportes-seleccionar-oficina.png)

**Ejemplo:** si seleccionás **Desarrollo 1**, el listado mostrará los productos que correspondan a esa oficina dentro de la unidad elegida.

Si después querés volver a consultar **todas** las oficinas, presioná **LIMPIAR** en **OFICINA**.

:::note Si una oficina no aparece
Primero asegurate de haber elegido el **sector correcto**. Solo se muestran las oficinas asociadas a ese sector que estén disponibles para tu usuario.
:::

## 4. Elegir qué producto querés consultar (opcional)

En **PRODUCTO** también podés dejar **Todos** o elegir uno en particular.

### Si querés ver todos los productos

Dejá **PRODUCTO: Todos**. No hace falta tocar nada más.

### Si querés ver solo un producto, por ejemplo sillas

1. Presioná **SELECCIONAR PRODUCTO**.
2. En la ventana que se abre, comprobá el grupo **MYA - MOBILIARIO Y ACCESORIOS DE OFICINA**.
3. En **Subgrupo**, elegí el tipo de elemento: por ejemplo, **SLL - SILLAS**.
4. En **Productos encontrados**, elegí el producto que necesitás. Si hay muchos resultados, usá el campo **Producto** y presioná **BUSCAR**.
5. Volvé a la pantalla de Reportes con el producto seleccionado.

![Ventana para buscar un producto del catálogo](/img/reportes/reportes-seleccionar-producto.png)

**¿Qué es el catálogo?** Es la lista de productos que el sistema tiene registrados por tipo y nombre. Te ayuda a elegir una mesa, una silla o cualquier otro producto sin tener que recordar su código.

Para dejar de consultar ese producto particular, presioná **LIMPIAR** en **PRODUCTO**. Volverá a aparecer **Todos**.

## 5. Elegir qué información va a mostrar el reporte

Una vez seleccionada la **Unidad Operativa**, podés usar estas cuatro formas de consulta:

| En **Oficina** elegís… | En **Producto** elegís… | Qué vas a ver |
| --- | --- | --- |
| **Todos** | **Todos** | Todos los productos registrados en las oficinas de la unidad operativa seleccionada. |
| **Una oficina** | **Todos** | Todos los productos registrados en esa oficina. |
| **Una oficina** | **Un producto** | Solo ese producto en la oficina elegida, si está registrado allí. |
| **Todos** | **Un producto** | Ese producto en las oficinas de la unidad operativa donde esté registrado. |

**Importante:** no estás obligado a elegir una oficina ni un producto. **Lo único obligatorio es la Unidad Operativa.**

![Ejemplo de SALTA con Oficina: Todos y Producto: Todos](/img/reportes/reportes-ejemplo-filtros.png)

En esta imagen se ve un ejemplo de **SALTA** con las opciones **Todos**. Significa que se quiere obtener un listado general.

## 6. Generar el reporte

Cuando hayas elegido lo que querés consultar:

1. Comprobá que diga **Productos por Organigrama**.
2. Revisá la **Unidad Operativa** seleccionada.
3. Verificá si en **OFICINA** y **PRODUCTO** querés dejar **Todos** o seleccionar un dato particular.
4. Presioná **GENERAR REPORTE**.
5. Mirá el listado que muestra el sistema.

![Ejemplo de un reporte generado para SALTA](/img/reportes/reportes-ejemplo-generado.png)

### ¿Cómo leer el reporte?

El documento muestra qué productos se encontraron en la consulta y otros datos útiles.

| Columna del reporte | Qué significa |
| --- | --- |
| **Código** | Código que identifica el tipo de producto. |
| **Nombre - Características** | Nombre del producto y cómo es: por ejemplo, material, forma o medidas. |
| **Cantidad** | Cuántas unidades se incluyen en ese registro. |
| **Organigrama** | Sector o área de la empresa. |
| **Oficina** | Lugar donde está registrado el producto. |
| **Usuario** | Persona usuaria relacionada con el registro. |
| **Fecha de Alta** | Fecha en que se registró en el sistema. |

El encabezado también muestra datos como la **fecha del reporte**, la **Unidad Operativa** y las páginas del informe.

Al final podés encontrar la **Cantidad Total**. En la imagen de ejemplo hay **dos registros de MESA**, con **una unidad cada uno**: el total es **2,00**.

:::info ¿Por qué el mismo producto puede aparecer varias veces?
Dos mesas pueden tener **el mismo código de producto**, pero distintas características o datos de registro. Por eso pueden verse en filas separadas. Para identificar cada unidad física con su código único, consultá [Detalle de Existencias](./detalle-existencias.md).
:::

## Ejemplos sencillos

**Quiero ver todo lo registrado en Salta.**  
Seleccioná **SALTA** en **Unidad Operativa**, dejá **Oficina: Todos** y **Producto: Todos**, y presioná **GENERAR REPORTE**.

**Quiero ver los productos de Desarrollo 1.**  
Elegí la unidad operativa correspondiente, seleccioná **Desarrollo 1** en **Oficina** y dejá **Producto: Todos**.

**Quiero ver solamente las mesas de Desarrollo 1.**  
Elegí la unidad, seleccioná la oficina **Desarrollo 1**, después elegí **MESA** en **Producto** y generá el reporte.

**Quiero ver dónde hay sillas dentro de Salta.**  
Elegí **SALTA**, dejá **Oficina: Todos**, seleccioná **SILLA** en **Producto** y generá el reporte.

## Preguntas frecuentes

**¿Tengo que elegir una oficina?**  
No. Si dejás **Todos**, se consideran las oficinas de la unidad operativa elegida.

**¿Tengo que elegir un producto?**  
No. Si dejás **Todos**, el listado incluye los distintos productos de la consulta.

**¿Cómo vuelvo a consultar todas las oficinas o productos?**  
Presioná **LIMPIAR** en el apartado **OFICINA** o **PRODUCTO** que quieras restablecer.

**¿Dónde veo los datos de un elemento en particular?**  
En [Detalle de Existencias](./detalle-existencias.md) podés abrir **VER DETALLE** para consultar la información de cada unidad.

---

**También podés consultar:** [Relevar productos](./relevar-productos.md) · [Detalle de Existencias](./detalle-existencias.md).
