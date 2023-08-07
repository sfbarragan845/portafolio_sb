import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationInfoComponent } from './presentation-info.component';

describe('PresentationInfoComponent', () => {
  let component: PresentationInfoComponent;
  let fixture: ComponentFixture<PresentationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationInfoComponent]
    });
    fixture = TestBed.createComponent(PresentationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
