import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //define user object => 
 user:any ={};
msg="";
 loginForm: FormGroup;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.userService.login(this.user).subscribe((data)=>{
console.log("here response after login",data) ;
if (data.result) {
 sessionStorage.setItem("token",data.result);
  let decodedToken:any =this.decodeToken(data.result);
  console.log("decoded token",decodedToken);
  if (decodedToken.role=="admin") {
    this.router.navigate(["admin"]);
    
  } else {
    this.router.navigate([""]);

  }
  
} else {
  this.msg="please check email or password"
}
   });  }
   decodeToken(token: string) {
    return jwt_decode(token);
   }    
   

}
