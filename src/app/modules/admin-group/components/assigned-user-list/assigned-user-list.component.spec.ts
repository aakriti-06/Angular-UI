import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedUserListComponent } from './assigned-user-list.component';

describe('AssignedUserListComponent', () => {
  let component: AssignedUserListComponent;
  let fixture: ComponentFixture<AssignedUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
