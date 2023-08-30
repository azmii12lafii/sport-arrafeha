import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      city: ["",[Validators.required, Validators.minLength(3)]],
      country:["",[Validators.required, Validators.minLength(5)]],
      

    })
  }
  search(){
 
    localStorage.setItem("searchObj",JSON.stringify(this.searchForm.value));

  }


}
