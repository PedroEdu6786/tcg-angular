import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckBuilderService } from 'src/app/service/builder/deck-builder.service';
import { CardSearchService } from 'src/app/service/cardSearch/card-search.service';
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

  constructor(
    private builderService: DeckBuilderService,
    private searchService: CardSearchService,
    private route: ActivatedRoute
  ) {}

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

  handleAddToDeck() {
    if (!this.validCardInput()) return;
    this.cardDeck.push(this.selectedCard);
  }

  handleSelectedCard(id: string) {
    this.selectedCard = this.cardsData.data.find((card) => card.id === id)!;
  }

  handleInputChange(event: any) {
    this.search = event.target.value;
  }

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
