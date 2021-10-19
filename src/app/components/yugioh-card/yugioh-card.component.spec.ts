import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YugiohCardComponent } from './yugioh-card.component';

describe('YugiohCardComponent', () => {
  let component: YugiohCardComponent;
  let fixture: ComponentFixture<YugiohCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YugiohCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YugiohCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
