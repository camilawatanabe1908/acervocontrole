"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegraNegocioError = void 0;
const AplicacaoError_1 = require("./AplicacaoError");
class RegraNegocioError extends AplicacaoError_1.AplicacaoError {
    constructor(mensagem) {
        super(mensagem, 422);
    }
}
exports.RegraNegocioError = RegraNegocioError;
