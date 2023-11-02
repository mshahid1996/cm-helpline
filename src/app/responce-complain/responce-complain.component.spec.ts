import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponceComplainComponent } from './responce-complain.component';

describe('ResponceComplainComponent', () => {
  let component: ResponceComplainComponent;
  let fixture: ComponentFixture<ResponceComplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponceComplainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponceComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
