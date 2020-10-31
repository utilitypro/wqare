import { Component, OnInit,ChangeDetectorRef,AfterViewInit,ViewEncapsulation  } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation : ViewEncapsulation.None

})
export class DashboardComponent implements OnInit,AfterViewInit  {
  show : boolean =false;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadDynmicallyScript('./../../../assets/admin/js/jquery-3.2.1.min.js');
    this.loadDynmicallyScript('./../../../assets/admin/js/popper.min.js');
    this.loadDynmicallyScript('./../../../assets/admin/js/bootstrap.min.js');
    this.loadDynmicallyScript('./../../../assets/admin/plugins/slimscroll/jquery.slimscroll.min.js');
    this.loadDynmicallyScript('./../../../assets/admin/plugins/raphael/raphael.min.js');
    this.loadDynmicallyScript('./../../../assets/admin/plugins/morris/morris.min.js');
    this.loadDynmicallyScript('./../../../assets/admin/js/chart.morris.js');
    this.loadDynmicallyScript('./../../../assets/admin/js/script.js');
  }

  loadDynmicallyScript(js) {
      var script = document.createElement('script');
      script.src = js;
      script.async =false;
      document.head.appendChild(script);
      script.onload = () => this.doSomethingWhenScriptIsLoaded();
   }

   doSomethingWhenScriptIsLoaded() {

   }


}
