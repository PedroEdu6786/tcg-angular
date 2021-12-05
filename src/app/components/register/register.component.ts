import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/service/userAuth/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public name: string = '';
  public email: string = '';
  public password: string = '';

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

  validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  async handleRegister() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    if (this.name === '') {
      alert('Enter name');
      return;
    }
    if (this.password === '') {
      alert('Enter password');
      return;
    }

    if (!this.validateEmail(this.email)) {
      alert('Enter valid email');
      return;
    }
    await this.userAuthService.register(userData).then(
      async (res) => {
        console.log('Logged in');
        alert('Logged in');
        window.location.href = 'http://localhost:4200/';
        localStorage.setItem('user', JSON.stringify(res));
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
