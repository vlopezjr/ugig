import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArtistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-artists',
  templateUrl: 'artists.page.html',
})
export class ArtistsPage {
  artists = [
    {id: 1, name: 'Ckan'},
    {id: 2, name: 'Don Aero'},
    {id: 3, name: 'Concrete'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistsPage');
  }

}
