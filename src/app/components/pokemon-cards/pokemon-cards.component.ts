import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit {

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
    this.isLoading = true;
  }

}
