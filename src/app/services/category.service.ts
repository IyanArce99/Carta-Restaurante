import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryList: AngularFireList <any>;
  selectCategory: Category = new Category();

  constructor(private firebase: AngularFireDatabase) { }

  getCategories() {
    return this.categoryList = this.firebase.list('categories');
  }

  insertCategories(category: Category) {
    this.categoryList.push({
      name: category.name
    });
  }

  updateCategories(category: Category) {
    this.categoryList.update(category.$key, {
      name: category.name
    });
  }

  deleteCategories($key: string) {
    this.categoryList.remove($key);
  }


  
}
