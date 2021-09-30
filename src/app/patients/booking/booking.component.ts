import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonServiceService } from './../../common-service.service';
import * as moment from 'moment';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  doctorId;
  startNextEvent;
  action;
  doctorDetails;
  userDetails;
  week : any = [];
  startWeek: any = "";
  endWeek: any = "";
  availability : any = [];
  public daterange: any = {};
  dispo: boolean;


  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };

  public selectedDate(value: any, datepicker?: any) {
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

  constructor(
    private route: ActivatedRoute,
    public commonService: CommonServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    //this.doctorId = this.route.snapshot.queryParams['id'];
    this.action = this.route.snapshot.queryParams['action'];
    if(!this.action){
      this.getDoctorsDetails();
      this.patientDetails();
      this.getCurrentWeek();
      this.getAvailability(this.doctorDetails.schID, this.doctorDetails.step, this.startWeek.format('YYYY-MM-DD'), this.endWeek.format('YYYY-MM-DD'), this.doctorDetails.resource);
    }else{
      var start;
      var end;
      if(this.action == 'next'){
        start = moment(localStorage.getItem('endWeek'), 'YYYY-MM-DD').add(1, 'days');
        end = moment(localStorage.getItem('endWeek'), 'YYYY-MM-DD').add(7, 'days')
        this.getWeek1(start, end);

      }
      else if(this.action == 'prev'){
        start = moment(localStorage.getItem('startWeek'), 'YYYY-MM-DD').add(-7, 'days');
        end = moment(localStorage.getItem('startWeek'), 'YYYY-MM-DD').add(-1, 'days');
        this.getWeek1(start, end);

      }else{
        var _date = moment(this.action, 'YYYY-MM-DD');
        start = moment().day("Monday").week(_date.week());
        end =  moment().day("Monday").week(_date.week()).add(6, 'days');
        this.getWeek2(start, end);
      }

      this.getDoctorsDetails();
      this.patientDetails();
      this.getAvailability(this.doctorDetails.schID, this.doctorDetails.step, start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'), this.doctorDetails.resource);

    }
    localStorage.setItem('startWeek', this.startWeek.format('YYYY-MM-DD'));
    localStorage.setItem('endWeek', this.endWeek.format('YYYY-MM-DD'));
    this.getNextDispo(this.doctorDetails.schID, this.doctorDetails.step, this.doctorDetails.resource);
  }

  getDoctorsDetails() {
    this.commonService.message.subscribe((res) => {
      if(res != undefined){
      // @ts-ignore
      var _res= JSON.parse(res);
      if (_res['page'] == 'booking') {
        // @ts-ignore
        var data = _res;
        if (data) {
          console.log(data);
          this.doctorDetails = data;
          // @ts-ignore
          localStorage.setItem('bookdata', res);
        }
      }else if(localStorage.getItem("bookdata")){
        this.doctorDetails = JSON.parse(localStorage.getItem("bookdata"));
      }
      }else if (res == undefined && localStorage.getItem("bookdata")) {
          this.doctorDetails = JSON.parse(localStorage.getItem("bookdata"));
        }
    });
    //this.doctorDetails = JSON.parse(localStorage.getItem("docs"))[parseInt(doctorId)]
  }

  patientDetails() {
    let userId = localStorage.getItem('id');
    this.commonService.getPatientDetails(Number(userId)).subscribe((res) => {
      this.userDetails = res;
    });
  }

  getCurrentWeek(){
    let weekDay = moment().weekday();
    let startWeek = moment().subtract(weekDay, 'days');
    this.startWeek = moment().subtract(weekDay-1, 'days');
    this.endWeek = moment().add(7-weekDay, 'days');
    var  months = ["Jan", "Fev", "Mar", "Avr", "May", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];
    for (let i = 1; i < 8; i++) {
      var day = startWeek.add(1, 'days').toDate();
      this.week.push({'day': day.getUTCDate(), 'month' : months[day.getUTCMonth()], 'year' : day.getFullYear()});
    }
  }

  getWeek1(start, end){
    this.week=[];
    let startWeek = moment(start, 'YYYY-MM-DD');
    this.startWeek = moment(start, 'YYYY-MM-DD');
    this.endWeek = moment(end, 'YYYY-MM-DD');
    var  months = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];
    for (let i = 0; i < 7; i++) {
      var day = startWeek.add(1, 'days').toDate();
      console.log(day);
      this.week.push({'day': day.getUTCDate(), 'month' : months[day.getUTCMonth()], 'year' : day.getFullYear()});
    }
  }

  getWeek2(start, end){
    this.week=[];
    let startWeek = moment(start, 'YYYY-MM-DD');
    this.startWeek = moment(start, 'YYYY-MM-DD');
    this.endWeek = moment(end, 'YYYY-MM-DD');
    var  months = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];
    this.week.push({'day': startWeek.toDate().getUTCDate(), 'month' : months[startWeek.toDate().getUTCMonth()], 'year' : startWeek.toDate().getFullYear()});
    for (let i = 1; i < 7; i++) {
      var day = startWeek.add(1, 'days').toDate();
      console.log(day);
      this.week.push({'day': day.getUTCDate(), 'month' : months[day.getUTCMonth()], 'year' : day.getFullYear()});
    }
  }

  getAvailability(schID, step, start, end, resource){
    return this.commonService.getDocAvailability(schID, resource, start, end, step ).subscribe((res) => {
      this.availability = res;
      this.dispo = res['Lun'].length + res['Mar'].length + res['Mer'].length + res['Jeu'].length + res['Ven'].length + res['Sam'].length + res['Dim'].length == 0;
      console.log(this.dispo);
      console.log(res);
    });
  }

  getNextDispo(schID, step, resource){
    return this.commonService.getDocUpcomingDispo(schID, step, resource).subscribe((res) => {
      this.startNextEvent = res['start'].split('T')[0];
    });
  }

  book(date, time) {
    //this.router.navigateByUrl('/patients/booking?id=' + this.doctorId+'&action=');
    var successVar = {'page': 'checkout', 'doc': this.doctorDetails, 'date': date, 'time': time};
    this.commonService.nextmessage(JSON.stringify(successVar));
    this.router.navigateByUrl('/patients/checkout');
  }

  search(direct) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/patients/booking?action='+direct);
    });
  }

  searchDispo(dispo) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/patients/booking?action='+dispo);
    });
  }
}
