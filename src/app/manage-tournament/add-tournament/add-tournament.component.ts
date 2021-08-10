import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TournamentDataService } from 'src/app/services/tournament-data.service';
import {tournamentDataModel} from '../add-tournament/tournamentDataModel'

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {
  nameModel:string = ""
  eModel:string=""
  sModel:string=""
  listOfNames:Array<tournamentDataModel> = [];
  minDate = new Date(new Date().setDate(new Date().getDate()))
onSubmit() {
  let addTournament =new tournamentDataModel();
  addTournament.name=this.nameModel
  addTournament.startDate=this.sModel
  addTournament.endDate=this.eModel
  this.getdata();
  this.listOfNames.push(addTournament)
  sessionStorage.setItem("id",JSON.stringify(this.listOfNames))
  this.router.navigate(['/tournamnetSetup']);
}
getdata(){
  if(sessionStorage.getItem("id")!=null){
  this.listOfNames=JSON.parse(sessionStorage.getItem("id")+'')
  }
  else{
    sessionStorage.setItem("id","[]")
  }
}
  constructor(private router:Router) { }
  ngOnInit(): void {
  }

}




