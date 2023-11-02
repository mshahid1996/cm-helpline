import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintStatusOfficerComponent } from './complaint-status-officer.component';

describe('ComplaintStatusOfficerComponent', () => {
  let component: ComplaintStatusOfficerComponent;
  let fixture: ComponentFixture<ComplaintStatusOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintStatusOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintStatusOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
