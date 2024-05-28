export type Option = { key: string; description: string; }

export type ExportacionOption = Option;

export type ExportacionArray = ExportacionOption[];

export type FormaPagoOption = Option & {
    banked: string;
    transactionNumber: string;
    rfcPayerAccount: string;
    payerAccount: string;
    formatPayerAccount: string;
    rfcBeneficiaryAccount: string;
    beneficiaryAccount: string;
    formatBeneficiaryAccount: string;
    typePaymentChain: string;
    namePayerBank: string;
};

export type FormaPagoArray = FormaPagoOption[];

export type ImpuestoOption = Option & { retention: boolean; transfer: boolean; };

export type ImpuestoArray = ImpuestoOption[];

export type MesesOption = Option;

export type MesesArray = MesesOption[];

export type MetodoPagoOption = Option;

export type MetodoPagoArray = MetodoPagoOption[];

export type MonedaOption = Option & { decimals: number };

export type MonedaArray = MonedaOption[];

export type ObjetoImpOption = Option;

export type ObjetoImpArray = ObjetoImpOption[];

export type PeriodicidadOption = Option;

export type PeriodicidadArray = PeriodicidadOption[];

export type RegimenFiscalOption = Option & { physical: boolean; moral: boolean; };

export type RegimenFiscalArray = RegimenFiscalOption[];

export type TipoDeComprobanteOption = Option;

export type TipoDeComprobanteArray = TipoDeComprobanteOption[];

export type TipoFactorOption = Option;

export type TipoFactorArray = TipoFactorOption[];

export type TipoRelacionOption = Option;

export type TipoRelacionArray = TipoRelacionOption[];

export type UsoCFDIOption = Option & { physical: boolean; moral: boolean; regimens: string; };

export type UsoCFDIArray = UsoCFDIOption[];
