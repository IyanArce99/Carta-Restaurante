import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Dash } from '../models/dash';

@Injectable({
  providedIn: 'root'
})
export class DashesService {
  dashesList: AngularFireList <any>;
  selectDash: Dash = new Dash();

  constructor(private firebase: AngularFireDatabase) { }

  getDashes() {
    return this.dashesList = this.firebase.list('dashes');
  }

  insertDashes(dash: Dash) {
    console.log(this.dashesList);
    this.dashesList.push({
      name: dash.name,
      description: dash.description,
      price: dash.price,
      category: dash.category
    });
  }

  deleteDashes($key: string) {
    this.dashesList.remove($key);
  }
}
