---
id: detalle-existencias
title: Detalle de Existencias — Relevado/Egresado
sidebar_label: Detalle de Existencias
sidebar_position: 4
---

# Cómo consultar los productos registrados

Esta pantalla sirve para **ver qué productos están registrados en una oficina o en una fuente de abastecimiento**.

Podés consultar **cuántos hay** y, si lo necesitás, ver información de cada elemento: sus características, estado y otros datos.

Aquí vamos a usar la opción **Relevado/Egresado**.

![Pantalla inicial de Detalle de Existencias](/img/detalle-existencias/detalle-existencias-inicio.png)

## 1. Abrir la consulta

1. Entrá a **Inicio de Existencias**.
2. En **Detalle de las Existencias**, presioná **VER DETALLE**.
3. Elegí la pestaña **Relevado/Egresado**.

Vas a encontrar estas partes:

| Lo que dice la pantalla | Para qué sirve |
| --- | --- |
| **Ubicación del producto** | Elegir **dónde** querés consultar: una oficina o una fuente. |
| **Búsqueda directa** | Buscar un producto por su código, si ya lo conocés. |
| **Selección desde el catálogo** | Encontrar el producto en una lista si no sabés su código. |
| **Origen** | Elegir si querés consultar todos los orígenes o uno en particular. |
| **Tabla de resultados** | Ver los productos que el sistema encuentra en ese lugar. |

**Lo más sencillo:** primero elegí una oficina o fuente. **No necesitás escribir un código para ver todos los productos** registrados en ese lugar.

## 2. Consultar los productos de una oficina

### Paso 2.1. Elegir Oficina

1. En **Ubicación del producto**, buscá **Tipo de ubicación**.
2. Seleccioná **Oficina**.
3. Presioná **SELECCIONAR OFICINA**.

Se abre una ventana con dos partes:

- **1. Elegí un sector** (a la izquierda): muestra las áreas de la empresa ordenadas en un árbol llamado *organigrama*.
- **2. Elegí una oficina** (a la derecha): muestra las oficinas que corresponden al sector elegido.

### Paso 2.2. Elegir el sector y la oficina

1. A la izquierda, abrí las ramas del organigrama y elegí el sector que buscás.
2. A la derecha, buscá la oficina asociada a ese sector.
3. Presioná **SELECCIONAR** en la oficina correcta.
4. Revisá **Selección actual** para comprobar que aparezcan la oficina y el sector esperados.
5. Presioná **CONFIRMAR**.

![Ventana para elegir el sector y la oficina](/img/detalle-existencias/detalle-selector-oficina.png)

**Ejemplo:** elegís el sector **Desarrollo.** y después la oficina **Desarrollo 1**. La selección muestra **Desarrollo 1 / Desarrollo.**.

:::note Si no encontrás la oficina
Solo aparecen las oficinas registradas en el sector que elegiste y a las que podés acceder. Si no aparece, revisá el sector o consultá con la persona encargada. En [Oficinas](./importar-oficinas.md) se explica cómo se incorporan las oficinas desde la aplicación de Relevamiento.
:::

### Paso 2.3. Mirar los resultados

Al volver a la pantalla, aparecerá el nombre de la oficina elegida y **una tabla con sus productos registrados**.

![Ejemplo de productos registrados en una oficina](/img/detalle-existencias/detalle-resultado-oficina.png)

| Columna | Qué significa |
| --- | --- |
| **Producto** | Código con el que se identifica ese tipo de producto. |
| **Descripción** | Nombre del producto, como **MESA** o **SILLA**. |
| **Cantidad** | Cuántas unidades de ese producto están registradas en esa oficina. |
| **Acciones** | Botón **VER DETALLE** para ver las unidades una por una. |

En la imagen, la oficina **Desarrollo 1** tiene una **MESA** registrada con cantidad **1,00**. Eso significa **una unidad**.

## 3. Consultar los productos de una fuente de abastecimiento

Si el elemento está registrado en una fuente, el procedimiento es parecido.

1. En **Ubicación del producto**, cambiá **Tipo de ubicación** a **Fuente**.
2. Presioná **SELECCIONAR FUENTE**.
3. Se abre una ventana para buscar fuentes de abastecimiento.
4. Buscá la fuente por su **nombre**. Si hace falta, usá las opciones **Localidad**, **Tipo de Fuente** y **Fuente** para reducir la lista.
5. Seleccioná la fuente correcta en el listado.
6. Presioná **GUARDAR**.

![Ventana de fuentes con mapa y opciones de búsqueda](/img/detalle-existencias/detalle-selector-fuente-mapa.png)

![Listado donde se selecciona una fuente y se presiona GUARDAR](/img/detalle-existencias/detalle-selector-fuente-listado.png)

**Consejo:** comprobá el **nombre de la fuente** antes de guardar. El mapa puede servirte de ayuda, pero algunas fuentes pueden aparecer sin coordenadas de ubicación correctas.

Al regresar a **Detalle de Existencias**, se muestra la tabla con los productos registrados en esa fuente. Las columnas son las mismas que para una oficina.

![Ejemplo de productos registrados en una fuente](/img/detalle-existencias/detalle-resultado-fuente.png)

En la captura, la fuente **REBOMBEO CISTERNA EL HUAICO-LAMADRID** muestra **una SILLA** registrada.

## 4. Buscar un producto determinado (opcional)

