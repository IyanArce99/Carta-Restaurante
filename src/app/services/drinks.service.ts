import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Category } from '../models/category';
import { Dash } from '../models/dash';
import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  drinksList: AngularFireList <any>;
  selectCategory: Category = new Category();

  constructor(private firebase: AngularFireDatabase) { }

  getDrinks() {
    return this.drinksList = this.firebase.list('drinks');
  }

  insertDrinks(drink: Drink) {
    this.drinksList.push({
      name: drink.name,
      description: drink.description,
      price: drink.price,
      category: drink.category,
      sulfitos: drink.sulfitos,
      crustaceos: drink.crustaceos,
      pescados: drink.pescados,
      gluten: drink.gluten,
      lacteos: drink.lacteos,
      huevos: drink.huevos,
      frutos: drink.frutos
    });
  }


  deleteDrinks($key: string) {
    this.drinksList.remove($key);
  }
}

