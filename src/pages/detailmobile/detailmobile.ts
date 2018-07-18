import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MobilelistPage } from '../mobilelist/mobilelist';

/**
 * Generated class for the DetailmobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detailmobile',
  templateUrl: 'detailmobile.html',
})
export class DetailmobilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailmobilePage');
  }

  gotoMobileList(){
    this.navCtrl.push(MobilelistPage);
  }
}
