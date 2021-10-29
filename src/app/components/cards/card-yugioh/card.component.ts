import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/interface/yugioh/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  card !: any;


  constructor() { }

  ngOnInit(): void {
    console.log(this.card.name);
    
  }

}
