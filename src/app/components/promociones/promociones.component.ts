import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  loader: boolean = false;
  url:any[];

  constructor(private imgSvc: UploadService) { }

  ngOnInit(): void {
    this.imgSvc.getImg().snapshotChanges().subscribe( data => {
      this.url = [];
      data.forEach( element => {
        let x = element.payload.toJSON();
        this.url.push(x);
        console.log(x);
        console.log(this.url);
      })
      console.log(data);
    })
  }

}
