import { TestBed } from '@angular/core/testing';

import { PokemonCardsService } from './pokemon-cards.service';

describe('PokemonCardsService', () => {
  let service: PokemonCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
