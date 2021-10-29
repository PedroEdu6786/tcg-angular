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
  constructor(private fb: FormBuilder, private router: Router) {}

  model = new SearchCardModel('', '');
  buttonClass = "disabled";

  cardToSearcgGroup = this.fb.group({
    cardToSearch: ['', Validators.required],
    categoryToSearch: [''],
  });

  ngOnInit(): void {
    this.cardToSearcgGroup.patchValue({
      categoryToSearch: '',
    });
  }

  searchCard(): void {
    this.router.navigate(['/search/'], {
      queryParams: { 
        card: this.cardToSearcgGroup.get('cardToSearch')?.value,
        game: this.cardToSearcgGroup.get('categoryToSearch')?.value
      },
    });
  }

  changeState() : void {
    this.buttonClass = "enable";
  }
}
