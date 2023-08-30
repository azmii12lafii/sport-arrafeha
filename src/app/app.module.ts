import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { JwPaginationModule } from 'jw-angular-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { ArticleComponent } from './components/article/article.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { SinglePlayerComponent } from './components/single-player/single-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayersComponent } from './components/edit-players/edit-players.component';
import { EditTeamsComponent } from './components/edit-teams/edit-teams.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchComponent } from './components/search/search.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { SingleStadiumComponent } from './components/single-stadium/single-stadium.component';
import { SearchTeamStadiumComponent } from './components/search-team-stadium/search-team-stadium.component';
import { StadePipe } from './components/stade.pipe';
import { SingleTeamComponent } from './components/single-team/single-team.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { EditStadiumComponent } from './components/edit-stadium/edit-stadium.component';
import { CalculeImcComponent } from './components/calcule-imc/calcule-imc.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    NewsInfoComponent,
    ArticleComponent,
    MatchesComponent,
    PlayersComponent,
    SinglePlayerComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    EditMatchComponent,
    EditPlayersComponent,
    EditTeamsComponent,
    PlayerInfoComponent,
    TeamInfoComponent,
    TeamsComponent,
    BannerComponent,
    AsterixPipe,
    ReversePipe,
    SearchComponent,
    StadiumTableComponent,
    AddStadiumComponent,
    StadiumInfoComponent,
    SingleStadiumComponent,
    SearchTeamStadiumComponent,
    StadePipe,
    SingleTeamComponent,
    SearchPlayerComponent,
    EditStadiumComponent,
    CalculeImcComponent,
    WeatherComponent,
    MyFilterPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
