import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Category_drink } from 'src/app/models/category_drink';
import { CategoryDrinksService } from 'src/app/services/category-drinks.service';

export interface EditCategoryModalModel {
  category: Category_drink;
}

@Component({
  selector: 'app-edit-categorydrinks',
  templateUrl: './edit-categorydrinks.component.html',
  styleUrls: ['./edit-categorydrinks.component.css']
})
export class EditCategorydrinksComponent extends SimpleModalComponent<EditCategoryModalModel, Category_drink> implements EditCategoryModalModel, OnInit {

  category: Category_drink;
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryDrinksService) { 
    super();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = this.categoryForm.value;
    this.close();
  }

  onSubmit() {};

  
  buildForm() {
    this.categoryForm = new FormGroup({
      name: new FormControl('')
    });
    this.categoryForm.patchValue(this.category);
  }

}
