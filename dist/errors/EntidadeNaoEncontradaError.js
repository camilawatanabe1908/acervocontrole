"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntidadeNaoEncontradaError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class EntidadeNaoEncontradaError extends AplicacaoError_1.AplicacaoError {
    constructor(entidade, id) {
        super(`${entidade} com ID ${id} não foi encontrado(a).`, 404);
    }
}
exports.EntidadeNaoEncontradaError = EntidadeNaoEncontradaError;
