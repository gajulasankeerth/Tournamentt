import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ManageTournamentComponent } from './manage-tournament/manage-tournament.component';
import { FixtureSetupComponent} from './manage-tournament/fixture-setup/fixture-setup.component';
import { TeamSetupComponent } from './manage-tournament/team-setup/team-setup.component';
import { TournamentSetupComponent } from './manage-tournament/tournament-setup/tournament-setup.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { AddTournamentComponent } from './manage-tournament/add-tournament/add-tournament.component';
import { ViewTournamentComponent } from './manage-tournament/view-tournament/view-tournament.component';
const appRoutes : Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'tournamnetSetup',
    component:TournamentSetupComponent
  },
  {
    path:'teamSetup',
    component:TeamSetupComponent
  },
  {
    path:'fixtureSetup',
    component:FixtureSetupComponent
  },
  {
    path:'addTournament',
    component:AddTournamentComponent
  },
  {
    path:'viewTournament',
    component:ViewTournamentComponent
  },
  {
    path:'viewTournament/:name/:sDate/:eDate',
    component:ViewTournamentComponent
  },
  // {
  //   path:'viewTournament/:name',
  //   component:ViewTournamentComponent
  // }
]
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginPageComponent,
    TournamentSetupComponent,
    TeamSetupComponent,
    FixtureSetupComponent,
    ManageTournamentComponent,
    SearchFilterPipe,
    AddTournamentComponent,
    ViewTournamentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
