import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UploadService } from '../../../../services/upload.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  selectedFile: File = null;
  fb: any;
  downloadURL: Observable<string>;
  imgURL:any;

  constructor(private afStorage: AngularFireStorage, private uploadSvc: UploadService) { }

  ngOnInit(): void {
    this.uploadSvc.getImg();
  }
  
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `promotions/${n}`;
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(`promotions/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          // this.uploadSvc.insertImg(this.fb);
          this.downloadURL.subscribe(url => {
            this.fb = url;
            this.uploadSvc.insertImg(this.fb);
            console.log('insert');
          });
        })
      )
      .subscribe((url) => {
      });
  }


}
