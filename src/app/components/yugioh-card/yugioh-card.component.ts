import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card_Data } from 'src/app/interface/yugioh/card';
import { YugiohCardsService } from 'src/app/service/yugioh/yugioh-cards.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-yugioh-card',
  templateUrl: './yugioh-card.component.html',
  styleUrls: ['./yugioh-card.component.css']
})
export class YugiohCardComponent implements OnInit {

  isLoading = false;
  cardData !: Card_Data;
  public path: string = window.location.href;

  constructor(private cardsService : YugiohCardsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
    }
  }

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
