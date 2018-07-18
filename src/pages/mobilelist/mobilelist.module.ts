import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobilelistPage } from './mobilelist';

@NgModule({
  declarations: [
    MobilelistPage,
  ],
  imports: [
    IonicPageModule.forChild(MobilelistPage),
  ],
})
export class MobilelistPageModule {}
