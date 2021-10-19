import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCardSearchComponent } from './form-card-search.component';

describe('FormCardSearchComponent', () => {
  let component: FormCardSearchComponent;
  let fixture: ComponentFixture<FormCardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCardSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
