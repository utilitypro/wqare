import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  public patients: any = [
  ]

  messages: "";
  SERVER_URL: string = "http://localhost:8080/api/";
  message: BehaviorSubject<String>;
  constructor(public http: HttpClient) {
    this.message = new BehaviorSubject(this.messages)
  }


  nextmessage(data) {
    this.message.next(data);
  }

  getJSON(): Observable<any> {
    // return this.http.get("./assets/data.json");
    return this.patients;
  }

  update(id, status, list) {
    let filter = list.filter(a => a.patient_id === id);
    if (filter.length != 0) {
      filter['status'] = status;
    }
  }

  getSpeciality() {
    return this.http.get(this.SERVER_URL + 'specialityList');
  }

  createSpeciality(data) {
    return this.http.post(`${this.SERVER_URL + 'specialityList'}`, data)
  }

  updateSpeciality(data, id) {
    return this.http.put(`${this.SERVER_URL + 'specialityList'}/${id}`, data)
  }

  deleteSpeciality(id) {
    return this.http.delete(`${this.SERVER_URL + 'specialityList'}/${id}`)
  }

  getDoctors() {
    return this.http.get(this.SERVER_URL + 'doctors');
  }

  getAdvantages() {
    return this.http.get(this.SERVER_URL + 'advantages');
  }

  getDoctorDetails(id) {
    return this.http.get(`${this.SERVER_URL + 'doctors'}/${id}`)
  }

  getAppointments() {
    return this.http.get(this.SERVER_URL + 'appointments');
  }

  updateAppointment(data, id) {
    return this.http.put(`${this.SERVER_URL + 'appointments'}/${id}`, data)
  }

  getpatients() {
    return this.http.get(this.SERVER_URL + 'patients');
  }

  createBlogs(data) {
    return this.http.post(`${this.SERVER_URL + 'blogs'}`, data)
  }

  getBlogs() {
    return this.http.get(this.SERVER_URL + 'blogs');
  }

  getBlogsDetails(id) {
    return this.http.get(`${this.SERVER_URL + 'blogs'}/${id}`)
  }

  updateBlog(data, id) {
    return this.http.put(`${this.SERVER_URL + 'blogs'}/${id}`, data)
  }

  deleteBlog(id) {
    return this.http.delete(`${this.SERVER_URL + 'blogs'}/${id}`)
  }

  createDoctor(data) {
    return this.http.post(`${this.SERVER_URL + 'doctors'}`, data)
  }

  createPatient(data) {
    return this.http.post(`${this.SERVER_URL + 'patients'}`, data)
  }

  getPatientDetails(id) {
    return this.http.get(`${this.SERVER_URL + 'patients'}/${id}`)
  }

  getDocAvailability(shID, resource, start, end, step){
    var url = 'https://tsoumbou.pythonanywhere.com/api/calendar/available/';
    //scheduleID/594131/step/60/ressource/consulatation/start/2021-09-20/end/2021-09-21/
    url = url+'scheduleID/'+shID+'/step/'+step+'/ressource/'+resource+'/start/'+start+'/end/'+end+'/';
    console.log(url)
    return this.http.get(url)
  }

  getDocUpcomingDispo(shID, step, resource){
    var url = 'https://tsoumbou.pythonanywhere.com/api/calendar/nextAvailable/scheduleID/'+shID;
    url=url+'/step/'+step+'/resource/'+resource
    return this.http.get(url)
  }

  createAppointment(shID, step, resource,start, end, email, mobile, adress) {
  var url = 'https://tsoumbou.pythonanywhere.com/api/calendar/booking/scheduleID/'+shID;
  url=url+'/step/'+step+'/resource/'+resource+'/start/'+start+'/end/'+end+'/'+'/email/'+email+'/mobile/'+mobile+'/'+'/address/'+adress+'/';
  return this.http.get(url)
  }

  getFav() {
    return this.http.get(this.SERVER_URL + 'favourites');
  }

  createFav(params) {
    return this.http.post(this.SERVER_URL + 'favourites', params);
  }

  getComments() {
    return this.http.get(this.SERVER_URL + 'comments');
  }

  createComment(params) {
    return this.http.post(this.SERVER_URL + 'comments', params);
  }


  deleteFav(id) {
    return this.http.delete(`${this.SERVER_URL + 'favourites'}/${id}`)
  }

  getTransactions() {
    return this.http.get(this.SERVER_URL + 'transactions');
  }

  deleteTransaction(id) {
    return this.http.delete(`${this.SERVER_URL + 'transactions'}/${id}`)
  }

  getReviews() {
    return this.http.get(this.SERVER_URL + 'reviews');
  }

  deleteReview(id) {
    return this.http.delete(`${this.SERVER_URL + 'reviews'}/${id}`)
  }

}
