import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:Post[];

  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        id:1,
        author:"Supun",
        title:"Home Alone",
        content:"This is my first story",
        published:true
      },{
        id:2,
        author:"lakeesha",
        title:"Girlfriend",
        content:"This is my first story 2",
        published:true
      },{
        id:3,
        author:"Isuru",
        title:"Journey",
        content:"This is my first story 3",
        published:true
      }
    ]
  }

}
