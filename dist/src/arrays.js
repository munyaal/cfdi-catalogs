"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catUsoCFDI = exports.catTipoRelacion = exports.catTipoFactor = exports.catTipoDeComprobante = exports.catRegimenFiscal = exports.catPeriodicidad = exports.catObjetoImp = exports.catMoneda = exports.catMetodoPago = exports.catMeses = exports.catImpuesto = exports.catFormaPago = exports.catExportacion = void 0;
const c_Exportacion_json_1 = __importDefault(require("./data/c_Exportacion.json"));
const c_FormaPago_json_1 = __importDefault(require("./data/c_FormaPago.json"));
const c_Impuesto_json_1 = __importDefault(require("./data/c_Impuesto.json"));
const c_Meses_json_1 = __importDefault(require("./data/c_Meses.json"));
const c_MetodoPago_json_1 = __importDefault(require("./data/c_MetodoPago.json"));
const c_Moneda_json_1 = __importDefault(require("./data/c_Moneda.json"));
const c_ObjetoImp_json_1 = __importDefault(require("./data/c_ObjetoImp.json"));
const c_Periodicidad_json_1 = __importDefault(require("./data/c_Periodicidad.json"));
const c_RegimenFiscal_json_1 = __importDefault(require("./data/c_RegimenFiscal.json"));
const c_TipodeComprobante_json_1 = __importDefault(require("./data/c_TipodeComprobante.json"));
const c_TipoFactor_json_1 = __importDefault(require("./data/c_TipoFactor.json"));
const c_TipoRelacion_json_1 = __importDefault(require("./data/c_TipoRelacion.json"));
const c_UsoCFDI_json_1 = __importDefault(require("./data/c_UsoCFDI.json"));
exports.catExportacion = c_Exportacion_json_1.default.map(value => ({
    key: value.key,
    description: value.description
}));
exports.catFormaPago = c_FormaPago_json_1.default.map(value => ({
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
exports.catImpuesto = c_Impuesto_json_1.default.map(value => ({
    key: value.key,
    description: value.description,
    retention: value.retention,
    transfer: value.transfer
}));
exports.catMeses = c_Meses_json_1.default.map(value => ({
    key: value.key,
    description: value.description
}));
exports.catMetodoPago = c_MetodoPago_json_1.default.map(value => ({
    key: value.key,
    description: value.description
}));
exports.catMoneda = c_Moneda_json_1.default.map(value => ({
    key: value.key,
    description: value.description,
    decimals: value.decimals
}));
exports.catObjetoImp = c_ObjetoImp_json_1.default.map(value => ({
    key: value.key,
    description: value.description
}));
exports.catPeriodicidad = c_Periodicidad_json_1.default.map(value => ({
    key: value.key,
    description: value.description
}));
exports.catRegimenFiscal = c_RegimenFiscal_json_1.default.map(value => ({
    key: value.key,
    description: value.description,
    moral: value.moral,
    physical: value.physical
}));
exports.catTipoDeComprobante = c_TipodeComprobante_json_1.default.map(value => ({
    key: value.key,
    description: value.description
}));
exports.catTipoFactor = c_TipoFactor_json_1.default.map(value => ({
    key: value.key,
    description: value.description
}));
exports.catTipoRelacion = c_TipoRelacion_json_1.default.map(value => ({
    key: value.key,
    description: value.description
}));
exports.catUsoCFDI = c_UsoCFDI_json_1.default.map(value => ({
    key: value.key,
    description: value.description,
    moral: value.moral,
    physical: value.physical,
    regimens: value.regimens
}));
