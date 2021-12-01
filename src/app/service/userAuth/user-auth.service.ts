import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserData } from '../utils/userTypes';

@Injectable({
  providedIn: 'root',
})

export class UserAuthService {
  constructor(private http: HttpClient) {}

  login = (userData: any): Promise<IUserData> => {

    const URI = 'http://localhost:5000/api/users/login'

    const promise = new Promise<IUserData>((resolve, reject) => {
      this.http
        .post(URI, {...userData})
        .toPromise()
        .then(
          (response) => {
            resolve(response as IUserData);
          },
          (error) => {
            reject(error);
          }
        );
    });

    return promise;
  };

  register = (userData: any): Promise<IUserData> => {

    const URI = 'http://localhost:5000/api/users'

    const promise = new Promise<IUserData>((resolve, reject) => {
      this.http
        .post(URI, {...userData})
        .toPromise()
        .then(
          (response) => {
            console.log(response)
            resolve(response as IUserData);
          },
          (error) => {
            console.log(error)
            reject(error);
          }
        );
    });

    return promise;
  };
}
