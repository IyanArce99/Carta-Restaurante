import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authSvc: AuthService) { }


  async ngOnInit() {
    const user = await this.authSvc.getCurrentUser();
    if (user) {
      localStorage.setItem('uid', user.uid);
    }
  }

  toggle() {
    $("#wrapper").toggleClass("toggled");
  }

}
