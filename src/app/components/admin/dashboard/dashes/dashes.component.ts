import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.css']
})
export class DashesComponent implements OnInit {
  dashesForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.dashesForm.value);
  }

}
