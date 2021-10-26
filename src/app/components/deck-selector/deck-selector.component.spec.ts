import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckSelectorComponent } from './deck-selector.component';

describe('MagicCardsComponent', () => {
  let component: DeckSelectorComponent;
  let fixture: ComponentFixture<DeckSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
