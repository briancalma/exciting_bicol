import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { Api } from '../api/api';
import { TOPITEMS } from '../../models/mock-top-items';

@Injectable()
export class Items {

  public items:any = { 
    hotels : null,
    restaurants: null,
    nightLife: null,
    historicalPlaces: null,
    attractions: null
  };
  public hotels:any = [];
  public restaurants:any = [];
  public nightLife:any = [];
  public historicalPlaces:any = [];
  public attractions:any = [];
  public topItems = [];

  scores = [ 
              {
                id: 1,
                name: "Outdoor Enthusiasts",
                score: 98
              },
              {
                id: 2,
                name: "Local Culture",
                score: 80
              },
              {
                id: 3,
                name: "Family Travelers",
                score: 71
              },
              {
                id: 4,
                name: "Backpackers",
                score: 64
              },
              {
                id: 5,
                name: "Budget Travelers",
                score: 59
              }
           ];

  reviews =  [
                {
                  id: 1,
                  username: "Vincent Crispin",
                  avatar: "assets/img/user/adam.jpg",
                  from: "Melbourne",
                  content: "Awesome lake to chill out and half a beer on a bench or go for a jog around the pathways. Good way to meet locals also.",
                  rating: 4,
                  recommended_for: [1, 3]
                },
                {
                  id: 2,
                  username: "Dư Đỗ",
                  avatar: "assets/img/user/ben.png",
                  from: "Hanoi, Vietnam",
                  content: "One of the best things to do when in Hanoi is to simply wander around the city, taking in the smells of hot and sour street food being made, the chatter of people enjoying a Bia Hoi (local fresh beer) on the street and the beautiful chaos of workers hawking their wares or fixing a bundle of tangles electrical cables. ",
                  rating: 5,
                  recommended_for: [1, 2]
                },
                {
                  id: 3,
                  username: "Yuanita Ruchyat",
                  avatar: "assets/img/user/mike.png",
                  from: "Jakarta",
                  content: "Very popular lake in Old quarter. Very beautiful. Check it out at night for a very enchanting experience. You can definitely feel the French influence.",
                  rating: 5,
                  recommended_for: [2, 3]
                },
                {
                  id: 4,
                  username: "Leow Cheng Lam",
                  avatar: "assets/img/user/perry.png",
                  from: "Klang",
                  content: "This is a well-known landmark in the heart of Hanoi's Old Quarter. Folklore says this is the site where a giant golden turtle stole a magical sword, thus ending the war. Because of this story, many people visit this lake to pay their respect. It's a nice place to wander around and people watch when you need to get away from the bustle of the city.",
                  rating: 4,
                  recommended_for: [4, 3]
                }
            ];

  constructor(public api: Api) { 

    this.setItems();
   
  }

  query(params?: any) {
    return this.api.get('items', params);
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

      this.hotels.forEach(element => {
        element.scores = this.scores;
        element.reviews = this.reviews;
      }); 

      this.restaurants.forEach(element => {
        element.scores = this.scores;
        element.reviews = this.reviews;
      }); 

      this.nightLife.forEach(element => {
        element.scores = this.scores;
        element.reviews = this.reviews;
      }); 

      this.historicalPlaces.forEach(element => {
        element.scores = this.scores;
        element.reviews = this.reviews;
      }); 

      this.attractions.forEach(element => {
        element.scores = this.scores;
        element.reviews = this.reviews;
      }); 

      this.items.hotels = this.hotels;
      this.items.restaurants = this.restaurants;
      this.items.nightLife = this.nightLife;
      this.items.historicalPlaces = this.historicalPlaces;
      this.items.attractions = this.attractions;
    });
  }

  getItemsByKey(key: any) { 
    return this.items[key];
  }

  getItemsByPlaces(place: any) {
    
    let hotels = this.items.hotels.filter(ele => ele.place == place);
    let restaurants = this.items.restaurants.filter(ele => ele.place == place);
    let nightLife = this.items.nightLife.filter(ele => ele.place == place);
    let historicalPlaces = this.items.historicalPlaces.filter(ele => ele.place == place);
    let attractions = this.items.attractions.filter(ele => ele.place == place);

    return {
              hotels: hotels,
              restaurants: restaurants,
              nightLife: nightLife,
              historicalPlaces: historicalPlaces,
              attractions: attractions
           };
  }
}
