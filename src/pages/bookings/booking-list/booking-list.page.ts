import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { BookingDetailPage } from '../../pages';

@Component({
  selector: 'page-booking-list',
  templateUrl: 'booking-list.page.html',
})
export class BookingListPage {
  bookings = [
    {id: 1, name: 'House of Blues', city: 'Hollywood', state: 'CA'},
    {id: 2, name: 'Staples Center', city: 'Los Angeles', state: 'CA'},
    {id: 3, name: 'Microsoft Theater', city: 'Long Beach', state: 'CA'},
    {id: 4, name: 'Margarita Jones', city: 'Huntington Park', state: 'CA'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingListPage');
  }

  goToDetails($event, booking) {
    this.navCtrl.push(BookingDetailPage, booking);
  }
}
