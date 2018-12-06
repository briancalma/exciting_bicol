import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { Api } from '../api/api';
import { TOPITEMS } from '../../models/mock-top-items';

@Injectable()
export class Items {

  public hotels = [];
  public restaurants = [];
  public nightLife = [];
  public historicalPlaces = [];
  public attractions = [];
  public topItems = [];

  constructor(public api: Api) { 

    this.setItems();
   
  }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

  setItems() {
     // getting of new data on the server
     this.query().subscribe((res:any) => {
      // console.log(res);
      this.hotels = res.data.hotel;
      this.restaurants = res.data.restaurant;
      this.nightLife = res.data.night_club;
      this.historicalPlaces = res.data.historical_place;
      this.attractions = res.data.attraction;
      this.topItems = TOPITEMS;
    });
  }
}
