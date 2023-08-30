import { Component, OnInit } from '@angular/core';
import { articles } from 'src/app/data folder/data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data = articles;
  constructor() { }

  ngOnInit() {
  }

}
