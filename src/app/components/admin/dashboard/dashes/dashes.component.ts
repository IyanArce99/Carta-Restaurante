import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { DashesService } from 'src/app/services/dashes.service';

@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.css']
})
export class DashesComponent implements OnInit {
  dashesForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),

  });
  
  categoryList: Category[];

  constructor(private categoryService: CategoryService, private dashesService: DashesService) { }

  ngOnInit(): void {
    this.categoryService.getCategories();
    this.categoryService.getCategories().snapshotChanges().subscribe( category => {
      this.categoryList = [];
      category.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.categoryList.push(x as Category);
      });
    });
  }

  onSubmit() {
    console.log(this.dashesForm.value);
    this.dashesService.insertDashes(this.dashesForm.value);
    console.log("Correcto");
  }

}
