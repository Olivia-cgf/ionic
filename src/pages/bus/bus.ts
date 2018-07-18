import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailbusPage } from "../detailbus/detailbus";
/**
 * Generated class for the BusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bus',
  templateUrl: 'bus.html',
})
export class BusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusPage');
  }
  
  gotoDetailBus() {
    this.navCtrl.push(DetailbusPage);
  }
}
