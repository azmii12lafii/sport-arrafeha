import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
searchForm:FormGroup;
temp:any;
pressure:any;
humidity:any;
windSpeed:any;
icon:any
  constructor(private formBuilder:FormBuilder, private weatherService:WeatherService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
       city: ["",[Validators.required, Validators.minLength(3)]],
       
 
     })
   }
   search(){
   console.log("searchform",this.searchForm.value);
     this.weatherService.search(this.searchForm.value).subscribe((data)=>{
       console.log("here response from BE", data.result);
       this.temp=data.result.temp-273.15;
       this.pressure=data.result.pressure;
       this.humidity=data.result.humidity;
       this.windSpeed=data.result.windSpeed;
       this.icon=data.result.icon;

       const iconUrl = `http://openweathermap.org/img/w/${this.icon}.png`;

      // Mettez à jour la source de l'image dans le HTML
      const iconImage = document.getElementById("weatherIcon") as HTMLImageElement;
      iconImage.src = iconUrl;
       }
     );
    
   }

}
