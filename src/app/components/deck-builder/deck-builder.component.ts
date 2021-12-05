import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckBuilderService } from 'src/app/service/builder/deck-builder.service';
import { CardSearchService } from 'src/app/service/cardSearch/card-search.service';
import { DecksService } from 'src/app/service/decks/decks.service';
import { Card, Deck, DeckType } from 'src/app/service/utils/deckTypes';
import { deckFactory } from 'src/app/service/utils/factories/deckFactory';

//max number of cards in deck
const MAX_CARDS = 60;

//max num of cards repeated on each game
const REPEATED_NUM: any = {
  Pokemon: 3,
  Magic: 3,
  Yugioh: 4,
};

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css'],
})
export class DeckBuilderComponent implements OnInit {
  public cardType!: string;
  public cardsData!: Deck;
  public isLoading = false;
  public currPage = 1;
  public selectedCard!: Card;
  public cardDeck: Card[] = [];
  public search: string = '';
  public cardsRepeated: any = {};
  public deckName: string = '';

  /**
   * DeckBuilder constructor
   * @constructor
   * @param {DeckBuilderService} builderService - The builderService.
   * @param {CardSearchService} searchService - The card search service.
   * @param {ActivatedRoute} route - activated route for routing.
   * @param {DecksService} deckService - Deck services
   */
  constructor(
    private builderService: DeckBuilderService,
    private searchService: CardSearchService,
    private route: ActivatedRoute,
    private deckService: DecksService
  ) {}

  /**
   * On init get all cards from game to build deck
   */
  async ngOnInit() {
    let cardType = this.route.snapshot.paramMap.get('cardType')!;
    cardType = cardType.charAt(0).toUpperCase() + cardType.slice(1);
    this.cardType = cardType;

    this.isLoading = true;
    await this.builderService
      .getAllCards(this.currPage, DeckType[cardType as DeckType])
      .then(
        async (response) => {
          this.cardsData = deckFactory(
            response,
            DeckType[cardType as DeckType]
          );
        },
        (error) => {
          alert('error' + error.statusNext);
        }
      );

    this.isLoading = false;
  }

  /**
   * Validate if the user can input more cards
   * @returns {boolean}
   */
  validCardInput(): boolean {
    if (this.cardDeck.length >= MAX_CARDS) {
      alert('You have exceeded the maximum number of cards in a deck');
      return false;
    }

    const numRepeated = this.cardsRepeated[this.selectedCard.id];

    if (numRepeated >= REPEATED_NUM[this.cardType]) {
      alert('Card repeated too many times');
      return false;
    }

    if (numRepeated) {
      this.cardsRepeated[this.selectedCard.id] += 1;
    } else {
      this.cardsRepeated[this.selectedCard.id] = 1;
    }

    return true;
  }

  /**
   * Adds cards to deck
   */
  handleAddToDeck() {
    if (!this.validCardInput()) return;
    this.cardDeck.push(this.selectedCard);
  }

  /**
   * Saves selected card
   */
  handleSelectedCard(id: string) {
    this.selectedCard = this.cardsData.data.find((card) => card.id === id)!;
  }

  /**
   * Handles input for search
   */
  handleInputChange(event: any) {
    this.search = event.target.value;
  }

  /**
   * Handles input for deck name
   */
  handleDeckName(event: any) {
    this.deckName = event.target.value;
  }

  /**
   * Saves deck to backend
   */
  async saveDeck() {
    if (this.cardDeck.length <= 10) {
      alert('Not enough cards for deck');
      return;
    }
    if (this.deckName === '') {
      alert('Name your deck');
      return;
    }

    let userData: any = localStorage.getItem('user');
    userData = JSON.parse(userData);
    await this.deckService
      .postUserDeck(this.deckName, userData._id, this.cardDeck, userData.token)
      .then(async (response) => {
        console.log(response);
        alert('Deck posted');
      });
  }

  /**
   * Search cards by input using the respective API
   */
  async handleCardSearch() {
    await this.searchService
      .getCardsBySearch(DeckType[this.cardType as DeckType], this.search)
      .then(
        async (response) => {
          this.cardsData = deckFactory(
            response,
            DeckType[this.cardType as DeckType]
          );
        },
        (error) => {
          alert('error' + error.statusNext);
        }
      );
  }
}
