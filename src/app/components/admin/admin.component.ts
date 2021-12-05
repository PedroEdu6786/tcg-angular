import { Component, OnInit } from '@angular/core';
import { DecksService } from 'src/app/service/decks/decks.service';
import { UserAuthService } from 'src/app/service/userAuth/user-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  decksLink: any;
  users: any;

  constructor(
    private deckService: DecksService,
    private userData: UserAuthService
  ) {}

  async ngOnInit() {
    await this.getDecks();
    await this.getUsers();
  }

  async updateUser(userId: string) {
    let userData: any = localStorage.getItem('user');
    userData = JSON.parse(userData);

    await this.userData.updateUser(userId, userData.token).then(
      async (res) => {
        console.log(res);
        window.location.reload();
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  async getUsers() {
    let userData: any = localStorage.getItem('user');
    userData = JSON.parse(userData);

    await this.userData.getUsers(userData.token).then(
      async (res) => {
        console.log(res);
        this.users = res;
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  async getDecks() {
    let userData: any = localStorage.getItem('user');
    userData = JSON.parse(userData);
    await this.deckService.getDecks(userData.token).then(
      async (res) => {
        // console.log(res)
        this.decksLink = res.filePath;
      },
      (err) => {
        alert(err.error.message);
      }
    );

    // this.download()
  }

  download() {
    // console.log(this.decksLink)
    window.location.href = this.decksLink;
  }
}
