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

  /**
   * Register constructor
   * @constructor
   * @param {UserAuthService} userAuthService - auth service
   */
  constructor(private userAuthService: UserAuthService) {}

  ngOnInit(): void {}

  /**
   * handle name input data
   */
  handleNameInput(event: any): void {
    this.name = event.target.value;
  }

  /**
   * handle email input data
   */
  handleEmailInput(event: any): void {
    this.email = event.target.value;
  }

  /**
   * handle password input data
   */
  handlePasswordInput(event: any): void {
    this.password = event.target.value;
  }

  /**
   * email validation function
   * @param {string} email - email to validate
   */
  validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  /**
   * handle register to application by consuming the API
   */
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
