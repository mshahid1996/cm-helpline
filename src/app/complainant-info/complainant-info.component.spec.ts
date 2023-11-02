import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainantInfoComponent } from './complainant-info.component';

describe('ComplainantInfoComponent', () => {
  let component: ComplainantInfoComponent;
  let fixture: ComponentFixture<ComplainantInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainantInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
