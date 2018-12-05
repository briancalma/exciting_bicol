import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {

  public hotels = [];
  public restaurants = [];
  public nightLife = [];
  public historicalPlaces = [];
  public attractions = [];

  constructor(public api: Api) { 

    this.query().subscribe((res:any) => {
      // console.log(res);
      this.hotels = res.data.hotel;
      this.restaurants = res.data.restaurant;
      this.nightLife = res.data.night_life;
      this.historicalPlaces = res.data.historical_place;
      this.attractions = res.data.attraction;
      // console.log(this.hotels);
    });

  }

  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }



}
