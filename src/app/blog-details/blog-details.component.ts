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
  keyword = 'name';
  searchBlogs: any = [];
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
    this.getBlogsForCount();
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
    this.blogdetails = JSON.parse(localStorage.getItem("blogs"))[parseInt(this.id)]
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

  getComments() {
    this.comments=[];
    this.db.collection("comments").where("status", "==", "up").get().then((querySnapshot) => {
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
      this.toastr.info('', 'Veuillez saisir les champs obligatoire');
    } else {
      if (!this.validateEmail(this.email)) {
        this.toastr.error('', 'Veuillez saisir un email valide !!');
      } else {
        var date = this.buildDate();
        var _id = this.comments.length + 1;
        this.db.collection("comments").doc('comment-' + _id).set({
          article: parseInt(this.id),
          id: _id,
          name: this.name,
          email: this.email,
          date: date,
          comment: this.usercomment,
          status: "en attente de validation"
        })
          .then(() => {
            console.log("Document successfully written!");
            this.toastr.success('Merci pour votre commentaire !! Il est en approbation');
            this.name = '';
            this.email = '';
            this.usercomment = '';
            this.getComments();
            console.log(this.comments)
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
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
      if(post.article == postId){
        this.postComments.push(post);
        count++;
      }
    });
    return count;
  }

  nav(theme){
    this.router.navigateByUrl('/blog?name=' + theme);
  }

  selectBlogsEvent(item) {
    let filter = this.blogsForCount.filter((a) => a.title === item.name);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/blog-details?id=' + filter[0].id);
    });
  }



  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

   validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  buildDate(){
    var date = new Date();
    var month = this.pad2(date.getMonth()+1);
    var day = this.pad2(date.getDate());
    var year= date.getFullYear();
    var hour = this.pad2(date.getHours());
    var min = this.pad2(date.getMinutes());

    return  day+"-"+month+"-"+year +" " + hour+":" + min;
  }

}
