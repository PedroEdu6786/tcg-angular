import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicCardsComponent } from './magic-cards.component';

describe('MagicCardsComponent', () => {
  let component: MagicCardsComponent;
  let fixture: ComponentFixture<MagicCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
