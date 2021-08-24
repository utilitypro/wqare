import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonServiceService } from '../common-service.service';
import { ToastrService } from 'ngx-toastr';
import firebase from 'firebase/app';

import "firebase/auth";
import 'firebase/firestore';
import {query} from '@angular/animations';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  id;
  blogdetails: any = [];
  blogsForCount: any = [];
  blogs: any = [];
  themes: any = [];
  comments: any = [];
  postComments: any = [];
  name = '';
  email = '';
  usercomment = '';
  public db = firebase.firestore();
  size =0;

  constructor(
    private toastr: ToastrService,
    public commonService: CommonServiceService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.getBlogdetails();
    this.getBlogs();
    this.getComments();
    this.getThemes();
    window.scrollTo(0, 0);
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

  getBlogdetails() {
    this.commonService.getBlogsDetails(this.id).subscribe((res) => {
      this.blogdetails = res;
    });
  }

  getBlogs() {
    this.blogs=[];
    this.db.collection("blogs").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.blogs.push(doc.data());
        this.blogsForCount.push(doc.data());
      });
    }).catch((error)=>{
      console.log(error);
    });
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

  navigate(blog) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/blog-details?id=' + blog.id);
    });
  }

  comment() {
    if (this.name === '' || this.email === '' || this.usercomment === '') {
      this.toastr.error('', 'Please enter mandatory field');
    } else {
      let params = {
        id: this.comments.length + 1,
        name: this.name,
        email: this.email,
        comment: this.usercomment,
      };
      this.commonService.createComment(params).subscribe((res) => {
        this.toastr.success('', 'Comment successfully!');
        this.name = '';
        this.email = '';
        this.usercomment = '';
        this.getComments();
      });
    }
  }

  countTheme(type){
    var count= 0;
    this.blogsForCount.forEach((post) => {
      if(post.type == type){
        count++;
      }
    });
    return count;
  }

  countCommentByPost(postId){
    var count= 0;
    this.postComments= [];
    this.comments.forEach((post) => {
      if(post.id == postId){
        this.postComments.push(post);
        count++;
      }
    });
    return count;
  }

  nav(theme){
    this.router.navigateByUrl('/blog?name=' + theme);
  }

}
