import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card_Data } from 'src/app/interface/pokemon/pokemon-card';
import { Cards } from 'src/app/interface/pokemon/pokemon-cards';

@Injectable({
  providedIn: 'root',
})
export class PokemonCardsService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  /**
   * Search pokemon 3rd party API cards
   * @param {number} page - Page for pagination
   * @returns {Promise<Cards>}
   */
  searchCards = (page: number): Promise<Cards> => {
    let promise = new Promise<Cards>((resolve, reject) => {
      this.http
        .get('https://api.pokemontcg.io/v2/cards?pageSize=16&page=' + page)
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

  /**
   * Search specific pokemon card by id
   * @param {string} cardName - id of card to search
   * @returns {Promise<Card_Data>}
   */
  searchCard = (cardName: string): Promise<Card_Data> => {
    let promise = new Promise<Card_Data>((resolve, reject) => {
      this.http
        .get('https://api.pokemontcg.io/v2/cards/' + cardName)
        .toPromise()
        .then(
          (response) => {
            resolve(response as Card_Data);
          },
          (error) => {
            reject(error);
          }
        );
    });
    return promise;
  };

  /**
   * Search pokemon card by name
   * @param {number} page - Page for pagination
   * @param {string} name - Name of card to search
   * @returns {Promise<Cards>}
   */
  searchCardsByName = (name: string, page: number): Promise<Cards> => {
    console.log(name);

    let promise = new Promise<Cards>((resolve, reject) => {
      this.http
        .get(
          'https://api.pokemontcg.io/v2/cards?q=name:' +
            name +
            '&pageSize=16&page=' +
            page
        )
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
