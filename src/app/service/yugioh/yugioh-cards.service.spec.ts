import { TestBed } from '@angular/core/testing';

import { YugiohCardsService } from './yugioh-cards.service';

describe('YugiohCardsService', () => {
  let service: YugiohCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YugiohCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
