import { AplicacaoError } from "./AplicacaoError";

export class RegraNegocioError extends AplicacaoError {
  constructor(mensagem: string) {
    super(mensagem, 422);
  }
}