import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiyPage } from './diy';

@NgModule({
  declarations: [
    DiyPage,
  ],
  imports: [
    IonicPageModule.forChild(DiyPage),
  ],
})
export class DiyPageModule {}
