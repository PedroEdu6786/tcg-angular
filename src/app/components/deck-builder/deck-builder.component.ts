import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css'],
})
export class DeckBuilderComponent implements OnInit {

  public cardType!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const cardType = this.route.snapshot.paramMap.get('cardType');
    this.cardType = String(cardType);
  }
}
