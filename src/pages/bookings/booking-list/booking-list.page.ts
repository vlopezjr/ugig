import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { BookingDetailPage } from '../../pages';

@Component({
  selector: 'page-booking-list',
  templateUrl: 'booking-list.page.html',
})
export class BookingListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingListPage');
  }

  goToDetails() {
    this.navCtrl.push(BookingDetailPage);
  }
}
