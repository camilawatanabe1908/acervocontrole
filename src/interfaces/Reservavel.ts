export interface Reservavel {
  readonly reservadoPor: string | null;
  reservar(nomeUsuario: string): void;
  cancelarReserva(): void;
}