import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculeService {

  
  calculeUrl: string="http://localhost:3000/imcs";
  constructor(private http:HttpClient) { }

  calculeImc(obj){
    return this.http.post<{msg:string}>(this.calculeUrl,obj);
  }
 
}
