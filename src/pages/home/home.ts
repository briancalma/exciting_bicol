import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Items } from '../../providers/items/items';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  public segmentPage = "map";
  public map: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public geo: Geolocation,
              public item: Items ,
              public app: App
              ) {
    
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let latLng = null;
    let mapOptions = null;
    let marker = null;
   
    this.geo.watchPosition()
      .subscribe(pos => {
        latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);     // generate latitude and longitude 
        
        // creation of a new map
        if(this.map == null) {
          // Map configurations
          mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    // create new map
          marker = this.addMarker(latLng);                                              // adding of new marker
        } else {
          this.map.setCenter(latLng);                                                   // update map
          marker.setPosition(latLng);                                                   // update marker position
        }
      });
  }

  addMarker(pos?: any) {
    let markerOptions = { map: this.map, animation: google.maps.Animation.BOUNCE , position: pos };
    return new google.maps.Marker( markerOptions ); 
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

  viewItemsByPlace(place) {
    this.navCtrl.push("ViewItemByPlacePage", {place : place});
    // this.app.getRootNav().setr
    // this.navCtrl.
  }

}
