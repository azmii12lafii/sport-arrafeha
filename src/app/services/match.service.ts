import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
 matchUrl: string="http://localhost:3000/matches";
  constructor(private http:HttpClient) { }

  addMatch(obj){
    return this.http.post<{msg:string}>(this.matchUrl,obj);
  }
  getMatchById(id){
    // return this.http.get(this.matchUrl+"/"+id);
    return this.http.get<{match:any}>(`${this.matchUrl}/${id}`);
    
  }
  deleteMatch(id){
    return this.http.delete<{msg:string}>(`${this.matchUrl}/${id}`);

  }
  updateMatch(obj){
    return this.http.put<{message:string}>(this.matchUrl,obj);
  }
  getAllMatches(){
    return this.http.get<{matches:any}>(this.matchUrl);
  }


}
