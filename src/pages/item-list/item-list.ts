import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/items/items';

/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

  public items = [];

  public title;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public itemProvider: Items 
             ) {
  
    let data = navParams.get('data');

    this.title = data.title;

    this.items = this.itemProvider.getItemsByKey( data.key );
  }

  ionViewDidLoad() {

  }

  viewItem(item: any) {
    // console.log(item);
    this.navCtrl.push("ItemDetailPage",{ item: item});
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }
}
