import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VenuesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-venues',
  templateUrl: 'venues.page.html',
})
export class VenuesPage {
  venues = [
    {id: 1, name: 'House of Blues'},
    {id: 2, name: 'Staples Center'},
    {id: 3, name: 'Microsoft Theater'},
    {id: 4, name: 'Margarita Jones'},
    {id: 5, name: 'La Boom'},
    {id: 6, name: 'Conga Room'},
    {id: 7, name: 'Rumba Room'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuesPage');
  }

}
