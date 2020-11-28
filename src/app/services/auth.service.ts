import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User;
  public access:boolean = false;
  public useruid:string;
  public userData$: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
     this.userData$ = afAuth.authState;
  }


  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;  
    }
    catch (error) {
      console.log(error)
    }
  }

  async register (email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    }
    catch (error) {
      console.log(error);
    }
  }

  async logout () {
    await this.afAuth.signOut();
  }

  getCurrentUser () {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
