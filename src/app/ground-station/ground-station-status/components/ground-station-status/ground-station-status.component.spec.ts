import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundStationStatusComponent } from './ground-station-status.component';

describe('GroundStationStatusComponent', () => {
  let component: GroundStationStatusComponent;
  let fixture: ComponentFixture<GroundStationStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroundStationStatusComponent]
    });
    fixture = TestBed.createComponent(GroundStationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
