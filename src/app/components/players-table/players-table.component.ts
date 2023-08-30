import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { playersTab } from 'src/app/data folder/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTab: any ;
  constructor(private router:Router, private playerService:PlayerService) { }

  ngOnInit() {
    this.reloadData();
  }
  displayPlayer(id:number){
  this.router.navigate([`playerinfo/${id}`]);
}
updatePlayer(id:number){
localStorage.setItem("playerId",JSON.stringify(id));
this.router.navigate(["editplayer"]);

}
deletePlayer(id:number){
  this.playerService.deletePlayer(id).subscribe((response)=>{
    this.reloadData(); 
   });

}
reloadData(){
  this.playerService.getAllPlayer().subscribe(
    (response)=>{
      this.playersTab=response.players;
    });
}
}
