import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

//向上向下复制一行： Shift+Alt+Up 或 Shift+Alt+Down
import { DemandsurveyPage } from '../pages/demandsurvey/demandsurvey'; //注意对应的类名
import { DetailmobilePage } from '../pages/detailmobile/detailmobile'; 
import { BusPage } from '../pages/bus/bus'; 
import { DetailbusPage } from '../pages/detailbus/detailbus';
import { LostandfoudPage } from '../pages/lostandfoud/lostandfoud';
import { StaticsurveryPage } from '../pages/staticsurvery/staticsurvery';
import { DetailpublishPage } from '../pages/detailpublish/detailpublish';
import { EatwhatPage } from '../pages/eatwhat/eatwhat';
import { NewsPage } from '../pages/news/news';
import { HotelsPage } from '../pages/hotels/hotels';
import { MobilelistPage } from '../pages/mobilelist/mobilelist';
import { FeedbackPage } from '../pages/feedback/feedback';
import { VersionsPage } from '../pages/versions/versions';
import { FoodPage } from '../pages/food/food';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// 导入外部引入组件
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
//导入的表情 Provider

import { AppVersion } from '@ionic-native/app-version';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DemandsurveyPage,
    DetailmobilePage,
    BusPage,
    LostandfoudPage,
    DetailbusPage,
    HotelsPage,
    StaticsurveryPage,
    FoodPage,
    FeedbackPage,
    EatwhatPage,
    NewsPage,
    MobilelistPage,
    VersionsPage,
    DetailpublishPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回'
    }),
    IonicStorageModule.forRoot() //全局定义 storage 的模块
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DemandsurveyPage,
    DetailmobilePage,
    BusPage,
    LostandfoudPage,
    DetailbusPage,
    HotelsPage,
    StaticsurveryPage,
    FoodPage,
    FeedbackPage,
    EatwhatPage,
    NewsPage,
    MobilelistPage,
    VersionsPage,
    DetailpublishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppVersion,
    File,
    Transfer,
    FilePath,
    Camera,
    RestProvider
  ]
})
export class AppModule {}
