import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGroupContainerComponent } from './admin-group-container.component';

describe('AdminGroupContainerComponent', () => {
  let component: AdminGroupContainerComponent;
  let fixture: ComponentFixture<AdminGroupContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGroupContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGroupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
