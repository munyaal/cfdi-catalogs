# Documentación de la librería de catálogos del SAT 4.0

## Descripción

Esta librería de NPM proporciona acceso a diversos catálogos del Servicio de Administración Tributaria (SAT) de México
en su versión 4.0. Los catálogos incluidos en esta librería son utilizados comúnmente en la generación y manejo de
Comprobantes Fiscales Digitales por Internet (CFDI) y otras transacciones fiscales en México.

## Instalación

Para utilizar esta librería en tu proyecto, puedes instalarla a través de NPM usando el siguiente comando:

```
npm i @munyaal/cfdi-catalogs
```

## Uso básico

Para utilizar los catálogos proporcionados por esta librería en tu código, primero debes importarlos de la siguiente manera:

```typescript
import {
  catExportacion,
  catFormaPago,
  catImpuesto,
  catMeses,
  catMetodoPago,
  catMoneda,
  catObjetoImp,
  catPeriodicidad,
  catRegimenFiscal,
  catTipoDeComprobante,
  catTipoFactor,
  catTipoRelacion,
  catUsoCFDI
} from '@munyaal/cfdi-catalogs';
```

Luego, puedes utilizar estos catálogos según tus necesidades en tu aplicación.

### Catálogos Disponibles

A continuación, se describe brevemente cada uno de los catálogos incluidos en esta librería:

- catExportacion: Catálogo de códigos para indicar el tipo de operación de exportación.

- catFormaPago: Catálogo de códigos para indicar la forma de pago en una transacción.

- catImpuesto: Catálogo de códigos para los impuestos aplicables en una transacción.

- catMeses: Catálogo de códigos para los meses del año.

- catMetodoPago: Catálogo de códigos para indicar el método de pago utilizado en una transacción.

- catMoneda: Catálogo de códigos para indicar la moneda utilizada en una transacción.

- catObjetoImp: Catálogo de códigos para especificar el objeto del impuesto en una transacción.

- catPeriodicidad: Catálogo de códigos para indicar la periodicidad de pago en una transacción.

- catRegimenFiscal: Catálogo de códigos para los regímenes fiscales disponibles.

- catTipoDeComprobante: Catálogo de códigos para indicar el tipo de comprobante fiscal.

- catTipoFactor: Catálogo de códigos para indicar el tipo de factor (Tasa o Cuota) en una tasa o cuota de impuesto.

- catTipoRelacion: Catálogo de códigos para indicar el tipo de relación entre CFDIs.

- catUsoCFDI: Catálogo de códigos para indicar el uso del CFDI.

### Ejemplos

A continuación, se presentan ejemplos de cómo utilizar algunos de los catálogos en tu código:

Ejemplo de Uso de catFormaPago

```typescript
console.log("Formas de Pago Disponibles:", catFormaPago);
```

Ejemplo de Uso de catImpuesto

```typescript
console.log("Impuestos Aplicables:", catImpuesto);
```

## Función `searchOption`

Esta función es un helper que te permite buscar una opción específica en los catálogos proporcionados por esta librería utilizando una clave (key) como parámetro de búsqueda.

### Uso

```typescript
import { searchOption } from '@munyaal/cfdi-catalogs';

const option = searchOption('clave', CatalogEnum.Exportacion);
if (option) {
  // Realiza acciones con la opción encontrada
  console.log(option);
} else {
  console.log('Opción no encontrada');
}
```
### Parámetros

- key (String): La clave (key) que deseas buscar en el catálogo.
- cat (CatalogEnum): El catálogo en el que deseas buscar la opción.

### Valor de Retorno

Esta función devuelve un objeto que representa la opción encontrada en el catálogo especificado. Si no se encuentra 
ninguna opción con la clave proporcionada, la función devuelve undefined.

### Ejemplo

```typescript
import { searchOption, CatalogEnum } from '@munyaal/cfdi-catalogs';

const option = searchOption('601', CatalogEnum.RegimenFiscal);
if (option) {
  console.log('Opción encontrada:', option);
} else {
  console.log('Opción no encontrada');
}

```

En el ejemplo anterior, la función searchOption busca la opción con la clave '01' en el catálogo de Tipo de Comprobante y muestra el resultado si se encuentra.


## Contribución
Si deseas contribuir a esta librería o informar sobre problemas, puedes hacerlo a través del repositorio de GitHub en https://github.com/munyaal/cfdi-catalogs.

