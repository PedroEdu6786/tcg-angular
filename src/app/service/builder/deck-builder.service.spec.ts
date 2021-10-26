import { TestBed } from '@angular/core/testing';

import { DeckBuilderService } from './deck-builder.service';

describe('DeckBuilderService', () => {
  let service: DeckBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
