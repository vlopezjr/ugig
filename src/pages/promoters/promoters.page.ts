import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-promoters',
  templateUrl: 'promoters.page.html',
})
export class PromotersPage {
  promoters = [
    {id: 1, name: 'John Pena'},
    {id: 2, name: 'Tony Villatoro'},
    {id: 3, name: 'Toni Segura'},
    {id: 4, name: 'Nestor Nunez'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotersPage');
  }

}
