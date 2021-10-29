import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cards } from 'src/app/interface/yugioh/cards';
import { Card, Card_Data } from 'src/app/interface/yugioh/card';

@Injectable({
  providedIn: 'root',
})
export class YugiohCardsService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  searchCards = (page: number): Promise<Cards> => {
    let promise = new Promise<Cards>((resolve, reject) => {

      this.http
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=16&offset=' + (page - 1)*16)
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

  searchCard = (cardName : string): Promise<Card_Data> => {
    let promise = new Promise<Card_Data>((resolve, reject) => {

      this.http
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + cardName)
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
  
  searchCardsByName = (name: string, page : number): Promise<Cards> => {
    let promise = new Promise<Cards>((resolve, reject) => {
      
      this.http
      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=' + name + "&num=16&offset=" + (page - 1)*16)
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