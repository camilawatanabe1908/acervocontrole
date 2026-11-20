import { EntidadeBase } from "./EntidadeBase";

export interface RepositorioContract<T extends EntidadeBase> {
  salvar(entidade: T): T;
  buscarPorId(id: number): T | null;
  obterPorId(id: number): T;
  listarTodos(): T[];
  remover(id: number): void;
}