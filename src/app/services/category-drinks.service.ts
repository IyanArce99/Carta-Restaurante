import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Category_drink } from '../models/category_drink';

@Injectable({
  providedIn: 'root'
})
export class CategoryDrinksService {

  categoryList: AngularFireList <any>;
  selectCategory: Category_drink = new Category_drink();

  constructor(private firebase: AngularFireDatabase) { }

  getCategories() {
    return this.categoryList = this.firebase.list('categoriesdrink');
  }

  insertCategories(category: Category_drink) {
    this.categoryList.push({
      name: category.name
    });
  }

  updateCategories(category: Category_drink) {
    this.categoryList.update(category.$key, {
      name: category.name
    });
  }

  deleteCategories($key: string) {
    this.categoryList.remove($key);
  }


  
}
