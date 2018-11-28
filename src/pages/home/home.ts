import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
              public geo: Geolocation
              ) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let latLng = null;
    let mapOptions = null;
   
    this.geo.watchPosition()
      .subscribe(pos => {
        latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

        mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    

        this.addMarker(latLng);
      });
  }

  addMarker(pos?: any) {
    let markerOptions = { map: this.map, animation: google.maps.Animation.BOUNCE , position: pos };
    let marker = new google.maps.Marker( markerOptions ); 
  }

}
