import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }


  async ngOnInit() {
    const user = await this.authSvc.getCurrentUser();
    if (user) {
      localStorage.setItem('uid', user.uid);
    }
    this.router.navigate(['/dashboard/categories']);
  }

  toggle() {
    $("#wrapper").toggleClass("toggled");
  }

}
