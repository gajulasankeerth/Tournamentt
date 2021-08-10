import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentDataService {
  
  public addTournamentData = new BehaviorSubject<any>(sessionStorage);
  cast = this.addTournamentData.asObservable();
  getData()
  {
    
  }
  updateData()
  {
    this.addTournamentData.next(sessionStorage)
  }
  constructor() { }
}



