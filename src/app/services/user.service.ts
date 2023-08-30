import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userUrl:string = "http://localhost:3000/users";
  constructor(private httpClient:HttpClient) { }

  login(obj){
    return this.httpClient.post<{result:any,msg:string}>(this.userUrl+"/login", obj)
  }

  signup(obj:any,img:File){
    let fData= new FormData();
    fData.append("img",img); 
    fData.append("email",obj.email); 
    fData.append("firstName",obj.firstName);
    fData.append("lastName",obj.lastName);
    fData.append("pwd",obj.pwd);
    fData.append("tel",obj.tel);
    fData.append("role",obj.role);

    return this.httpClient.post<{msg:string}>(this.userUrl+"/signup",fData);
  }

}
