import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl: string="http://localhost:3000/teams";
  constructor(private http:HttpClient) { }

  addTeam(obj){
    return this.http.post<{msg:string}>(this.teamUrl,obj);
  }
  getTeamById(id){
    // return this.http.get(this.teamUrl+"/"+id);
    return this.http.get<{team:any}>(`${this.teamUrl}/${id}`);
    
  }
  deleteTeam(id){
    return this.http.delete<{msg:string}>(`${this.teamUrl}/${id}`);

  }
  updateTeam(obj){
    return this.http.put<{message:string}>(this.teamUrl,obj);
  }
  getAllTeam(){
    return this.http.get<{teams:any}>(this.teamUrl);
  }


}
