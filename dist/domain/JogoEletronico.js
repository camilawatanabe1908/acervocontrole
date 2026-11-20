"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogoEletronico = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
class JogoEletronico extends ItemAcervo_1.ItemAcervo {
    _plataforma;
    static MULTA_MAXIMA = 50;
    constructor(titulo, anoLancamento, _plataforma) {
        super(titulo, anoLancamento);
        this._plataforma = _plataforma;
    }
    get plataforma() {
        return this._plataforma;
    }
    calcularMulta(diasAtraso) {
        this.validarDiasAtraso(diasAtraso);
        return Math.min(diasAtraso * 2, JogoEletronico.MULTA_MAXIMA);
    }
}
exports.JogoEletronico = JogoEletronico;
