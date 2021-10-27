import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from 'src/app/interface/yugioh/cards';
import { DeckType, getApiURI } from '../utils/deckTypes';

@Injectable({
  providedIn: 'root',
})
export class DeckBuilderService {
  constructor(private http: HttpClient) {}

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
