import { Injectable } from '@angular/core';
import { Game } from 'src/types/game-type';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  constructor() {}
  getGames(): Game[] {
    return [
      {
        coverImage: '../assets/covers/ac-cover.jpg',
        saleType: 'Full Game',
        gamePlatforms: ['PS4', 'PS5', 'PS3', 'PC'],
        price: 30,
        isExclusive: false,
      },
      {
        coverImage: '../assets/covers/bt-1.jpg',
        saleType: 'Full Game',
        gamePlatforms: ['PS4', 'PS5', 'PC'],
        price: 35,
        isExclusive: false,
      },
      {
        coverImage: '../assets/covers/bt-4.jpg',
        saleType: 'Full Game',
        gamePlatforms: ['PS4', 'PS5', 'PS3'],
        price: 20,
        isExclusive: true,
      },
      {
        coverImage: '../assets/covers/bt-5.jpg',
        saleType: 'Full Game',
        gamePlatforms: ['PS4', 'PS5'],
        price: 50,
        isExclusive: false,
      },
      {
        coverImage: '../assets/covers/bt-bad-company-2.jpg',
        saleType: 'Full Game',
        gamePlatforms: ['PS4', 'PS5', 'PS3'],
        price: 45,
        isExclusive: false,
      },
      {
        coverImage: '../assets/covers/bt-hardline.jpg',
        saleType: 'Full Game',
        gamePlatforms: ['PS4', 'PS5', 'PC'],
        price: 35,
        isExclusive: true,
      },
    ];
  }
}
