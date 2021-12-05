import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from 'src/app/interface/yugioh/cards';
import { getApiURI } from '../utils/deck.helpers';
import { DeckType } from '../utils/deckTypes';

@Injectable({
  providedIn: 'root',
})
export class DeckBuilderService {
  constructor(private http: HttpClient) {}

  /**
   * Get all cards from 3rd Party APIS by pagination
   * @param {number} page - page number for pagination
   * @param {DeckType} cardType - Game selected for cards (Pokemon, Yugioh, Magic)
   * @returns Promise of Cards
   */
  getAllCards = (page: number, cardType: DeckType): Promise<Cards> => {
    const URI = getApiURI(cardType, page);

    const promise = new Promise<Cards>((resolve, reject) => {
      this.http
        .get(URI)
        .toPromise()
        .then(
          (response) => {
            resolve(response as Cards);
          },
          (error) => {
            reject(error);
          }
        );
    });

    return promise;
  };
}
