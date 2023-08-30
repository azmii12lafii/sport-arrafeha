import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 signupForm:FormGroup;
ch="ali ben salah"
sh="azmi lafi";
errorMsg="";
path="";
imagePreview:any;
  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit() {
   this.path=this.router.url;
   this.signupForm = this.formBuilder.group({
      firstName: ["",[Validators.required, Validators.minLength(3)]],
      lastName:["",[Validators.required, Validators.minLength(5)]],
      email:["",[Validators.required, Validators.email]],
      pwd: ['', [
        Validators.required,        // Le champ est requis
        Validators.minLength(8),    // Longueur minimale de 8 caractères
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)  // Doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial
      ]],      
      tel:[""],
      img:[""]

    })
  }
  signup(){
    if (this.path=="/subscription") {
this.signupForm.value.role="user";
    } else {
      this.signupForm.value.role="admin";

    }
    this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe((data)=>{
      console.log("here data after signup", data.msg);
      if (data.msg=="0") {
        this.errorMsg="email exist";
      } else {
        this.router.navigate(["signin"]);
      }
    });
   
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
   // app.

}
