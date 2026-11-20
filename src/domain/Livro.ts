import { ItemAcervo } from "./ItemAcervo";
import { Reservavel } from "../interfaces/Reservavel";
import { RegraNegocioError } from "../errors/RegraNegocioError";

export class Livro extends ItemAcervo implements Reservavel {
  private _reservadoPor: string | null = null;

  constructor(
    titulo: string,
    anoLancamento: number,
    private _autor: string,
    private _paginas: number
  ) {
    super(titulo, anoLancamento);
  }

  public get autor(): string {
    return this._autor;
  }

  public get paginas(): number {
    return this._paginas;
  }

  public get reservadoPor(): string | null {
    return this._reservadoPor;
  }

  public reservar(nomeUsuario: string): void {
    if (this._reservadoPor !== null) {
      throw new RegraNegocioError(`"${this.titulo}" já está reservado por ${this._reservadoPor}.`);
    }
    this._reservadoPor = nomeUsuario;
  }

  public cancelarReserva(): void {
    if (this._reservadoPor === null) {
      throw new RegraNegocioError(`"${this.titulo}" não possui reserva.`);
    }
    this._reservadoPor = null;
  }

  public override calcularMulta(diasAtraso: number): number {
    this.validarDiasAtraso(diasAtraso);
    return diasAtraso * 0.5;
  }
}