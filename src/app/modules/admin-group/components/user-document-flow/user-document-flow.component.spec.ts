import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDocumentFlowComponent } from './user-document-flow.component';

describe('UserDocumentFlowComponent', () => {
  let component: UserDocumentFlowComponent;
  let fixture: ComponentFixture<UserDocumentFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDocumentFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDocumentFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
