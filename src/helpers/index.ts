import { CatalogEnum } from "../enums";
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
} from "../arrays";
import {
    ExportacionArray,
    ExportacionOption,
    FormaPagoArray,
    FormaPagoOption,
    ImpuestoArray,
    ImpuestoOption,
    MesesArray,
    MesesOption,
    MetodoPagoArray,
    MetodoPagoOption,
    MonedaArray,
    MonedaOption,
    ObjetoImpArray,
    ObjetoImpOption,
    PeriodicidadArray,
    PeriodicidadOption,
    RegimenFiscalArray,
    RegimenFiscalOption,
    TipoDeComprobanteArray,
    TipoDeComprobanteOption,
    TipoFactorArray,
    TipoFactorOption,
    TipoRelacionArray,
    TipoRelacionOption,
    UsoCFDIArray,
    UsoCFDIOption
} from "../types";

export function searchOption(key: string, cat: CatalogEnum.Exportacion): ExportacionOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.FormaPago): FormaPagoOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.Impuesto): ImpuestoOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.Meses): MesesOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.MetodoPago): MetodoPagoOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.Moneda): MonedaOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.ObjetoImp): ObjetoImpOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.Periodicidad): PeriodicidadOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.RegimenFiscal): RegimenFiscalOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.TipoDeComprobante): TipoDeComprobanteOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.TipoFactor): TipoFactorOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.TipoRelacion): TipoRelacionOption | undefined;
export function searchOption(key: string, cat: CatalogEnum.UsoCFDI): UsoCFDIOption | undefined;
/*
* Buscar un registro por key
* */
export function searchOption(key: string, cat: CatalogEnum) {
    switch (cat) {
        case CatalogEnum.Exportacion:
            return getCatalog(CatalogEnum.Exportacion)
                .find((value: ExportacionOption) => value.key === key);
        case CatalogEnum.FormaPago:
            return getCatalog(CatalogEnum.FormaPago)
                .find((value: FormaPagoOption) => value.key === key);
        case CatalogEnum.Impuesto:
            return getCatalog(CatalogEnum.Impuesto)
                .find((value: ImpuestoOption) => value.key === key);
        case CatalogEnum.Meses:
            return getCatalog(CatalogEnum.Meses)
                .find((value: MesesOption) => value.key === key);
        case CatalogEnum.MetodoPago:
            return getCatalog(CatalogEnum.MetodoPago)
                .find((value: MetodoPagoOption) => value.key === key);
        case CatalogEnum.Moneda:
            return getCatalog(CatalogEnum.Moneda)
                .find((value: MonedaOption) => value.key === key);
        case CatalogEnum.ObjetoImp:
            return getCatalog(CatalogEnum.ObjetoImp)
                .find((value: ObjetoImpOption) => value.key === key);
        case CatalogEnum.Periodicidad:
            return getCatalog(CatalogEnum.Periodicidad)
                .find((value: PeriodicidadOption) => value.key === key);
        case CatalogEnum.RegimenFiscal:
            return getCatalog(CatalogEnum.RegimenFiscal)
                .find((value: RegimenFiscalOption) => value.key === key);
        case CatalogEnum.TipoDeComprobante:
            return getCatalog(CatalogEnum.TipoDeComprobante)
                .find((value: TipoDeComprobanteOption) => value.key === key);
        case CatalogEnum.TipoFactor:
            return getCatalog(CatalogEnum.TipoFactor)
                .find((value: TipoFactorOption) => value.key === key);
        case CatalogEnum.TipoRelacion:
            return getCatalog(CatalogEnum.TipoRelacion)
                .find((value: TipoRelacionOption) => value.key === key);
        case CatalogEnum.UsoCFDI:
            return getCatalog(CatalogEnum.UsoCFDI)
                .find((value: UsoCFDIOption) => value.key === key);
    }
}

export function getCatalog(cat: CatalogEnum.Exportacion): ExportacionArray;
export function getCatalog(cat: CatalogEnum.FormaPago): FormaPagoArray;
export function getCatalog(cat: CatalogEnum.Impuesto): ImpuestoArray;
export function getCatalog(cat: CatalogEnum.Meses): MesesArray;
export function getCatalog(cat: CatalogEnum.MetodoPago): MetodoPagoArray;
export function getCatalog(cat: CatalogEnum.Moneda): MonedaArray;
export function getCatalog(cat: CatalogEnum.ObjetoImp): ObjetoImpArray;
export function getCatalog(cat: CatalogEnum.Periodicidad): PeriodicidadArray;
export function getCatalog(cat: CatalogEnum.RegimenFiscal): RegimenFiscalArray;
export function getCatalog(cat: CatalogEnum.TipoDeComprobante): TipoDeComprobanteArray;
export function getCatalog(cat: CatalogEnum.TipoFactor): TipoFactorArray;
export function getCatalog(cat: CatalogEnum.TipoRelacion): TipoRelacionArray;
export function getCatalog(cat: CatalogEnum.UsoCFDI): UsoCFDIArray;
/*
* Obtener el catálogo según el parámetro
* */
export function getCatalog(cat: CatalogEnum): any {
    switch (cat) {
        case CatalogEnum.Exportacion:
            return catExportacion as ExportacionArray;
        case CatalogEnum.FormaPago:
            return catFormaPago as FormaPagoArray;
        case CatalogEnum.Impuesto:
            return catImpuesto as ImpuestoArray;
        case CatalogEnum.Meses:
            return catMeses as MesesArray;
        case CatalogEnum.MetodoPago:
            return catMetodoPago as MetodoPagoArray;
        case CatalogEnum.Moneda:
            return catMoneda as MonedaArray;
        case CatalogEnum.ObjetoImp:
            return catObjetoImp as ObjetoImpArray;
        case CatalogEnum.Periodicidad:
            return catPeriodicidad as PeriodicidadArray;
        case CatalogEnum.RegimenFiscal:
            return catRegimenFiscal as RegimenFiscalArray;
        case CatalogEnum.TipoDeComprobante:
            return catTipoDeComprobante as TipoDeComprobanteArray;
        case CatalogEnum.TipoFactor:
            return catTipoFactor as TipoFactorArray;
        case CatalogEnum.TipoRelacion:
            return catTipoRelacion as TipoRelacionArray;
        case CatalogEnum.UsoCFDI:
            return catUsoCFDI as UsoCFDIArray;
    }
}
