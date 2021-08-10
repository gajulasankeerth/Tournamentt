import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  userData:any
  public activeUser = new BehaviorSubject<string>('');
  cast = this.activeUser.asObservable();
  constructor(private router:Router) { }
  
  checkUserName(userName:string)//uname-->userName
  {
    for (var k in localStorage) 
    {
      if(k===userName)
      {
        return true
      }
    }
    return false
  }
  verifyPassword(password:string,userName:string)
  {
    this.userData =JSON.parse(localStorage.getItem(userName)+'')
    if(!this.checkUserName(userName))
    {
      alert("please Register!")
    }
    else
    {
    if (password===this.userData.password)
    {
      this.activeUser.next(userName);
      alert('Logged In')
      this.router.navigate(["/tournamnetSetup"])
      sessionStorage.setItem("activeUser",localStorage.getItem(userName)+'')
    }
    else
    {
      alert('Invalid Password')
    }  
  }
  }
  logoffUser(){
    this.activeUser.next('');
  }
  isActiveUser(){
    if(JSON.parse(sessionStorage.getItem('activeUser')+'')!=null)
    {
      this.activeUser.next(JSON.parse(sessionStorage.getItem('activeUser')+'').userName)
      return true
    }
    else return false;
  }
}