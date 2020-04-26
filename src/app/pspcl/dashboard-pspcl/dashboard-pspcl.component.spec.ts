import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPspclComponent } from './dashboard-pspcl.component';

describe('DashboardPspclComponent', () => {
  let component: DashboardPspclComponent;
  let fixture: ComponentFixture<DashboardPspclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPspclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPspclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
