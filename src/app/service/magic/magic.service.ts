import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card_Data } from 'src/app/interface/magic/card';
import { Cards } from 'src/app/interface/magic/cards';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  searchCards = (page: number): Promise<Cards> => {
    let promise = new Promise<Cards>((resolve, reject) => {

      this.http
        .get('https://api.magicthegathering.io/v1/cards?pageSize=16&page=' + page )
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

  searchCard = (cardID : string): Promise<Card_Data> => {
    let promise = new Promise<Card_Data>((resolve, reject) => {

      this.http
        .get('https://api.magicthegathering.io/v1/cards/' + cardID)
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
      .get('https://api.magicthegathering.io/v1/cards/?name=' + name + "&pageSize=16&page=" + page)
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
