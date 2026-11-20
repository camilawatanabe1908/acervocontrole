import { ItemAcervo } from "../domain/ItemAcervo";

export interface DadosItem {
  titulo: string;
  anoLancamento: number;
}

export type AtualizarItemDTO = Partial<Pick<DadosItem, "titulo" | "anoLancamento">>;

export type ResumoItemDTO = Pick<ItemAcervo, "id" | "titulo" | "statusDisponibilidade">;

export type ResumoSomenteLeitura = Readonly<ResumoItemDTO>;