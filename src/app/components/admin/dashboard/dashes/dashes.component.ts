import { Component, OnInit } from '@angular/core';
import { snapshotChanges } from '@angular/fire/database';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Dash } from 'src/app/models/dash';
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
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });
  categoryList: Category[];
  dashesList: Dash[];

  constructor(private dashesService: DashesService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.dashesService.getDashes();
    // Cargamos los platos
    this.dashesService.getDashes().snapshotChanges().subscribe(dash => {
      this.dashesList = [];
      dash.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.dashesList.push(x as Dash);
      });
    });
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

  editCategory(category: Category) {
    console.log(category);
  }

  deleteCategory($key: string) {
    this.dashesService.deleteDashes($key);
  }

}
