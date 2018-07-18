import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailmobilePage } from '../detailmobile/detailmobile';
import { BusPage } from '../bus/bus';
import { LostandfoudPage } from '../lostandfoud/lostandfoud';
import { HotelsPage } from '../hotels/hotels';
import { StaticsurveryPage } from '../staticsurvery/staticsurvery';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
 //常用电话
  gotoMobile(){
    this.navCtrl.push(DetailmobilePage);
  }

  //班车服务
  gotoBus(){
    this.navCtrl.push(BusPage);
  }

  //失物招领
  gotoLost(){
    this.navCtrl.push(LostandfoudPage);
  }

  //满意度调查
  gotoSurvery(){
    this.navCtrl.push(StaticsurveryPage);
  }

  //协议酒店
  gotoHotels(){
    this.navCtrl.push(HotelsPage); 
  }
}
