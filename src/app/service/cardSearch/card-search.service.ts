import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from 'src/app/interface/yugioh/cards';
import { getApiSearchURI } from '../utils/deck.helpers';
import { DeckType } from '../utils/deckTypes';

@Injectable({
  providedIn: 'root',
})
export class CardSearchService {
  constructor(private http: HttpClient) {}

  /**
   * Get cards by search parameter
   * @param {DeckType} cardType - Game selected for cards (Pokemon, Yugioh, Magic)
   * @param {string} search - Name of card to search
   * @returns {Promise<Cards>}
   */
  getCardsBySearch = (cardType: DeckType, search: string): Promise<Cards> => {
    const URI = getApiSearchURI(cardType, search);

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
