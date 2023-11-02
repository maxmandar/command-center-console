import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryLiveStatusComponent } from './telemetry-live-status.component';

describe('TelemetryLiveStatusComponent', () => {
  let component: TelemetryLiveStatusComponent;
  let fixture: ComponentFixture<TelemetryLiveStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelemetryLiveStatusComponent]
    });
    fixture = TestBed.createComponent(TelemetryLiveStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
