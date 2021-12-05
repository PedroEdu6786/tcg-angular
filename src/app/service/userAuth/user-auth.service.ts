import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserData } from '../utils/userTypes';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  constructor(private http: HttpClient) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  login = (userData: any): Promise<IUserData> => {
    const URI = 'http://localhost:5000/api/users/login';

    const promise = new Promise<IUserData>((resolve, reject) => {
      this.http
        .post(URI, { ...userData })
        .toPromise()
        .then(
          (response) => {
            resolve(response as IUserData);
            this.loggedIn.asObservable();
          },
          (error) => {
            reject(error);
          }
        );
    });

    return promise;
  };

  register = (userData: any): Promise<IUserData> => {
    const URI = 'http://localhost:5000/api/users';

    const promise = new Promise<IUserData>((resolve, reject) => {
      this.http
        .post(URI, { ...userData })
        .toPromise()
        .then(
          (response) => {
            console.log(response);
            resolve(response as IUserData);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });

    return promise;
  };

  getUsers = (token: string): Promise<IUserData> => {
    const URI = 'http://localhost:5000/api/users';

    const promise = new Promise<IUserData>((resolve, reject) => {
      this.http
        .get(URI, { headers: { Authorization: `Bearer ${token}` } })
        .toPromise()
        .then(
          (response) => {
            console.log(response);
            resolve(response as IUserData);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });

    return promise;
  };

  updateUser = (id: string, token: string): Promise<IUserData> => {
    const URI = `http://localhost:5000/api/users/${id}`;

    const promise = new Promise<IUserData>((resolve, reject) => {
      this.http
        .put(
          URI,
          { isAdmin: true },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .toPromise()
        .then(
          (response) => {
            console.log(response);
            resolve(response as IUserData);
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        );
    });

    return promise;
  };
}
