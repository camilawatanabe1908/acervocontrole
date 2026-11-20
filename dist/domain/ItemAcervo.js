"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemAcervo = void 0;
const ItemIndisponivelError_1 = require("../errors/ItemIndisponivelError");
const RegraNegocioError_1 = require("../errors/RegraNegocioError");
class ItemAcervo {
    _titulo;
    _anoLancamento;
    static _contadorId = 0;
    id;
    _emprestadoEm = null;
    constructor(_titulo, _anoLancamento) {
        this._titulo = _titulo;
        this._anoLancamento = _anoLancamento;
        ItemAcervo._contadorId++;
        this.id = ItemAcervo._contadorId;
    }
    get titulo() {
        return this._titulo;
    }
    get anoLancamento() {
        return this._anoLancamento;
    }
    get statusDisponibilidade() {
        return this._emprestadoEm === null ? "Disponível" : "Emprestado";
    }
    get tempoEmprestado() {
        if (this._emprestadoEm === null)
            return 0;
        const msPorDia = 1000 * 60 * 60 * 24;
        return Math.floor((Date.now() - this._emprestadoEm.getTime()) / msPorDia);
    }
    emprestar() {
        if (this._emprestadoEm !== null) {
            throw new ItemIndisponivelError_1.ItemIndisponivelError(this._titulo);
        }
        this._emprestadoEm = new Date();
    }
    devolver() {
        if (this._emprestadoEm === null) {
            throw new RegraNegocioError_1.RegraNegocioError(`O item "${this._titulo}" não está emprestado.`);
        }
        this._emprestadoEm = null;
    }
    atualizarDados(dados) {
        if (dados.titulo !== undefined) {
            if (dados.titulo.trim() === "") {
                throw new RegraNegocioError_1.RegraNegocioError("O título não pode ser vazio.");
            }
            this._titulo = dados.titulo;
        }
        if (dados.anoLancamento !== undefined) {
            if (dados.anoLancamento < 0) {
                throw new RegraNegocioError_1.RegraNegocioError("Ano de lançamento inválido.");
            }
            this._anoLancamento = dados.anoLancamento;
        }
    }
    validarDiasAtraso(diasAtraso) {
        if (diasAtraso < 0) {
            throw new RegraNegocioError_1.RegraNegocioError("Dias de atraso não pode ser negativo.");
        }
    }
}
exports.ItemAcervo = ItemAcervo;
