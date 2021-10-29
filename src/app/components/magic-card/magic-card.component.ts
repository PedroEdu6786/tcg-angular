import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { Card_Data } from 'src/app/interface/magic/card';
import { MagicService } from 'src/app/service/magic/magic.service';

@Component({
  selector: 'app-magic-card',
  templateUrl: './magic-card.component.html',
  styleUrls: ['./magic-card.component.css']
})
export class MagicCardComponent implements OnInit {

  isLoading = false;
  cardData !: Card_Data;
  
  constructor(
    private cardsService : MagicService,
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
