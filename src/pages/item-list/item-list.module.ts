import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemListPage } from './item-list';

@NgModule({
  declarations: [
    ItemListPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemListPage),
  ],
})
export class ItemListPageModule {}
