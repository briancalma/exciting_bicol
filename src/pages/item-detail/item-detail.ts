import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
declare var google: any;

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  // attraction info
  public item: any;
  // default rating
  public rating = 0;
  // Map
  public map: any;
  // rating values
  public ratingValues = [0, 0, 0, 0, 0];

  constructor(public nav: NavController,
              public platform: Platform,
              public navParams: NavParams,
              ) {
      
    this.item = navParams.get("item");

    console.log(this.item);
    // process reviews data
    for (let key in this.item.reviews) {
      this.ratingValues[this.item.reviews[key].rating - 1]++;
    }
  }


  ionViewDidLoad() {
    // init map
    this.initializeMap();
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // rate function
  rate(stars) {
    this.rating = stars;
  }

  initializeMap() {
    // let latLng = new google.maps.LatLng(this.item.location.lat, this.item.location.lon);

    let latLng = new google.maps.LatLng(13.1391, 123.7438);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }

    this.map = new google.maps.Map(document.getElementById("map-detail"), mapOptions);
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 300);
  }

}
