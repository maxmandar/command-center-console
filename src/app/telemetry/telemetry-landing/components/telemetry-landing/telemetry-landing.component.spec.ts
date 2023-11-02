import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryLandingComponent } from './telemetry-landing.component';

describe('TelemetryLandingComponent', () => {
  let component: TelemetryLandingComponent;
  let fixture: ComponentFixture<TelemetryLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelemetryLandingComponent]
    });
    fixture = TestBed.createComponent(TelemetryLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
