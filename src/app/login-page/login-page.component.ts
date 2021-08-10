import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationServiceService } from '../services/authentication-service.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  constructor(private authenticationService: AuthenticationServiceService,private router: Router) { }
  ngOnInit(): void {
    if(this.authenticationService.isActiveUser())
    this.router.navigate(["/tournamnetSetup"])
}
  //Authenticating Username and Password
  onSubmit(form: any) {
    if (!this.authenticationService.checkUserName(form.value.userName)) {
      alert("please Register")
    }
    else {
      this.authenticationService.verifyPassword(form.value.password, form.value.userName)
    }
  }
  
  
}