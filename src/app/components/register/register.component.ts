import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/service/userAuth/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public name!: string;
  public email!: string;
  public password!: string;

  constructor(private userAuthService: UserAuthService) {}

  ngOnInit(): void {}

  handleNameInput(event: any): void {
    this.name = event.target.value;
  }
  handleEmailInput(event: any): void {
    this.email = event.target.value;
  }

  handlePasswordInput(event: any): void {
    this.password = event.target.value;
  }

  async handleRegister() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    await this.userAuthService.register(userData).then(
      async (res) => {
        console.log('Logged in');
        localStorage.setItem('user', JSON.stringify(res));
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
