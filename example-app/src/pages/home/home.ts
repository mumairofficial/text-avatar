import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users: any[] = [
    { name: "Abdul Basit", company: "Siemens", job_title: "Technical Lead" },
    { name: "Amin Ullah", company: "NBS", job_title: "BI Engineer" },
    { name: "Haris Altaf", company: "Siemens", job_title: "Technical Lead" },
    { name: "Muhammad Umair", company: "Siemens", job_title: "Software Engineer" },
    { name: "Talal", company: "Siemens", job_title: "Software Engineer" },
    { name: "Usman Iftkhar", company: "Siemens", job_title: "Sr. Technical Lead" },
    { name: "Umar Hayat", company: "NBS", job_title: "Software Engineer" }];

  constructor(public navCtrl: NavController) {

  }

  public presentUserInfoAlert(user: any): void {
    console.log(JSON.stringify(user));
  }

  public doRefresh($refresher) : void {
    setTimeout(() => {
      $refresher.complete();
    }, 3000);
  }
}