Cuando hay muchos productos registrados en un lugar, podés buscar solamente uno. **Primero tenés que haber elegido la oficina o la fuente.**

### Opción A. Si sabés el código: Búsqueda directa

1. En **Búsqueda directa**, buscá **Código de producto**.
2. Escribí o pegá el código del producto que necesitás.
3. Presioná **BUSCAR**.
4. Mirá la tabla inferior. Si ese producto está registrado en el lugar elegido, aparecerá en los resultados.

![Ejemplo de búsqueda por código de producto](/img/detalle-existencias/detalle-busqueda-codigo.png)

**Ejemplo:** si hay 20 productos en una oficina y buscás la mesa con código `MYA-MSA-MESA00000001`, escribí ese código y presioná **BUSCAR**.

Para volver a ver los demás productos, presioná **LIMPIAR** y quitá la búsqueda por código.

### Opción B. Si no sabés el código: Selección desde el catálogo

El **catálogo** es una lista de los productos que el sistema conoce. Sirve para encontrar el producto sin tener que recordar su código.

1. En **Selección desde el catálogo**, presioná **ABRIR SELECTOR DE PRODUCTO**.
2. En la ventana que se abre, comprobá el grupo **MYA - MOBILIARIO Y ACCESORIOS DE OFICINA**.
3. En **Subgrupo**, elegí el tipo de producto; por ejemplo, **SLL - SILLAS**.
4. En **Productos encontrados**, elegí el producto que te interesa. Si la lista es larga, usá el campo **Producto** y el botón **BUSCAR** para encontrarlo.
5. Al volver, el código del producto elegido se completa automáticamente en **Búsqueda directa**.
6. Presioná **BUSCAR**, si la consulta todavía no se actualizó.

![Ventana donde se busca un producto desde el catálogo](/img/detalle-existencias/detalle-selector-producto.png)

**Recordá:** esta opción **no agrega productos**. Solo ayuda a buscar algo que ya está registrado en la oficina o fuente elegida.

## 5. Ver los datos de cada unidad

En los resultados podés ver la cantidad total de un producto. Para saber **cómo es cada unidad**, hacé lo siguiente:

1. Buscá el producto en la tabla.
2. En su fila, presioná **VER DETALLE**.
3. Se abre una ventana con la información de las unidades registradas.

| Dato que aparece | Qué significa |
| --- | --- |
| **Código** | Número o código **único de esa unidad física**. |
| **Características** | Cómo es ese elemento: por ejemplo, color, material o tipo. |
| **Estado** | En qué estado fue registrado, por ejemplo **Bueno**. |
| **Origen** | Cómo fue adquirido o incorporado a la empresa. |
| **Usuario de Alta** | Persona usuaria que hizo el registro en el sistema. |
| **Fecha de Alta** | Cuándo se registró. |

**Ejemplo:** si aparecen **3 monitores**, la cantidad de la tabla será **3**, pero en **VER DETALLE** podrás ver **cada monitor por separado**. Dos pueden tener las mismas características y el tercero otras distintas.

:::important Dos códigos diferentes
El **código de producto** identifica el tipo de artículo, como «MESA». Es el que se usa en **Búsqueda directa**. El **código de unidad**, que aparece en **VER DETALLE**, identifica **cada mesa o elemento individual**. Por eso no son el mismo código.
:::

## 6. ¿Qué significa Origen?

En la pantalla también aparece **Origen**. Se utiliza para limitar la consulta según la procedencia de los productos.

Si querés ver todo lo registrado en el lugar elegido, dejá **Origen: Todos**. Solo cambiá esa opción si necesitás consultar un origen específico.

## Ejemplos para practicar

### Quiero saber qué mesas hay en una oficina

1. Entrá a **Detalle de las Existencias → Relevado/Egresado**.
2. Elegí **Oficina** y seleccioná el sector **Desarrollo.** y la oficina **Desarrollo 1**.
3. Presioná **CONFIRMAR**.
4. Buscá **MESA** en la tabla. Si hay muchos productos, usá **Búsqueda directa** o **Selección desde el catálogo**.
5. Si necesitás más información, presioná **VER DETALLE**.

### Quiero saber qué sillas hay en una fuente

1. Elegí **Fuente** en **Ubicación del producto**.
2. Seleccioná **REBOMBEO CISTERNA EL HUAICO-LAMADRID**.
3. Presioná **GUARDAR**.
4. Buscá **SILLA** en la tabla y presioná **VER DETALLE** si querés ver sus datos.

## Preguntas frecuentes

**¿Tengo que conocer el código para consultar una oficina?**  
No. Al elegir la oficina, se muestran los productos registrados en ella. El código solo sirve para buscar uno en particular.

**¿Qué hago si no sé el código?**  
Usá **Selección desde el catálogo** para encontrar el producto por su tipo y nombre.

**¿La cantidad indica cuántos productos distintos hay?**  
No. Indica **cuántas unidades de ese mismo producto** están registradas en ese lugar.

**¿Puedo registrar un producto nuevo desde esta pantalla?**  
No. Esta pantalla sirve para **consultar**. Para registrar elementos, usá [Relevar productos](./relevar-productos.md).

---

**Volver a:** [Inicio de Existencias](./inicio-existencias.md) · **Continuar con:** [Reportes](./reportes-productos-organigrama.md).
