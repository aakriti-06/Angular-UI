import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  displayadmin = false;

  dataadmin(){
    this.displayadmin = !this.displayadmin;
  }

}
