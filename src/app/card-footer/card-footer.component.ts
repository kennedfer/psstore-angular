import { Component, Input } from '@angular/core';
import { Game } from 'src/types/game-type';
import { defaultGame } from 'src/utils/defaults';

@Component({
  selector: 'card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css'],
})
export class CardFooterComponent {
  @Input() game: Game = defaultGame;
}
