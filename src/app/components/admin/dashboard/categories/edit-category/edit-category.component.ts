import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

export interface EditCategoryModalModel {
  category: Category;
}

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent extends SimpleModalComponent<EditCategoryModalModel, Category> implements EditCategoryModalModel, OnInit {
  
  category: Category;
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService) { 
    super();
  }

  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = this.categoryForm.value;
    this.close();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {};

  
  buildForm() {
    this.categoryForm = new FormGroup({
      name: new FormControl('')
    });
    this.categoryForm.patchValue(this.category);
  }

}
