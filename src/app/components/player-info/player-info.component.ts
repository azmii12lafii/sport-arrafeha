import { ActivatedRoute } from '@angular/router';
import { playersTab } from './../../data folder/data';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  id: any;
  y: any;
  playersTab: any;
 
   constructor(private activatedRoute: ActivatedRoute, private playerService:PlayerService) { }
 
   ngOnInit() {
     this.id = this.activatedRoute.snapshot.paramMap.get("id");
     this.playerService.getPlayerById(this.id).subscribe((data)=>{
       console.log("here object from backend", data);
       this.y=data.player;
     });
}}
