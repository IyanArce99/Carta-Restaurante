import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Url } from '../models/url';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  imgList: AngularFireList <any>;
  url: string;

  constructor(private firebase: AngularFireDatabase) { }

  getImg() {
    return this.imgList = this.firebase.list('img');
  }

  insertImg(url) {
    try {
      console.log("entra");
      this.imgList.push(url);
    }
    catch(e) {
      console.log(e);
    }
  }
}
