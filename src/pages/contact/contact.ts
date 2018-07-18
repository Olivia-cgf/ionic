import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodPage } from '../food/food';
import { FeedbackPage } from '../feedback/feedback';
import { StaticsurveryPage } from '../staticsurvery/staticsurvery';
import { EatwhatPage } from '../eatwhat/eatwhat';
import { NewsPage } from '../news/news';
import { VersionsPage } from '../versions/versions';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  
  gotoFood(){
    this.navCtrl.push(FoodPage);
  }

  gotoNews(){
    this.navCtrl.push(NewsPage);
  }

  gotoEatWhat(){
    this.navCtrl.push(EatwhatPage);
  }

  gotoFeedBack(){
    this.navCtrl.push(FeedbackPage);
  }

  gotoSurvery(){
    this.navCtrl.push(StaticsurveryPage);
  }

  gotoVersions(){
    this.navCtrl.push(VersionsPage);
  }
}
