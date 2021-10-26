import { TestBed } from '@angular/core/testing';

import { DeckSelectorService } from './deck-selector.service';

describe('DeckBuilderService', () => {
  let service: DeckSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
