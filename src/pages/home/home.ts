import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DemandsurveyPage } from '../demandsurvey/demandsurvey';
import { DetailpublishPage } from '../detailpublish/detailpublish';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  gotoUserPage() {
    this.navCtrl.push(DemandsurveyPage);
  }
  gotoDetailpublish(){
    this.navCtrl.push( DetailpublishPage);
  }
}
