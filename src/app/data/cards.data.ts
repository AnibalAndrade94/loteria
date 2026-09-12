import { LoteriaCard } from '../models/loteria-card.model';

/**
 * Baraja de la lotería para Table Topics.
 *
 * Las preguntas de abajo son EJEMPLOS que combinan con el tema de cada
 * carta. Cámbialas por la pregunta real que escribiste en tu carta física
 * editando el campo "question" de cada objeto.
 */
export const CARDS: LoteriaCard[] = [
  { id: 1, name: 'El Boxeador', image: 'assets/cards/01-el-boxeador.jpg', question: 'Canelo sube al ring aunque a veces pierda. Cuéntanos de una vez que "subiste al ring" con miedo y aun así lo hiciste.' },
  { id: 2, name: 'La Diablura', image: 'assets/cards/02-la-diablura.jpg', question: '¿Para ti que es la picardía mexicana?¿Que tan pícaro eres?' },
  { id: 3, name: 'La Aguilar', image: 'assets/cards/03-la-aguilar.jpg', question: 'Imagina que eres la asesora de la familia Aguilar ¿que le recomendarías a esta familia para ser del agrado de público?' },
  { id: 6, name: 'La Sirena', image: 'assets/cards/06-la-sirena.jpg', question: 'Juanga hacía llorar y bailar al mismo público. Para ti, ¿qué hace que la gente SIENTA lo que dices y no solo lo oiga?' },
  { id: 9, name: 'Él del Barril', image: 'assets/cards/09-el-del-barril.jpg', question: 'cachas a Chespirito de amorío con Doña Florinda¿ que le aconsejarías?' },
  { id: 12, name: 'El Valiente', image: 'assets/cards/12-el-valiente.jpg', question: '¿Que Cualidad de Alfredo Adame te serviría para resolver problemas?' },
  { id: 27, name: 'El Corazón', image: 'assets/cards/27-el-corazon.jpg', question: '¿Qué canción o artista describe mejor lo que sientes en esta etapa de tu vida?' },
  { id: 33, name: 'La Escalera Eléctrica', image: 'assets/cards/33-la-escalera-electrica.jpg', question: 'si fueras secretario de turismo de Tlaxcala, ¿que harías para que fuera más visitado?' },
  { id: 37, name: 'El Dueño del Mundo', image: 'assets/cards/37-el-dueno-del-mundo.jpg', question: 'Slim empezó vendiendo cosas de niño. ¿Cuál es esa idea de negocio que traes en la cabeza y no te animas a arrancar? Convéncenos de que jala.' },
  { id: 53, name: 'El Cotorreo', image: 'assets/cards/53-el-cotorreo.jpg', question: ' ¿Que tan chismoso eres? ¿Te ha ayudado alguna vez el chisme?' },
];
