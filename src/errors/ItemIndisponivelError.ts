import { AplicacaoError } from "./AplicacaoError";

export class ItemIndisponivelError extends AplicacaoError {
  constructor(public readonly titulo: string) {
    super(`O item "${titulo}" não está disponível para empréstimo.`, 409);
  }
}