import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationServiceService} from '../app/services/authentication-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  userName='';
  userdetails:any;
menuItems=[
  {
    activeStatus:true,
    colour:"red",
    itemName:"Tournament Setup",
    naviagteTo:"tournamnetSetup"
  },
  {
    activeStatus:false,
    colour:"blue",
    itemName:"Team Setup",
    naviagteTo:"teamSetup"
  },
  {
    activeStatus:false,
    colour:"green",
    itemName:"Fixture Setup",
    naviagteTo:"fixtureSetup"
  },
]
  constructor(private router:Router,private authenticate:AuthenticationServiceService) { 
    authenticate.cast.subscribe(header => {
      this.userName = header;
    });
  }
  ngOnInit(): void {
    if(this.authenticate.isActiveUser()){
   this.userdetails= JSON.parse(sessionStorage.getItem('activeUser')+'')
    }
   else 
   {
     this.router.navigate(["/login"])
   }
  }
  onLogout()
  {
    this.authenticate.logoffUser();
    sessionStorage.removeItem('activeUser')
  }
  activestats(str:string){
    for(let i=0;i<this.menuItems.length;i++)
    {
      if(this.menuItems[i].itemName===str) this.menuItems[i].activeStatus=true;
      else this.menuItems[i].activeStatus=false;
    }
  }
}
