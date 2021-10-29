import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicCardComponent } from './magic-card.component';

describe('MagicCardComponent', () => {
  let component: MagicCardComponent;
  let fixture: ComponentFixture<MagicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
