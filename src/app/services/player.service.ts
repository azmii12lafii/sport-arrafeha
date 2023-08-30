import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl: string="http://localhost:3000/players";
  constructor(private http:HttpClient) { }

  addPlayer(obj){
    return this.http.post<{msg:string}>(this.playerUrl,obj);
  }
  getPlayerById(id){
    // return this.http.get(this.playerUrl+"/"+id);
    return this.http.get<{player:any}>(`${this.playerUrl}/${id}`);
    
  }
  deletePlayer(id){
    return this.http.delete<{msg:string}>(`${this.playerUrl}/${id}`);

  }
  updatePlayer(obj){
    return this.http.put<{message:string}>(this.playerUrl,obj);
  }
  getAllPlayer(){
    return this.http.get<{players:any}>(this.playerUrl);
  }

searchPlayer(obj){
  return this.http.post<{player:any}>("http://localhost:3000/searchPLayer",obj);
}
}
