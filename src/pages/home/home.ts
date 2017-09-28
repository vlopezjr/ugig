import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookingListPage, ArtistsPage, VenuesPage, PromotersPage } from '../pages';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bookingsTab = BookingListPage;
  artistsTab = ArtistsPage;
  venuesTab = VenuesPage;
  promotersTab = PromotersPage;

  constructor(public navCtrl: NavController) {

  }

}
