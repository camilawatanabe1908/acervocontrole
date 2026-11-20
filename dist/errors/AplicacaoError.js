"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacaoError = void 0;
class AplicacaoError extends Error {
    codigoStatus;
    constructor(mensagem, codigoStatus) {
        super(mensagem);
        this.codigoStatus = codigoStatus;
        this.name = this.constructor.name;
    }
}
exports.AplicacaoError = AplicacaoError;
