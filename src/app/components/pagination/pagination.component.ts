import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  currentPageString!: string;

  @Input()
  move!: ((args: any) => void);

  currentPage !: number 
  prevButton = 'disabled';


  constructor() { }

  ngOnInit(): void {
    this.currentPage = parseInt(this.currentPageString);
    this.prevButton = this.currentPage > 1 ? '' : 'disabled';

  }

}
