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

  /**
   * Validates if there's a user logged in
   */
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  /**
   * Logs in a user
   * @param {userData} userData - object with email and password to authenticate user
   * @returns {Promise<IUserData>}
   */
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

  /**
   * Registers in a user
   * @param {userData} userData - object with email, name and password to authenticate user
   * @returns {Promise<IUserData>}
   */
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

  /**
   * Gets all users for admin users
   * @param {string} token - token to authorize admin users
   * @returns {Promise<IUserData>}
   */
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

  /**
   * Update a user
   * @param {string} id - id of user to update
   * @param {string} token - token to authorize user
   * @returns {Promise<IUserData>}
   */
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
