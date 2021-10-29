import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMagicComponent } from './card-magic.component';

describe('CardMagicComponent', () => {
  let component: CardMagicComponent;
  let fixture: ComponentFixture<CardMagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
