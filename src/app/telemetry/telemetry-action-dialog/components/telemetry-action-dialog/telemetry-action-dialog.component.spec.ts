import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryActionDialogComponent } from './telemetry-action-dialog.component';

describe('TelemetryActionDialogComponent', () => {
  let component: TelemetryActionDialogComponent;
  let fixture: ComponentFixture<TelemetryActionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelemetryActionDialogComponent]
    });
    fixture = TestBed.createComponent(TelemetryActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
