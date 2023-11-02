import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryTableComponent } from './telemetry-table.component';

describe('TelemetryTableComponent', () => {
  let component: TelemetryTableComponent;
  let fixture: ComponentFixture<TelemetryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelemetryTableComponent]
    });
    fixture = TestBed.createComponent(TelemetryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
