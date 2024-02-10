import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilConstructionComponent } from './civil-construction.component';

describe('CivilConstructionComponent', () => {
  let component: CivilConstructionComponent;
  let fixture: ComponentFixture<CivilConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CivilConstructionComponent]
    });
    fixture = TestBed.createComponent(CivilConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
