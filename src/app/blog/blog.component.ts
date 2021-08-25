import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import firebase from 'firebase/app';

import "firebase/auth";
import 'firebase/firestore';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  name;
  filter = null;
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
              public router: Router,
              private toastr: ToastrService,

  ) {
  }

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
      if (type == null || type == "undefined") {
        this.blogs=[];
        this.db.collection("blogs").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.blogs.push(doc.data());
          });
        }).catch((error) => {
          console.log(error);
        });
      }else{
        this.blogs=[];
        this.db.collection("blogs").where("type", "==", type).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.blogs.push(doc.data());
          });
        }).catch((error) => {
          console.log(error);
        });
        this.router.navigate(['/blog']);
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
    var search = [];
    if(text.query == ""){
      this.toastr.info("Veuillez saisir votre recherche !!")
    }else {
      this.blogsForCount.forEach((a) => {
        if (a.title.includes(text.query)) {
          search.push(a);
        }
      });
      if (search.length == 0) {
        this.toastr.info("Pas de resultat pour votre recherche !!")
      } else {
        this.blogs = [];
        this.blogs = search;
        this.router.navigate(['/blog']);
      }
    }

  }


  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }


  setTrue() {
    return true;
  }
}
