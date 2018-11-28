import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialActivityPage } from './social-activity';

@NgModule({
  declarations: [
    SocialActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialActivityPage),
  ],
})
export class SocialActivityPageModule {}
