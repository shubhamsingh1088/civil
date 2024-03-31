import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDesigningComponent } from './interior-designing.component';

describe('InteriorDesigningComponent', () => {
  let component: InteriorDesigningComponent;
  let fixture: ComponentFixture<InteriorDesigningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InteriorDesigningComponent]
    });
    fixture = TestBed.createComponent(InteriorDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
