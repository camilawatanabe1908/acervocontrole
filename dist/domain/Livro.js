"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
const RegraNegocioError_1 = require("../errors/RegraNegocioError");
class Livro extends ItemAcervo_1.ItemAcervo {
    _autor;
    _paginas;
    _reservadoPor = null;
    constructor(titulo, anoLancamento, _autor, _paginas) {
        super(titulo, anoLancamento);
        this._autor = _autor;
        this._paginas = _paginas;
    }
    get autor() {
        return this._autor;
    }
    get paginas() {
        return this._paginas;
    }
    get reservadoPor() {
        return this._reservadoPor;
    }
    reservar(nomeUsuario) {
        if (this._reservadoPor !== null) {
            throw new RegraNegocioError_1.RegraNegocioError(`"${this.titulo}" já está reservado por ${this._reservadoPor}.`);
        }
        this._reservadoPor = nomeUsuario;
    }
    cancelarReserva() {
        if (this._reservadoPor === null) {
            throw new RegraNegocioError_1.RegraNegocioError(`"${this.titulo}" não possui reserva.`);
        }
        this._reservadoPor = null;
    }
    calcularMulta(diasAtraso) {
        this.validarDiasAtraso(diasAtraso);
        return diasAtraso * 0.5;
    }
}
exports.Livro = Livro;
