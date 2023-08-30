import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CalculeService } from 'src/app/services/calcule.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-calcule-imc',
  templateUrl: './calcule-imc.component.html',
  styleUrls: ['./calcule-imc.component.css']
})
export class CalculeImcComponent implements OnInit {

  calcule: any={};
 calculeForm: FormGroup;
 x=""
 
  constructor(private calculeService:CalculeService, private router:Router) { }

  ngOnInit() {
  }
  calculeImc(){
    
    this.calculeService.calculeImc(this.calcule).subscribe((data)=>
    { this.x=data.msg;
      console.log(this.calcule);
    });
  }
  
}