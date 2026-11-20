import { AplicacaoError } from "./AplicacaoError";

export class EntidadeNaoEncontradaError extends AplicacaoError {
  constructor(entidade: string, id: number) {
    super(`${entidade} com ID ${id} não foi encontrado(a).`, 404);
  }
}