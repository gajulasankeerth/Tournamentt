import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixture-setup',
  templateUrl: './fixture-setup.component.html',
  styleUrls: ['./fixture-setup.component.css']
})
export class FixtureSetupComponent implements OnInit {
  onSubmit( loginform:any)
  {
    console.log(loginform)
  }
  answer=" ";

  constructor() { }

  ngOnInit(): void {
  }

}
