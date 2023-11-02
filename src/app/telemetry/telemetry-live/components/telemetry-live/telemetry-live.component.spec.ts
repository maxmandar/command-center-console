import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryLiveComponent } from './telemetry-live.component';

describe('TelemetryLiveComponent', () => {
  let component: TelemetryLiveComponent;
  let fixture: ComponentFixture<TelemetryLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelemetryLiveComponent]
    });
    fixture = TestBed.createComponent(TelemetryLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
