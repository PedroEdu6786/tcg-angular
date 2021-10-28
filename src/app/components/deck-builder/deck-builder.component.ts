import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckBuilderService } from 'src/app/service/builder/deck-builder.service';
import { Card, Deck, DeckType } from 'src/app/service/utils/deckTypes';
import { deckFactory } from 'src/app/service/utils/factories/deckFactory';

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

  constructor(
    private builderService: DeckBuilderService,
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

  handleAddToDeck() {
    this.cardDeck.push(this.selectedCard);
    console.log(this.cardDeck);
  }

  handleSelectedCard(id: string) {
    this.selectedCard = this.cardsData.data.find((card) => card.id === id)!;
  }
}