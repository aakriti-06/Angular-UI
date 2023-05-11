import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AssignUserComponent } from './components/assign-user/assign-user.component';
import { AssignedUserListComponent } from './components/assigned-user-list/assigned-user-list.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { UserDocumentFlowComponent } from './components/user-document-flow/user-document-flow.component';
import { AdminGroupContainerComponent } from './components/admin-group-container/admin-group-container.component';
import { AdminGroupDashboardComponent } from './components/admin-group-dashboard/admin-group-dashboard.component';
import { ReviewDocumentComponent } from './components/review-document/review-document.component';
import { TemplatesComponent } from './components/templates/templates.component';



@NgModule({
  declarations: [
    AdminListComponent,
    AssignUserComponent,
    AssignedUserListComponent,
    CreateAdminComponent,
    UserDocumentFlowComponent,
    AdminGroupContainerComponent,
    AdminGroupDashboardComponent,
    ReviewDocumentComponent,
    TemplatesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminGroupModule { }
