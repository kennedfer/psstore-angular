import { Component, Input } from '@angular/core';
import { Game } from 'src/types/game-type';
import { defaultGame } from 'src/utils/defaults';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  isSelected: boolean = false;
  @Input() game: Game = defaultGame;

  onMouseEnter(): void {
    this.isSelected = true;
  }
  onMouseExit(): void {
    this.isSelected = false;
  }
}
