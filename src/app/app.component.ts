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

  isAdmin = true;
  loggedIn = true;

  constructor(private authService: UserAuthService) {}

  async ngOnInit() {

  }
}
