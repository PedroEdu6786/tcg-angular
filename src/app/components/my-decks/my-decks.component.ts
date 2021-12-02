import { Component, OnInit } from '@angular/core';
import { DecksService } from 'src/app/service/decks/decks.service';

@Component({
  selector: 'app-my-decks',
  templateUrl: './my-decks.component.html',
  styleUrls: ['./my-decks.component.css'],
})
export class MyDecksComponent implements OnInit {
  public decks: any = [];

  constructor(private deckService: DecksService) {}

  ngOnInit(): void {
    this.handleDecks();
  }

  async deleteDeck() {
    
  }

  async handleDecks() {
    let userData: any = localStorage.getItem('user');
    userData = JSON.parse(userData);

    await this.deckService.getUserDecks(userData._id, userData.token).then(
      async (res) => {
        this.decks = res;
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
