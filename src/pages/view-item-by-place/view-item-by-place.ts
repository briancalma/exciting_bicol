import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers/items/items';

/**
 * Generated class for the ViewItemByPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-item-by-place',
  templateUrl: 'view-item-by-place.html',
})
export class ViewItemByPlacePage {

  
  public item: any;
  public placeParam;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public itemProvider: Items 
             ) {
      this.placeParam = this.navParams.get('place');
      this.item = itemProvider.getItemsByPlaces(this.placeParam);     
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ViewItemByPlacePage');
  }

  range(n) {
    return new Array(Math.round(n));
  }

  viewItem(item: any) {
    // console.log(item);
    this.navCtrl.push("ItemDetailPage",{ item: item});
  }

  viewAll(key: any, title?: string) {

    title = title != null && title != ''? title : key;

    let data = { key: key, title: title };
 

    // console.log(data);
    this.navCtrl.push("ItemListPage", {data : data });
  }

  

}
