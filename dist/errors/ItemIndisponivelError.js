"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemIndisponivelError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class ItemIndisponivelError extends AplicacaoError_1.AplicacaoError {
    titulo;
    constructor(titulo) {
        super(`O item "${titulo}" não está disponível para empréstimo.`, 409);
        this.titulo = titulo;
    }
}
exports.ItemIndisponivelError = ItemIndisponivelError;
