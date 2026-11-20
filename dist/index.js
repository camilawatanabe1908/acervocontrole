"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = require("./domain/Livro");
const JogoEletronico_1 = require("./domain/JogoEletronico");
const RepositorioMemoria_1 = require("./repository/RepositorioMemoria");
const AplicacaoError_1 = require("./errors/AplicacaoError");
const EntidadeNaoEncontradaError_1 = require("./errors/EntidadeNaoEncontradaError");
const ItemIndisponivelError_1 = require("./errors/ItemIndisponivelError");
const repo = new RepositorioMemoria_1.RepositorioMemoria();
console.log("=== Cadastro do acervo ===");
const livro = new Livro_1.Livro("Dom Casmurro", 1899, "Machado de Assis", 256);
const jogo = new JogoEletronico_1.JogoEletronico("Minecraft", 2011, "PC");
const livro2 = new Livro_1.Livro("Harry Potter e a Pedra Filosofal", 1997, "J.K. Rowling", 264);
[livro, jogo, livro2].forEach((item) => repo.salvar(item));
function exibirResumo(item) {
    const resumo = {
        id: item.id,
        titulo: item.titulo,
        statusDisponibilidade: item.statusDisponibilidade,
    };
    console.log(`#${resumo.id} ${resumo.titulo} - ${resumo.statusDisponibilidade}`);
}
repo.listarTodos().forEach(exibirResumo);
console.log("\n=== Empréstimo e devolução ===");
try {
    livro.emprestar();
    console.log(`Status: ${livro.statusDisponibilidade} (${livro.tempoEmprestado} dia(s))`);
    livro.emprestar();
    console.log("Esta linha não roda.");
}
catch (erro) {
    if (erro instanceof ItemIndisponivelError_1.ItemIndisponivelError) {
        console.warn(`Alerta tratado [${erro.codigoStatus}]: ${erro.message}`);
    }
    else if (erro instanceof Error) {
        console.error(`Erro genérico: ${erro.message}`);
    }
}
finally {
    livro.devolver();
    console.log(`Após devolver: ${livro.statusDisponibilidade}`);
}
console.log("\n=== Polimorfismo: multa por 10 dias de atraso ===");
repo.listarTodos().forEach((item) => {
    console.log(`${item.constructor.name} "${item.titulo}": R$ ${item.calcularMulta(10).toFixed(2)}`);
});
console.log(`Jogo com 60 dias (teto): R$ ${jogo.calcularMulta(60).toFixed(2)}`);
console.log("\n=== Interface Reservavel ===");
try {
    livro.reservar("Ana");
    console.log(`Reservado por: ${livro.reservadoPor}`);
    livro.reservar("Carlos");
}
catch (erro) {
    if (erro instanceof AplicacaoError_1.AplicacaoError) {
        console.warn(`Alerta tratado [${erro.codigoStatus}]: ${erro.message}`);
    }
}
console.log("\n=== Partial: atualização parcial ===");
livro.atualizarDados({ titulo: "Dom Casmurro (edição de bolso)" });
exibirResumo(livro);
console.log("\n=== Item inexistente ===");
try {
    repo.obterPorId(999);
}
catch (erro) {
    if (erro instanceof EntidadeNaoEncontradaError_1.EntidadeNaoEncontradaError) {
        console.warn(`Alerta tratado [${erro.codigoStatus}]: ${erro.message}`);
    }
}
