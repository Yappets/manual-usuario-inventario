---
id: importar-oficinas
title: Oficinas — Incorporar oficinas al sistema
sidebar_label: Oficinas · Incorporar oficinas
sidebar_position: 6
---

# Cómo incorporar oficinas al sistema

La opción **Oficinas** permite agregar al Sistema de Inventario **oficinas y otros espacios de trabajo que ya fueron registrados** con la aplicación de **Relevamiento de Oficinas**.

Por ejemplo, una persona puede registrar una oficina en esa aplicación. Después, desde el Sistema de Inventario, se revisan esos datos y se confirma que la oficina quede incorporada.

## Antes de empezar: ¿qué es el archivo CSV?

Cuando se termina de registrar una oficina en la aplicación de Relevamiento, esa aplicación permite **generar un archivo** con la información cargada.

Ese archivo suele tener un nombre terminado en **`.csv`**. No necesitás saber cómo está hecho ni abrirlo para leer sus datos: **el Sistema de Inventario lo lee y te muestra la información en pantalla**.

**Necesitás tener ese archivo guardado en la computadora** desde la que vas a hacer la importación.

**Importar** significa *pasar al Sistema de Inventario la información que ya fue registrada en la otra aplicación*.

:::important Primero se revisa; después se guarda
**REVISAR ARCHIVO** permite ver qué oficinas contiene el archivo y qué cambios propone el sistema. **No guarda nada todavía.** Para incorporar los cambios elegidos, hay que presionar **CONFIRMAR IMPORTACIÓN**.
:::

## 1. Buscar y seleccionar el archivo

1. En el menú del Sistema de Inventario, entrá a **Oficinas**.
2. Buscá el recuadro **1. Seleccionar archivo**.
3. Presioná **AGREGAR ARCHIVOS...**.
4. Se abrirá una ventana de tu computadora. Buscá la **carpeta donde guardaste el archivo** enviado o generado por la aplicación de Relevamiento.
5. Elegí el archivo que termina en **`.csv`** y confirmá la selección.
6. Esperá a que aparezca el archivo en la pantalla y termine de cargarse.
7. Presioná **REVISAR ARCHIVO**.

![Pantalla para seleccionar el archivo y revisar su contenido](/img/oficinas/oficinas-01-seleccionar-archivo.png)

**Consejo:** seleccioná **un solo archivo por vez**. Si el sistema te indica que el archivo no está listo, esperá a que termine de cargarse o volvé a elegirlo.

## 2. Revisar qué oficinas se encontraron

Después de presionar **REVISAR ARCHIVO**, el sistema analiza los datos y los compara con las oficinas que ya tiene registradas.

Si pudo leerlos, aparecerá el mensaje **«Revisión finalizada. Consultá los resultados.»**.

En **2. Resultados de la revisión** verás una tabla con las oficinas encontradas.

![Resultado de la revisión de una oficina nueva](/img/oficinas/oficinas-02-resultado-revision.png)

### ¿Qué significa cada columna?

| Columna | Para qué sirve |
| --- | --- |
| **Seleccionar** | Casilla para marcar una oficina que querés incorporar o actualizar. Algunas filas no permiten marcarla. |
| **Oficina** | Nombre de la oficina tal como se escribió en la aplicación de Relevamiento. |
| **Acción** | Indica qué puede hacer el sistema con esa oficina. |
| **Detalle** | Explica el resultado de la revisión. Por ejemplo, puede decir **«Oficina nueva.»** o **«No hay diferencias.»**. |
| **Sectores** | Botón **VER SECTORES** para conocer los sectores de la empresa relacionados con esa oficina. |

Abajo también aparece una frase como **«1 oficina seleccionada»**. Eso te dice cuántas oficinas están marcadas para procesar; **no indica cuántos sectores tiene cada una**.

### ¿Qué puede aparecer en Acción?

| Si dice… | Qué significa | Qué conviene hacer |
| --- | --- | --- |
| **Crear oficina** | Es una oficina que todavía no figura registrada de esa manera en el sistema. | Si corresponde, dejala seleccionada y revisá sus sectores. |
| **Modificar oficina** | El sistema encontró información nueva o cambios para una oficina ya registrada. | Leé **Detalle** y revisá los sectores antes de confirmar. |
| **Oficina existente** | Ya está registrada y la revisión no encontró cambios. | No hace falta volver a incorporarla. Generalmente no se puede marcar su casilla. |
| **Posible duplicado** | La información podría corresponder a una oficina que ya existe. | **No confirmes sin comprobarlo**. Consultá con quien registró la oficina o con el responsable de los datos. |

**Importante:** el sistema muestra la acción y su explicación en **Detalle**. No hay que adivinar por el nombre si una oficina es nueva o está duplicada.

## 3. Revisar los sectores de cada oficina

Este paso es **muy importante**.

En la fila de la oficina que quieras revisar, presioná **VER SECTORES**.

Abajo se abre el apartado **Sectores de la oficina**.

![Apartado Sectores de la oficina con un sector para agregar](/img/oficinas/oficinas-03-detalle-sectores.png)

