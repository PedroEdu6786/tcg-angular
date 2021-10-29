import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Card_Data } from 'src/app/interface/pokemon/pokemon-card';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonCardsService } from 'src/app/service/pokemon/pokemon-cards.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  isLoading = false;
  cardData !: Card_Data;
  
  constructor(
    private cardsService : PokemonCardsService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  async ngOnInit() {
    const cardName = this.route.snapshot.paramMap.get('card-name')!;
    console.log(cardName);
    
    this.isLoading = true;
    await this.cardsService.searchCard(cardName).then(
      async (response) => {
       this.cardData = response;
      },
      (error) => {
        console.log(error)
      }
    );
    this.isLoading = false;
  }

  back(): void {
    this.location.back()
  }

}
