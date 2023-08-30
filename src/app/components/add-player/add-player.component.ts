import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
 player: any={};
 addPlayerForm: FormGroup;
 
 
  constructor(private playerService:PlayerService, private router:Router) { }

  ngOnInit() {
  }
  addPlayer(){
    this.playerService.addPlayer(this.player).subscribe((data)=>
    {
      console.log(this.player);
      this.router.navigate(["admin"]);
    });
  }

}