### ¿Qué es un sector?

Un **sector** es un área de la empresa. Por ejemplo, un sector puede ocupar una oficina o compartirla con otro.

**Una misma oficina puede estar relacionada con uno, dos o más sectores.**

**Ejemplo:** imaginá que en una misma sala trabajan personas de dos sectores diferentes. La sala es **una sola oficina física**, pero estará vinculada con **los dos sectores**.

Por eso, en **Sectores de la oficina** pueden aparecer **varias filas para una misma oficina**. **No significa que se estén creando varias oficinas**: se está indicando qué sectores utilizan ese lugar.

Esta información importa porque, cuando después quieras [relevar productos](./relevar-productos.md) o [consultar existencias](./detalle-existencias.md), **primero vas a elegir un sector y después la oficina**. Si la relación con un sector no está registrada, esa oficina podría no aparecer donde la estás buscando.

### ¿Qué significa cada columna de Sectores de la oficina?

| Columna | Qué muestra |
| --- | --- |
| **Sector** | Nombre del sector al que está o estará relacionada la oficina. |
| **Acción** | Indica si ese sector se va a agregar o si ya está relacionado con la oficina. También puede mostrar una propuesta de quitarlo. |
| **Aplicar** | Casilla para decidir si se incorpora **una relación nueva** entre oficina y sector. Solo se puede cambiar cuando la pantalla lo permite. |

### ¿Qué acciones puede tener un sector?

**Agregar sector** significa que la oficina todavía no está vinculada con ese sector y se propone agregar la relación. Si la oficina está seleccionada y es nueva o tiene cambios, podés **marcar o desmarcar Aplicar** para decidir si agregás esa relación.

**Sector ya asociado** significa que la relación **ya existe**. La casilla aparece **marcada y bloqueada**. No hace falta agregarla otra vez.

**Quitar sector** significa que el archivo propone dejar de relacionar la oficina con ese sector. **En esta versión del sistema esa opción está bloqueada**: la casilla aparece desmarcada y no permite ejecutar la eliminación desde esta pantalla.

:::caution Importante sobre quitar sectores
Aunque cambies los sectores en la aplicación de Relevamiento y generes otro archivo, **la opción Quitar sector continúa bloqueada en el importador actual**. Si necesitás corregir una asociación que ya existe, consultá con el responsable del sistema. No intentes resolverlo creando otra oficina con distinto nombre.
:::

:::tip Revisá todas las filas
Si una oficina tiene **tres sectores**, revisá **los tres**. Elegir la oficina en la tabla principal no significa que todos los sectores nuevos deban incorporarse automáticamente: comprobá también **Aplicar** en cada sector nuevo.
:::

### ¿Qué pasa si desmarcás una oficina?

Si quitás la marca de **Seleccionar** en la tabla principal, no se aplicarán los cambios de esa oficina. Mientras esté desmarcada, las opciones para agregar sectores nuevos quedarán inhabilitadas.

Si volvés a marcarla, el sistema conserva las decisiones sobre sectores nuevos que habías seleccionado. De todos modos, **revisalas otra vez antes de confirmar**.

## 4. Confirmar la incorporación de las oficinas

Una vez que revisaste la tabla y los sectores:

1. En **Resultados de la revisión**, dejá marcadas las oficinas que realmente querés incorporar o actualizar.
2. Entrá a **VER SECTORES** en cada una.
3. Para los sectores con acción **Agregar sector**, dejá **Aplicar** marcado solamente donde corresponda.
4. Revisá el número de **oficinas seleccionadas** que aparece debajo de la tabla.
5. Presioná **CONFIRMAR IMPORTACIÓN**.
6. Leé el mensaje de resultado del sistema.

![Pantalla con la oficina y el sector seleccionados antes de confirmar](/img/oficinas/oficinas-04-archivo-revisado.png)

**El botón CONFIRMAR IMPORTACIÓN aparece cuando hay al menos una oficina con cambios seleccionada.** Si no aparece, revisá si marcaste una oficina que necesita ser incorporada o modificada.

:::important No cierres sin comprobar el resultado
Después de presionar **CONFIRMAR IMPORTACIÓN**, mirá el mensaje que muestra el sistema. **La revisión previa no significa que los datos ya se hayan guardado.**
:::

## 5. Comprobar que se incorporaron correctamente

Si la operación salió bien, el sistema puede mostrar un mensaje como **«Importación confirmada. Oficinas procesadas: 1»**.

La cantidad depende de las oficinas que se hayan procesado.

![Resultado después de confirmar la importación](/img/oficinas/oficinas-05-importacion-confirmada.png)

El sistema vuelve a revisar los datos. Una oficina que acaba de incorporarse puede pasar a figurar como **Oficina existente**, con el detalle **«No hay diferencias.»**.

También podés presionar **VER SECTORES** para comprobar que la relación agregada ahora figura como **Sector ya asociado**.

![Un sector que ya quedó asociado a la oficina](/img/oficinas/oficinas-06-sectores-ya-asociados.png)

