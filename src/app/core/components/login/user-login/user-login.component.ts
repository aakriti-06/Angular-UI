import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  todisplay = false;

  toggleData(){
    this.todisplay = !this.todisplay;
  }

  
  constructor(private router : Router){

  }

  loginuser(){
    this.router.navigate(['user'])
  }
}
