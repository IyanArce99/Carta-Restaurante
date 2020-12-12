import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  loader: boolean = false;
  urls:any[];
  url: any[];


  constructor(private imgSvc: UploadService) { }

  ngOnInit(): void {
    this.imgSvc.getImg().snapshotChanges().subscribe( data => {
      this.urls = [];
      data.forEach( element => {
        let x = element.payload.toJSON();
        this.urls.push(x);
      })
      this.getLastUrl();
    })
  }

  getLastUrl() {
    // this.url = this.urls[this.urls.length - 1];
    console.log(this.urls[this.urls.length - 1]);
  }

}
