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

  constructor(private userAuthService: UserAuthService) {}

  ngOnInit(): void {}

  handleEmailInput(event: any): void {
    this.email = event.target.value;
  }

  handlePasswordInput(event: any): void {
    this.password = event.target.value;
  }

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
