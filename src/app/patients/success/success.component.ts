import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './../../common-service.service'

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  doc;
  date;
  time;
  constructor(public commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.message.subscribe((res) => {
      if(res != undefined) {
        // @ts-ignore
        var _res = JSON.parse(res);
          if (_res['page'] == 'success') {
            // @ts-ignore
            var _data = _res;
            this.doc = _data['doc'];
            this.date = _data['datetime'].split(' ')[0];
            this.time = _data['datetime'].split(' ')[1];
            // @ts-ignore
            localStorage.setItem('successInfo', res);
          } else if (localStorage.get('successInfo')) {
            var data1 = JSON.parse(localStorage.getItem('successInfo'));
            this.doc = data1['doc'];
            this.date = data1['datetime'].split(' ')[0];
            this.time = data1['datetime'].split(' ')[1];
          }
        } else if (res == undefined && localStorage.getItem('successInfo')) {
          var data = JSON.parse(localStorage.getItem('successInfo'));
          this.doc = data['doc'];
          this.date = data['datetime'].split(' ')[0];
          this.time = data['datetime'].split(' ')[1];
        }
    });
  }
}
