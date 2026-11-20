"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioMemoria = void 0;
const EntidadeNaoEncontradaError_1 = require("../errors/EntidadeNaoEncontradaError");
class RepositorioMemoria {
    itens = [];
    salvar(entidade) {
        const indice = this.itens.findIndex((i) => i.id === entidade.id);
        if (indice >= 0) {
            this.itens[indice] = entidade;
        }
        else {
            this.itens.push(entidade);
        }
        return entidade;
    }
    buscarPorId(id) {
        return this.itens.find((i) => i.id === id) ?? null;
    }
    obterPorId(id) {
        const item = this.buscarPorId(id);
        if (item === null) {
            throw new EntidadeNaoEncontradaError_1.EntidadeNaoEncontradaError("Item", id);
        }
        return item;
    }
    listarTodos() {
        return [...this.itens];
    }
    remover(id) {
        this.obterPorId(id);
        this.itens = this.itens.filter((i) => i.id !== id);
    }
}
exports.RepositorioMemoria = RepositorioMemoria;
