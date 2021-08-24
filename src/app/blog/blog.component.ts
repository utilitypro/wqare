import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import firebase from 'firebase/app';

import "firebase/auth";
import 'firebase/firestore';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  name= null;
  blogs: any = [];
  searchFilter: any =[];
  blogsForCount: any = [];
  searchBlogs: any = [];
  comments: any = [];
  themes: any = [];
  firstBlock: any = [];
  keyword = 'name';
  public db = firebase.firestore();

  constructor(public commonService: CommonServiceService,
              private route: ActivatedRoute,
              public router: Router
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.queryParams['name'];
    this.getBlogs(this.name);
    this.getBlogdetails();
    this.getThemes();
    this.getComments();
    this.getBlogsForCount();
    window.scrollTo(0, 0);
  }

  getBlogsForCount() {
    this.blogs = [];
    this.searchBlogs = [];
    var query = this.db.collection("blogs");
      this.blogsForCount = [];
      query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.blogsForCount.push(doc.data());
          this.searchBlogs.push({
            id: doc.data().id,
            name: doc.data().title,
          })
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  getBlogs(type) {
    this.blogs=[];
    console.log(this.searchFilter);
    if(this.searchFilter.length == 0) {
      var query = this.db.collection("blogs");
      if (type == null || type == "undefined") {
        query.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.blogs.push(doc.data());
          });
        }).catch((error) => {
          console.log(error);
        });
      } else {
        query.where("type", "==", type).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.blogs.push(doc.data());
          });
        }).catch((error) => {
          console.log(error);
        });
        this.router.navigate(['/blog']);
      }
    }else{
      this.blogs = this.searchFilter;
    }
  }

  getBlogdetails() {
    this.commonService.getBlogsDetails(1).subscribe((res) => {
      this.firstBlock = res;
    });
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

  selectBlogsEvent(item) {
    let filter = this.blogsForCount.filter((a) => a.title === item.name);
    this.router.navigateByUrl('/blog-details?id=' + filter[0].id);
    // do something with selected item
  }

  searchBlog(text){
    /*this.blogs=[];
    this.blogsForCount.forEach((a) => {
      if(a.title.includes(text)|| a.description.includes(text)|| a.type.includes(text)){
        this.searchBlogs.push(a);
      }
    });
    this.router.navigateByUrl('/blog');*/

  }


  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }


}
