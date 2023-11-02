import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketSearchComponent } from './rocket-search.component';

describe('RocketSearchComponent', () => {
  let component: RocketSearchComponent;
  let fixture: ComponentFixture<RocketSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RocketSearchComponent]
    });
    fixture = TestBed.createComponent(RocketSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
