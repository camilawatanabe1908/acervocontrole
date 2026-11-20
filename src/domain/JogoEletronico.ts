    import { ItemAcervo } from "./ItemAcervo";

export class JogoEletronico extends ItemAcervo {
  private static readonly MULTA_MAXIMA = 50;

  constructor(
    titulo: string,
    anoLancamento: number,
    private _plataforma: string
  ) {
    super(titulo, anoLancamento);
  }

  public get plataforma(): string {
    return this._plataforma;
  }

  public override calcularMulta(diasAtraso: number): number {
    this.validarDiasAtraso(diasAtraso);
    return Math.min(diasAtraso * 2, JogoEletronico.MULTA_MAXIMA);
  }
}