import { Component, OnInit } from '@angular/core';
import { TournamentDataService } from 'src/app/services/tournament-data.service';
import {tournamentDataModel} from '../add-tournament/tournamentDataModel'
import tournamentData from '../tournament-setup/tournamentData.json'
@Component({
  selector: 'app-tournament-setup',
  templateUrl: './tournament-setup.component.html',
  styleUrls: ['./tournament-setup.component.css']
})
export class TournamentSetupComponent implements OnInit {
  tournamentDataSubscription:any
  tournamentData: Array<tournamentDataModel>=[] ;   
  searchFilter: any = '';
  filterData:any
  someData:any
  tournamentDataOffline=tournamentData
  constructor(private tournamentDataService:TournamentDataService) { 
    this.tournamentDataService.cast.subscribe(x => {
      this.tournamentDataSubscription = x;
    });
  }
  ngOnInit(): void {
    this.tournamentData=JSON.parse(sessionStorage.getItem("id")+'')
  }
  onDelete(Name:string){
    this.tournamentData=JSON.parse(sessionStorage.getItem("id")+'')
    for(let i=0;i< this.tournamentData.length;i++) if(Name==this.tournamentData[i].name) this.tournamentData.splice(i, 1);
    sessionStorage.setItem("id",JSON.stringify(this.tournamentData))
  }
  onDeleteOfflinedata(Name:string){
    for(let i=0;i< this.tournamentDataOffline.length;i++) if(Name==this.tournamentDataOffline[i].name) this.tournamentDataOffline.splice(i, 1);
  }
  
  }
  