import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  constructor(private http: HttpClient) {}

  /**
   * Save user card request to backend
   * @param {string} name - Name of card to search
   * @param {string} userId - id of user
   * @param {any} cards - array of cards selected
   * @param {string} token - token to authorize user
   */
  async postUserDeck(name: string, userId: string, cards: any, token: string) {
    const URI = 'http://localhost:5000/api/decks';

    const data = { name, userId, cards };

    const promise = new Promise<any>((resolve, reject) => {
      this.http
        .post(
          URI,
          { ...data },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .toPromise()
        .then(
          (response) => {
            resolve(response as any);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });

    return promise;
  }

  async getUserDecks(id: string, token: string) {
    const URI = 'http://localhost:5000/api/decks/mydecks';

    const promise = new Promise<any>((resolve, reject) => {
      this.http
        .post(
          URI,
          { userId: id },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .toPromise()
        .then(
          (response) => {
            console.log(response);
            resolve(response as any);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });

    return promise;
  }

  async deleteUserDeck(id: string, token: string) {
    const URI = `http://localhost:5000/api/decks/${id}`;

    const promise = new Promise<any>((resolve, reject) => {
      this.http
        .delete(URI, { headers: { Authorization: `Bearer ${token}` } })
        .toPromise()
        .then(
          (response) => {
            console.log(response);
            resolve(response as any);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });

    return promise;
  }

  async getDecks(token: string) {
    const URI = `http://localhost:5000/api/decks/admin`;

    const promise = new Promise<any>((resolve, reject) => {
      this.http
        .get(URI, { headers: { Authorization: `Bearer ${token}` } })
        .toPromise()
        .then(
          (response) => {
            console.log(response);
            resolve(response as any);
          },
          (error) => {
            console.error(error);
            reject(error);
          }
        );
    });

    return promise;
  }
}
