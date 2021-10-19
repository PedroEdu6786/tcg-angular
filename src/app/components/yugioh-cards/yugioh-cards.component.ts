import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Cards } from 'src/app/interface/yugioh/cards';
import { YugiohCardsService } from "../../service/yugioh/yugioh-cards.service"

@Component({
  selector: 'app-yugioh-cards',
  templateUrl: './yugioh-cards.component.html',
  styleUrls: ['./yugioh-cards.component.css']
})
export class YugiohCardsComponent implements OnInit {

  isLoading = false;
  cardsData !: Cards;
  currentPage = 0;
  prevButton = 'disabled';

  constructor(private cardsService : YugiohCardsService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      }
    }

  async ngOnInit() {
    const page = this.route.snapshot.paramMap.get('pagenumber')!;

    if(page === null){
      this.currentPage = 1;
    }
    else{
      try{
        this.currentPage = parseInt(page);
      }
      catch{
        this.currentPage = 1;
      }
    }

    if(this.currentPage > 1){
      this.prevButton = '';
    }
    
    this.isLoading = true;
    await this.cardsService.searchCards(this.currentPage).then(
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
