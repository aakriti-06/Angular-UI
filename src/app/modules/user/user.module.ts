import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserChatComponent } from './components/user-chat/user-chat.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserDocumentComponent } from './components/user-document/user-document.component';
import { ViewUploadedDocumentComponent } from './components/view-uploaded-document/view-uploaded-document.component';



@NgModule({
  declarations: [
    UserChatComponent,
    UserContainerComponent,
    UserDashboardComponent,
    UserDocumentComponent,
    ViewUploadedDocumentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