**Si ya aparece como existente y no hay cambios pendientes, no necesitás volver a importarla.**

## 6. Ejemplo completo: Oficina Hardware

En las capturas se utiliza una oficina de ejemplo llamada **Oficina Hardware**.

1. En la aplicación de Relevamiento se registra **Oficina Hardware** y se indica que está relacionada con el sector **Soporte Alto Molino**.
2. Desde esa aplicación se genera el archivo `.csv` con la información.
3. En el Sistema de Inventario, entrás a **Oficinas**, seleccionás el archivo y presionás **REVISAR ARCHIVO**.
4. En **Acción** aparece **Crear oficina** y en **Detalle** se indica **«Oficina nueva.»**.
5. Abrís **VER SECTORES** y comprobás que **Soporte Alto Molino** figura como **Agregar sector**.
6. Dejás seleccionada la oficina y marcado **Aplicar** para ese sector.
7. Presionás **CONFIRMAR IMPORTACIÓN** y revisás el mensaje.
8. Después, la oficina puede aparecer como **Oficina existente** y el sector como **Sector ya asociado**.

**En este ejemplo hay un solo sector, pero una oficina puede tener varios.** Si fuera así, tendrías que revisar cada sector que aparece en la lista.

## 7. Si aparece un mensaje de error

| Qué puede ocurrir | Qué podés hacer |
| --- | --- |
| Te pide seleccionar un archivo CSV | Volvé a **AGREGAR ARCHIVOS...**, elegí **un solo archivo** y esperá a que termine de cargarse. |
| Dice que no puede acceder al archivo | Seleccionalo nuevamente. Comprobá que esté guardado en la computadora. |
| El archivo no contiene oficinas | Comprobá que elegiste el archivo generado por la aplicación de Relevamiento. |
| Informa un error en los datos, por ejemplo en la ubicación | Revisá los datos en la aplicación de Relevamiento y generá otro archivo. |
| Aparece **Posible duplicado** | Antes de confirmar, pedí que revisen si esa oficina ya existe. |
| No aparece **CONFIRMAR IMPORTACIÓN** | Debe haber **al menos una oficina con cambios seleccionada**. |
| El archivo dejó de estar disponible al confirmar | Seleccioná el archivo de nuevo, presioná **REVISAR ARCHIVO** y repetí la revisión. |

## Preguntas frecuentes

**¿Necesito abrir el CSV con otro programa?**  
No. Solo necesitás **tenerlo guardado** y seleccionarlo con **AGREGAR ARCHIVOS...**. El sistema lee el contenido.

**¿Puedo revisar un archivo sin guardar nada?**  
Sí. **REVISAR ARCHIVO** no guarda los cambios. Se guardan al confirmar la importación.

**¿Una oficina puede aparecer asociada a varios sectores?**  
**Sí.** Puede ser una única sala o espacio físico usado por diferentes sectores de la empresa. Cada sector se revisa en una fila.

**¿Puedo desmarcar un sector ya asociado?**  
No. Esa relación ya existe. La casilla está bloqueada. Las propuestas de **Quitar sector** también están bloqueadas en esta versión.

**¿Qué pasa si un archivo tiene varias oficinas?**  
Podés revisarlas una por una y marcar las que correspondan. No tenés que procesarlas todas obligatoriamente.

**¿Qué hago si no sé si una oficina está duplicada?**  
No confirmes esa oficina hasta consultarlo con el responsable de los datos.

## 8. Información adicional sobre el archivo (no necesaria para usar esta pantalla)

El archivo generado por la aplicación guarda, entre otros, estos datos:

| Dato del archivo | Qué representa |
| --- | --- |
| `OFICINA_UUID` | Identificación de la oficina en la aplicación de origen. |
| `ESPACIOFISICONOMBRE` y `TIPOESPACIOFISICONOMBRE` | Nombre de la oficina y tipo de espacio. |
| `LOCALIDADESID` y `LOCALIDAD_TEXTO` | Localidad de la oficina. |
| `ESPACIOFISICOLATITUD` y `ESPACIOFISICOLONGITUD` | Datos de ubicación geográfica. |
| `PRECISION_METROS`, `ORIGEN_COORDENADAS` y `FECHA_CAPTURA` | Información sobre la captura de la ubicación. |
| `ORGANIGRAMAID` y `ORGANIGRAMANOMBRE` | Sector de la empresa relacionado con la oficina. |
| `FECHA_ALTA` y `FECHA_MODIFICACION` | Fechas registradas en la aplicación. |
| `ESTADO_OFICINA` y `FECHA_BAJA` | Estado de la oficina y, si corresponde, su fecha de baja. |

**No hace falta escribir ni modificar estos datos a mano.** Se incluyen para quienes necesiten reconocer la información que envía la aplicación. Como referencia técnica, el archivo de ejemplo utiliza el formato CSV con campos separados por punto y coma (`;`).

---

**Cuando termines**, podés ir a [Relevar productos](./relevar-productos.md), [Detalle de Existencias](./detalle-existencias.md) o [Reportes](./reportes-productos-organigrama.md) para trabajar con la información del inventario.
