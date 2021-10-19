import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/interface/yugioh/cards';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { YugiohCardsService } from 'src/app/service/yugioh/yugioh-cards.service';


@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html',
  styleUrls: ['./search-cards.component.css']
})
export class SearchCardsComponent implements OnInit {

  isLoading = false;
  cardsData !: Cards;
  cardName !: string;
  category !: number;

  constructor(private router: Router,
    private route : ActivatedRoute,
    private cardsService : YugiohCardsService) { this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }}

  async ngOnInit(){
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.cardName = params.card;
        this.category = params.game;
        console.log(this.cardName + this.category); // popular
      }
    );

    if(this.category == 4){
      console.log("yugioh");
      this.isLoading = true;
      await this.cardsService.searchCardsByName(this.cardName).then(
        async (response) => {
         this.cardsData = response;
        },
        (error) => {
          alert('error' + error.statusNext);
        }
      );
      this.isLoading = false;
    }
  }

}
