import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryLiveChartComponent } from './telemetry-live-chart.component';

describe('TelemetryLiveChartComponent', () => {
  let component: TelemetryLiveChartComponent;
  let fixture: ComponentFixture<TelemetryLiveChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelemetryLiveChartComponent]
    });
    fixture = TestBed.createComponent(TelemetryLiveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
