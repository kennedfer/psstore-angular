import { Component, Input } from '@angular/core';
import { Game } from 'src/types/game-type';
import { defaultGame } from 'src/utils/defaults';

@Component({
  selector: 'cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css'],
})
export class CardsContainerComponent {
  @Input() games: Game[] = [defaultGame];
}
