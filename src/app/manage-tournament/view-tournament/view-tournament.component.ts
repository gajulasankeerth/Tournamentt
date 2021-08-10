import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tournamentDataModel } from '../add-tournament/tournamentDataModel';

@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.component.html',
  styleUrls: ['./view-tournament.component.css']
})
export class ViewTournamentComponent implements OnInit {
  tournamentdata3:Array<tournamentDataModel>=[]
  data:any
 name=" ";
 endd=""
 startd="";
  constructor(private router:ActivatedRoute,private routerback:Router) { }
  ngOnInit(): void {
    this.data={name: "", eDate: "",sDate:""}
    this.router.params.subscribe( (param)=>
    {
    this.data.name=param["name"];
    this.data.eDate=param["eDate"];
    this.data.sDate=param["sDate"];
    })
    
  }
  goback(){
    this.routerback.navigate(['/tournamnetSetup'])
  }
}
