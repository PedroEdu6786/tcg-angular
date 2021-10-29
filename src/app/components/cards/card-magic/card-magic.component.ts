import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-magic',
  templateUrl: './card-magic.component.html',
  styleUrls: ['./card-magic.component.css']
})
export class CardMagicComponent implements OnInit {

  
  @Input()
  card !: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
