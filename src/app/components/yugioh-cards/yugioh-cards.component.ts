import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Cards } from 'src/app/interface/yugioh/cards';
import { YugiohCardsService } from "../../service/yugioh/yugioh-cards.service";
import { DeckType } from 'src/app/service/utils/deckTypes';
import { CardComponent } from '../cards/card-yugioh/card.component';

@Component({
  selector: 'app-yugioh-cards',
  templateUrl: './yugioh-cards.component.html',
  styleUrls: ['./yugioh-cards.component.css']
})
export class YugiohCardsComponent implements OnInit {

  isLoading = false;
  cardToSearch : string = "";
  cardsData !: Cards;
  currentPage !: number;
  

  constructor(
    private cardsService : YugiohCardsService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      }
    }

  async ngOnInit() {
    const page = this.route.snapshot.paramMap.get('pagenumber')!;
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.currentPage = parseInt(page) || 1;
        this.cardToSearch = params.card || '';
      }
    );
    
    this.isLoading = true;
    if(this.cardToSearch === ''){
     this.search(); 
    }
    else{
      this.searchByName();
    }
    this.isLoading = false;  
  }

  search = async () => {
    await this.cardsService.searchCards(this.currentPage).then(
      async (response) => {
       this.cardsData = response;
      },
      (error) => {
        alert('error' + error.statusNext);
      }
    );
  }

  searchByName = async () => {
    await this.cardsService.searchCardsByName(this.cardToSearch, this.currentPage).then(
      async (response) => {
       this.cardsData = response;
      },
      (error) => {
        alert('error' + error.statusNext);
      }
    );
  }

  move = (shift: number) => {
    this.router.navigate([`/yugioh/${this.currentPage + shift}`], {
      queryParams: { 
        card: this.cardToSearch,
      },
    });
  }

}
