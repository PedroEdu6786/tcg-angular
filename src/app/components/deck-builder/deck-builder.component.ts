import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cards } from 'src/app/interface/yugioh/cards';
import { DeckBuilderService } from 'src/app/service/builder/deck-builder.service';
import { DeckType } from 'src/app/service/utils/deckTypes';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css'],
})
export class DeckBuilderComponent implements OnInit {
  public cardType!: string;
  public cardsData!: Cards;

  constructor(
    private builderService: DeckBuilderService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    let cardType = this.route.snapshot.paramMap.get('cardType')!;
    cardType = cardType.charAt(0).toUpperCase() + cardType.slice(1);
    this.cardType = cardType

    await this.builderService.getAllCards(1, DeckType[cardType as DeckType]).then(
      async (response) => {
        this.cardsData = response;
      },
      (error) => {
        alert('error' + error.statusNext);
      }
    );

    console.log(this.cardsData);
  }
}
