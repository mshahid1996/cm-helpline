import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintUserStComponent } from './complaint-user-st.component';

describe('ComplaintUserStComponent', () => {
  let component: ComplaintUserStComponent;
  let fixture: ComponentFixture<ComplaintUserStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintUserStComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintUserStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
