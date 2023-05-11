import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGroupDashboardComponent } from './admin-group-dashboard.component';

describe('AdminGroupDashboardComponent', () => {
  let component: AdminGroupDashboardComponent;
  let fixture: ComponentFixture<AdminGroupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGroupDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGroupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
