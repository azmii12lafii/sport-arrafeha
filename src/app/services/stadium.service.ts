import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  stadiumUrl: string="http://localhost:3000/stadiums";
  constructor(private http:HttpClient) { }

  addStadium(obj){
    return this.http.post<{msg:string}>(this.stadiumUrl,obj);
  }
  getStadiumById(id){
    // return this.http.get(this.teamUrl+"/"+id);
    return this.http.get<{stadium:any}>(`${this.stadiumUrl}/${id}`);
    
  }
  deleteStadium(id){
    return this.http.delete<{msg:string}>(`${this.stadiumUrl}/${id}`);

  }
  updateStadium(obj){
    return this.http.put<{message:string}>(this.stadiumUrl,obj);
  }
  getAllStadium(){
    return this.http.get<{stadiums:any}>(this.stadiumUrl);
  }


}
