import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokemonComponent } from './card-pokemon.component';

describe('CardPokemonComponent', () => {
  let component: CardPokemonComponent;
  let fixture: ComponentFixture<CardPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
