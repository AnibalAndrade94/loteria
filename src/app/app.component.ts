import { Component } from '@angular/core';
import { CARDS } from './data/cards.data';
import { LoteriaCard } from './models/loteria-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly totalCards = CARDS.length;

  /** IDs que faltan por salir en la ronda actual */
  private pool: number[] = [];

  currentCard: LoteriaCard | null = null;
  drawnCount = 0;
  roundCompletedMessage: string | null = null;
  isRevealing = false;

  constructor() {
    this.resetPool();
  }

  private resetPool(excludeId?: number): void {
    this.pool = CARDS.map((c) => c.id).filter((id) => id !== excludeId);
    this.drawnCount = 0;
  }

  draw(): void {
    this.roundCompletedMessage = null;

    if (this.pool.length === 0) {
      // Se acabó el mazo: empezamos una nueva ronda evitando repetir
      // inmediatamente la última carta mostrada.
      this.resetPool(this.currentCard?.id);
      this.roundCompletedMessage = '¡Se acabó el mazo! Empezamos una nueva ronda.';
    }

    const randomIndex = Math.floor(Math.random() * this.pool.length);
    const nextId = this.pool.splice(randomIndex, 1)[0];
    this.currentCard = CARDS.find((c) => c.id === nextId) ?? null;
    this.drawnCount++;

    // pequeña animación de "volteo" cada vez que sale una carta nueva
    this.isRevealing = false;
    requestAnimationFrame(() => (this.isRevealing = true));
  }

  restart(): void {
    this.currentCard = null;
    this.roundCompletedMessage = null;
    this.resetPool();
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
