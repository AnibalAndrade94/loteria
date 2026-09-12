export interface LoteriaCard {
  /** Número de la carta, como en la lotería tradicional (1, 2, 3...) */
  id: number;
  /** Nombre de la carta, ej. "El Sol", "La Sirena" */
  name: string;
  /** Ruta de la imagen dentro de src/assets/cards/. Si el archivo no existe, se muestra un placeholder automáticamente. */
  image: string;
  /** La pregunta de Table Topics asociada a esta carta */
  question: string;
}
