import exportacionJson from './data/c_Exportacion.json';
import formaPagoJson from './data/c_FormaPago.json';
import impuestoJson from './data/c_Impuesto.json';
import mesesJson from './data/c_Meses.json';
import metodoPagoJson from './data/c_MetodoPago.json';
import monedaJson from './data/c_Moneda.json';
import objetoImpJson from './data/c_ObjetoImp.json';
import periodicidadJson from './data/c_Periodicidad.json';
import regimenFiscalJson from './data/c_RegimenFiscal.json';
import tipodeComprobanteJson from './data/c_TipodeComprobante.json';
import tipoFactorJson from './data/c_TipoFactor.json';
import tipoRelacionJson from './data/c_TipoRelacion.json';
import usoCFDIJson from './data/c_UsoCFDI.json';
import {
    ExportacionArray,
    FormaPagoArray,
    ImpuestoArray,
    MesesArray,
    MetodoPagoArray,
    MonedaArray,
    ObjetoImpArray,
    PeriodicidadArray,
    RegimenFiscalArray,
    TipoDeComprobanteArray,
    TipoFactorArray,
    TipoRelacionArray,
    UsoCFDIArray
} from "./types";

export const catExportacion: ExportacionArray = exportacionJson.map(value => ({
    key: value.key,
    description: value.description
}));

export const catFormaPago: FormaPagoArray = formaPagoJson.map(value => ({
    key: value.key,
    description: value.description,
    banked: value.banked,
    transactionNumber: value.transactionNumber,
    rfcPayerAccount: value.rfcPayerAccount,
    payerAccount: value.payerAccount,
    formatPayerAccount: value.formatPayerAccount,
    rfcBeneficiaryAccount: value.rfcBeneficiaryAccount,
    beneficiaryAccount: value.beneficiaryAccount,
    formatBeneficiaryAccount: value.formatBeneficiaryAccount,
    typePaymentChain: value.typePaymentChain,
    namePayerBank: value.namePayerBank,
}));

export const catImpuesto: ImpuestoArray = impuestoJson.map(value => ({
    key: value.key,
    description: value.description,
    retention: value.retention,
    transfer: value.transfer
}));

export const catMeses: MesesArray = mesesJson.map(value => ({
    key: value.key,
    description: value.description
}));

export const catMetodoPago: MetodoPagoArray = metodoPagoJson.map(value => ({
    key: value.key,
    description: value.description
}));

export const catMoneda: MonedaArray = monedaJson.map(value => ({
    key: value.key,
    description: value.description,
    decimals: value.decimals
}));

export const catObjetoImp: ObjetoImpArray = objetoImpJson.map(value => ({
    key: value.key,
    description: value.description
}));

export const catPeriodicidad: PeriodicidadArray = periodicidadJson.map(value => ({
    key: value.key,
    description: value.description
}));

export const catRegimenFiscal: RegimenFiscalArray = regimenFiscalJson.map(value => ({
    key: value.key,
    description: value.description,
    moral: value.moral,
    physical: value.physical
}));

export const catTipoDeComprobante: TipoDeComprobanteArray = tipodeComprobanteJson.map(value => ({
    key: value.key,
    description: value.description
}));

export const catTipoFactor: TipoFactorArray = tipoFactorJson.map(value => ({
    key: value.key,
    description: value.description
}));

export const catTipoRelacion: TipoRelacionArray = tipoRelacionJson.map(value => ({
    key: value.key,
    description: value.description
}));

export const catUsoCFDI: UsoCFDIArray = usoCFDIJson.map(value => ({
    key: value.key,
    description: value.description,
    moral: value.moral,
    physical: value.physical,
    regimens: value.regimens
}));
