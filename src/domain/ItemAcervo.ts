import { EntidadeBase } from "../interfaces/EntidadeBase";
import { ItemIndisponivelError } from "../errors/ItemIndisponivelError";
import { RegraNegocioError } from "../errors/RegraNegocioError";
import { AtualizarItemDTO } from "../types/dtos";

export abstract class ItemAcervo implements EntidadeBase {
  private static _contadorId: number = 0;

  public readonly id: number;
  private _emprestadoEm: Date | null = null;

  constructor(
    private _titulo: string,
    private _anoLancamento: number
  ) {
    ItemAcervo._contadorId++;
    this.id = ItemAcervo._contadorId;
  }

  public abstract calcularMulta(diasAtraso: number): number;

  public get titulo(): string {
    return this._titulo;
  }

  public get anoLancamento(): number {
    return this._anoLancamento;
  }

  public get statusDisponibilidade(): "Disponível" | "Emprestado" {
    return this._emprestadoEm === null ? "Disponível" : "Emprestado";
  }

  public get tempoEmprestado(): number {
    if (this._emprestadoEm === null) return 0;
    const msPorDia = 1000 * 60 * 60 * 24;
    return Math.floor((Date.now() - this._emprestadoEm.getTime()) / msPorDia);
  }

  public emprestar(): void {
    if (this._emprestadoEm !== null) {
      throw new ItemIndisponivelError(this._titulo);
    }
    this._emprestadoEm = new Date();
  }

  public devolver(): void {
    if (this._emprestadoEm === null) {
      throw new RegraNegocioError(`O item "${this._titulo}" não está emprestado.`);
    }
    this._emprestadoEm = null;
  }

  public atualizarDados(dados: AtualizarItemDTO): void {
    if (dados.titulo !== undefined) {
      if (dados.titulo.trim() === "") {
        throw new RegraNegocioError("O título não pode ser vazio.");
      }
      this._titulo = dados.titulo;
    }
    if (dados.anoLancamento !== undefined) {
      if (dados.anoLancamento < 0) {
        throw new RegraNegocioError("Ano de lançamento inválido.");
      }
      this._anoLancamento = dados.anoLancamento;
    }
  }

  protected validarDiasAtraso(diasAtraso: number): void {
    if (diasAtraso < 0) {
      throw new RegraNegocioError("Dias de atraso não pode ser negativo.");
    }
  }
}