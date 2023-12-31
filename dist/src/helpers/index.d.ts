import { CatalogEnum } from "../enums";
import { ExportacionArray, ExportacionOption, FormaPagoArray, FormaPagoOption, ImpuestoArray, ImpuestoOption, MesesArray, MesesOption, MetodoPagoArray, MetodoPagoOption, MonedaArray, MonedaOption, ObjetoImpArray, ObjetoImpOption, PeriodicidadArray, PeriodicidadOption, RegimenFiscalArray, RegimenFiscalOption, TipoDeComprobanteArray, TipoDeComprobanteOption, TipoFactorArray, TipoFactorOption, TipoRelacionArray, TipoRelacionOption, UsoCFDIArray, UsoCFDIOption } from "../types";
export declare function searchOption(key: string, cat: CatalogEnum.Exportacion): ExportacionOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.FormaPago): FormaPagoOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.Impuesto): ImpuestoOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.Meses): MesesOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.MetodoPago): MetodoPagoOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.Moneda): MonedaOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.ObjetoImp): ObjetoImpOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.Periodicidad): PeriodicidadOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.RegimenFiscal): RegimenFiscalOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.TipoDeComprobante): TipoDeComprobanteOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.TipoFactor): TipoFactorOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.TipoRelacion): TipoRelacionOption | undefined;
export declare function searchOption(key: string, cat: CatalogEnum.UsoCFDI): UsoCFDIOption | undefined;
export declare function getCatalog(cat: CatalogEnum.Exportacion): ExportacionArray;
export declare function getCatalog(cat: CatalogEnum.FormaPago): FormaPagoArray;
export declare function getCatalog(cat: CatalogEnum.Impuesto): ImpuestoArray;
export declare function getCatalog(cat: CatalogEnum.Meses): MesesArray;
export declare function getCatalog(cat: CatalogEnum.MetodoPago): MetodoPagoArray;
export declare function getCatalog(cat: CatalogEnum.Moneda): MonedaArray;
export declare function getCatalog(cat: CatalogEnum.ObjetoImp): ObjetoImpArray;
export declare function getCatalog(cat: CatalogEnum.Periodicidad): PeriodicidadArray;
export declare function getCatalog(cat: CatalogEnum.RegimenFiscal): RegimenFiscalArray;
export declare function getCatalog(cat: CatalogEnum.TipoDeComprobante): TipoDeComprobanteArray;
export declare function getCatalog(cat: CatalogEnum.TipoFactor): TipoFactorArray;
export declare function getCatalog(cat: CatalogEnum.TipoRelacion): TipoRelacionArray;
export declare function getCatalog(cat: CatalogEnum.UsoCFDI): UsoCFDIArray;
