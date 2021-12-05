import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { SearchCardModel } from 'src/app/class/search-card-model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-form-card-search',
  templateUrl: './form-card-search.component.html',
  styleUrls: ['./form-card-search.component.css'],
})
export class FormCardSearchComponent implements OnInit {
  /**
   * FormCardSearch constructor
   * @constructor
   * @param {FormBuilder} fb - Formbuilder for search component form.
   * @param {Router} route - activated route for routing.
   */
  constructor(private fb: FormBuilder, private router: Router) {}

  model = new SearchCardModel('', '');
  buttonClass = 'disabled';

  /**
   * Use card to search a group of cards
   */
  cardToSearcgGroup = this.fb.group({
    cardToSearch: ['', Validators.required],
    categoryToSearch: [''],
  });

  /**
   * ngOnInit to initialize card group
   */
  ngOnInit(): void {
    this.cardToSearcgGroup.patchValue({
      categoryToSearch: '',
    });
  }

  /**
   * Search a card function
   */
  searchCard(): void {
    this.router.navigate(['/search/'], {
      queryParams: {
        card: this.cardToSearcgGroup.get('cardToSearch')?.value,
        game: this.cardToSearcgGroup.get('categoryToSearch')?.value,
      },
    });
  }

  /**
   * Enable search when there's a valid input
   */
  changeState(): void {
    this.buttonClass = 'enable';
  }
}
