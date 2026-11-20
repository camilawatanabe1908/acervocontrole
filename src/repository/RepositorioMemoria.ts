import { EntidadeBase } from "../interfaces/EntidadeBase";
import { RepositorioContract } from "../interfaces/RepositorioContract";
import { EntidadeNaoEncontradaError } from "../errors/EntidadeNaoEncontradaError";

export class RepositorioMemoria<T extends EntidadeBase> implements RepositorioContract<T> {
  private itens: T[] = [];

  public salvar(entidade: T): T {
    const indice = this.itens.findIndex((i) => i.id === entidade.id);
    if (indice >= 0) {
      this.itens[indice] = entidade;
    } else {
      this.itens.push(entidade);
    }
    return entidade;
  }

  public buscarPorId(id: number): T | null {
    return this.itens.find((i) => i.id === id) ?? null;
  }

  public obterPorId(id: number): T {
    const item = this.buscarPorId(id);
    if (item === null) {
      throw new EntidadeNaoEncontradaError("Item", id);
    }
    return item;
  }

  public listarTodos(): T[] {
    return [...this.itens];
  }

  public remover(id: number): void {
    this.obterPorId(id);
    this.itens = this.itens.filter((i) => i.id !== id);
  }
}