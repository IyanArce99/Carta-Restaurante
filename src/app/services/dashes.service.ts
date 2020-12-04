import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Category } from '../models/category';
import { Dash } from '../models/dash';

@Injectable({
  providedIn: 'root'
})
export class DashesService {
  dashesList: AngularFireList <any>;
  selectCategory: Category = new Category();

  constructor(private firebase: AngularFireDatabase) { }

  getDashes() {
    return this.dashesList = this.firebase.list('dashes');
  }

  insertDashes(dash: Dash) {
    this.dashesList.push({
      name: dash.name,
      description: dash.description,
      price: dash.price,
      category: dash.category,
    });
  }

  updateCategories(category: Category) {
    this.dashesList.update(category.$key, {
      name: category.name
    });
  }

  deleteDashes($key: string) {
    this.dashesList.remove($key);
  }
}
