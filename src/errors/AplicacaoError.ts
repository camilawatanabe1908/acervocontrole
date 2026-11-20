export abstract class AplicacaoError extends Error {
  constructor(mensagem: string, public readonly codigoStatus: number) {
    super(mensagem);
    this.name = this.constructor.name;
  }
}