import { Component, OnInit } from '@angular/core';
import { DecksService } from 'src/app/service/decks/decks.service';

@Component({
  selector: 'app-my-decks',
  templateUrl: './my-decks.component.html',
  styleUrls: ['./my-decks.component.css'],
})
export class MyDecksComponent implements OnInit {
  public decks: any = [];

  /**
   * My Decks constructor
   * @constructor
   * @param {DecksService} deckService - service to fetch deck data
   */
  constructor(private deckService: DecksService) {}

  ngOnInit(): void {
    this.handleDecks();
  }

  /**
   * Delete deck from users decks
   * @param {string} id - deck id
   */
  async deleteDeck(event: any) {
    let userData: any = localStorage.getItem('user');
    userData = JSON.parse(userData);
    await this.deckService.deleteUserDeck(event.target.id, userData.token).then(
      async (res) => {
        alert('Deleted');
        window.location.href = '/deckselector';
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  /**
   * Get all logged in users decks
   */
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
