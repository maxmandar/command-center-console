import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelemetryHistoryComponent } from './telemetry-history.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { TelemetryHowLongAgoPipe } from 'src/app/telemetry/telemetry-how-long-ago/pipes/telemetry-how-long-ago.pipe';

fdescribe('TelemetryHistoryComponent', () => {
  let component: TelemetryHistoryComponent;
  let fixture: ComponentFixture<TelemetryHistoryComponent>;

  const mockData = [
    {
      "id": 1,
      "rocket_code": "rocket1",
      "rocket_name": "Falcon",
      "stage_code": "stage1",
      "stage_name": "Booster",
      "engine_code": "engine1",
      "engine_name": "Merlin A",
      "speed": 750.5,
      "altitude": 30000.0,
      "thrust": 9.493,
      "isp": 12.156,
      "temperature": 25.7,
      "timestamp": "2023-10-30T10:00:00Z",
      "created_at": "2023-10-30T10:00:00Z",
      "updated_at": "2023-10-30T10:00:00Z"
    }
    // ... more mock data if needed
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelemetryHistoryComponent, TelemetryHowLongAgoPipe],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        AngularMaterialModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: {} }
      ]
    });

    fixture = TestBed.createComponent(TelemetryHistoryComponent);
    component = fixture.componentInstance;
    component.dataSource.data = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should return green background for thrust value more than 10', () => {
  const bgColor = component.getBackgroundColorForThrust(11);
  expect(bgColor).toEqual('bg-green-600');
});

it('should return default background for thrust value 10 or less', () => {
  const bgColor = component.getBackgroundColorForThrust(10);
  expect(bgColor).toEqual('default-bg');
});

  
});
