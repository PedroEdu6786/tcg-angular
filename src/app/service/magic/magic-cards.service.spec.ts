import { TestBed } from '@angular/core/testing';

import { MagicCardsService } from './magic-cards.service';

describe('MagicCardsService', () => {
  let service: MagicCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
