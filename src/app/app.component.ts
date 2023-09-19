import { Component } from '@angular/core';
import { Game } from 'src/types/game-type';
import { GameDataService } from './game-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ps-store';
  games: Game[] = [];

  constructor(gameDataService: GameDataService) {
    this.games = gameDataService.getGames();
  }
}
