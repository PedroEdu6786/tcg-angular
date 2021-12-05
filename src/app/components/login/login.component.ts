import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/service/userAuth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public email!: string;
  public password!: string;

  /**
   * DeckBuilder constructor
   * @constructor
   * @param {UserAuthService} userAuthService - auth service
   */
  constructor(private userAuthService: UserAuthService) {}

  ngOnInit(): void {}

  /**
   * Handle email input
   */
  handleEmailInput(event: any): void {
    this.email = event.target.value;
  }

  /**
   * Handle password input
   */
  handlePasswordInput(event: any): void {
    this.password = event.target.value;
  }

  /**
   * Handle authentication with backend auth service
   */
  async handleLogin() {
    const userData = { email: this.email, password: this.password };
    await this.userAuthService.login(userData).then(
      async (res) => {
        alert('Logged in');
        window.location.href = '/';
        localStorage.setItem('user', JSON.stringify(res));
        localStorage.setItem('loggedIn', 'true');
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
