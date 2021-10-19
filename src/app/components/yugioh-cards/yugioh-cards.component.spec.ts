import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YugiohCardsComponent } from './yugioh-cards.component';

describe('YugiohCardsComponent', () => {
  let component: YugiohCardsComponent;
  let fixture: ComponentFixture<YugiohCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YugiohCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YugiohCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
