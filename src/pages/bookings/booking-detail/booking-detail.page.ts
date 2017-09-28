import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-booking-detail',
  templateUrl: 'booking-detail.page.html',
})
export class BookingDetailPage {
  booking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.booking = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingDetailPage');
  }

}
