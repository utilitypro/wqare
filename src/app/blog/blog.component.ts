import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import firebase from 'firebase/app';

import "firebase/auth";
import 'firebase/firestore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: any = [];
  comments: any = [];
  themes: any = [];
  firstBlock: any = [];
  public db = firebase.firestore();

  constructor(public commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.getBlogs();
    this.getBlogdetails();
    this.getThemes();
    this.getComments();
    window.scrollTo(0, 0);
  }

  getBlogs() {
    this.blogs=[];
    this.db.collection("blogs").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.blogs.push(doc.data());
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  getBlogdetails() {
    this.commonService.getBlogsDetails(1).subscribe((res) => {
      this.firstBlock = res;
    });
  }

  countTheme(type){
    var count= 0;
    this.blogs.forEach((post) => {
      if(post.type == type){
        count++;
      }
    });
    return count;
  }

  getThemes(){
    this.themes=[];
    this.db.collection("themes").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.themes.push(doc.data());
      });
    }).catch((error)=>{
      console.log(error);
    });
  }

  countCommentByPost(postId){
    var count= 0;
    this.comments.forEach((post) => {
      if(post.id == postId){
        count++;
      }
    });
    return count;
  }

  getComments() {
    this.comments=[];
    this.db.collection("comments").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.comments.push(doc.data());
      });
    }).catch((error)=>{
      console.log(error);
    });
  }
}
