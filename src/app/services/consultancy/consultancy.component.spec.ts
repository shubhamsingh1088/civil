import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyComponent } from './consultancy.component';

describe('ConsultancyComponent', () => {
  let component: ConsultancyComponent;
  let fixture: ComponentFixture<ConsultancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConsultancyComponent]
    });
    fixture = TestBed.createComponent(ConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
