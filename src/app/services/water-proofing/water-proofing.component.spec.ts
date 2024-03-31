import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterProofingComponent } from './water-proofing.component';

describe('WaterProofingComponent', () => {
  let component: WaterProofingComponent;
  let fixture: ComponentFixture<WaterProofingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WaterProofingComponent]
    });
    fixture = TestBed.createComponent(WaterProofingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
