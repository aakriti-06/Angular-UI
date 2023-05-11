import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserChatComponent } from './issuer/components/user-chat/user-chat.component';
import { UserContainerComponent } from './issuer/components/user-container/user-container.component';
import { UserDashboardComponent } from './issuer/components/user-dashboard/user-dashboard.component';
import { UserDocumentComponent } from './issuer/components/user-document/user-document.component';
import { ViewUploadedDocumentComponent } from './issuer/components/view-uploaded-document/view-uploaded-document.component';
import { UserUploadedDocumentComponent } from './user/components/user-uploaded-document/user-uploaded-document.component';



@NgModule({
  declarations: [
    UserChatComponent,
    UserContainerComponent,
    UserDashboardComponent,
    UserDocumentComponent,
    ViewUploadedDocumentComponent,
    UserUploadedDocumentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
