"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCatalog = exports.searchOption = void 0;
const enums_1 = require("../enums");
const arrays_1 = require("../arrays");
/*
* Buscar un registro por key
* */
function searchOption(key, cat) {
    switch (cat) {
        case enums_1.CatalogEnum.Exportacion:
            return getCatalog(enums_1.CatalogEnum.Exportacion)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.FormaPago:
            return getCatalog(enums_1.CatalogEnum.FormaPago)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.Impuesto:
            return getCatalog(enums_1.CatalogEnum.Impuesto)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.Meses:
            return getCatalog(enums_1.CatalogEnum.Meses)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.MetodoPago:
            return getCatalog(enums_1.CatalogEnum.MetodoPago)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.Moneda:
            return getCatalog(enums_1.CatalogEnum.Moneda)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.ObjetoImp:
            return getCatalog(enums_1.CatalogEnum.ObjetoImp)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.Periodicidad:
            return getCatalog(enums_1.CatalogEnum.Periodicidad)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.RegimenFiscal:
            return getCatalog(enums_1.CatalogEnum.RegimenFiscal)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.TipoDeComprobante:
            return getCatalog(enums_1.CatalogEnum.TipoDeComprobante)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.TipoFactor:
            return getCatalog(enums_1.CatalogEnum.TipoFactor)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.TipoRelacion:
            return getCatalog(enums_1.CatalogEnum.TipoRelacion)
                .find((value) => value.key === key);
        case enums_1.CatalogEnum.UsoCFDI:
            return getCatalog(enums_1.CatalogEnum.UsoCFDI)
                .find((value) => value.key === key);
    }
}
exports.searchOption = searchOption;
/*
* Obtener el catálogo según el parámetro
* */
function getCatalog(cat) {
    switch (cat) {
        case enums_1.CatalogEnum.Exportacion:
            return arrays_1.catExportacion;
        case enums_1.CatalogEnum.FormaPago:
            return arrays_1.catFormaPago;
        case enums_1.CatalogEnum.Impuesto:
            return arrays_1.catImpuesto;
        case enums_1.CatalogEnum.Meses:
            return arrays_1.catMeses;
        case enums_1.CatalogEnum.MetodoPago:
            return arrays_1.catMetodoPago;
        case enums_1.CatalogEnum.Moneda:
            return arrays_1.catMoneda;
        case enums_1.CatalogEnum.ObjetoImp:
            return arrays_1.catObjetoImp;
        case enums_1.CatalogEnum.Periodicidad:
            return arrays_1.catPeriodicidad;
        case enums_1.CatalogEnum.RegimenFiscal:
            return arrays_1.catRegimenFiscal;
        case enums_1.CatalogEnum.TipoDeComprobante:
            return arrays_1.catTipoDeComprobante;
        case enums_1.CatalogEnum.TipoFactor:
            return arrays_1.catTipoFactor;
        case enums_1.CatalogEnum.TipoRelacion:
            return arrays_1.catTipoRelacion;
        case enums_1.CatalogEnum.UsoCFDI:
            return arrays_1.catUsoCFDI;
    }
}
exports.getCatalog = getCatalog;
