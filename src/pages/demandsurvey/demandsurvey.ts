import { Component } from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';

/**
 * Generated class for the DemandsurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-demandsurvey',
  templateUrl: 'demandsurvey.html',
})
export class DemandsurveyPage {

  constructor(public navCtrl: NavController,
              public alerCtrl: AlertController) {
  }
  
  submit() {
    let confirm = this.alerCtrl.create({
      title: '确认提交?',
      buttons: [
        {
          text: '不同意',
          handler: () => {
            console.log('不同意');
          }
        },
        {
          text: '同意',
          handler: () => {
            console.log('同意');
          }
        }
      ]
    });
    confirm.present()
  }
}
