import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from './service/userAuth/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'carding-and-builder';

  isLoggedIn!: Observable<boolean>; // {1}

  isAdmin = false;
  loggedIn = false;

  /**
   * App component
   * @constructor
   */
  constructor(private authService: UserAuthService) {}

  /**
   * Function for logging out.
   */
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    window.location.href = '/';
  }

  /**
   * Init for user authentication
   */
  async ngOnInit() {
    let user: any = localStorage.getItem('user');
    user = JSON.parse(user);
    this.isAdmin = user && user.isAdmin;
    let loggedIn: any = localStorage.getItem('loggedIn');
    loggedIn = JSON.parse(loggedIn);
    this.loggedIn = loggedIn;
  }
}
