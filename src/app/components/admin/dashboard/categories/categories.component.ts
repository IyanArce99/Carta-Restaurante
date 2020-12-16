import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { SimpleModalService } from 'ngx-simple-modal';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  categoryList: Category[];
  editModalRef: any;

  constructor(
    private categoryService: CategoryService,
    private simpleModalService: SimpleModalService
    ) { }

  ngOnInit(): void {
    this.buildForm();
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
    console.log(this.categoryForm.value);
    this.categoryService.insertCategories(this.categoryForm.value);
    console.log("Correcto");
  }

  buildForm() {
    this.categoryForm = new FormGroup({
      name: new FormControl('')
    });
  }

  editCategory(category: Category) {
    this.openDishEditModal(category);
    
  }

  deleteCategory($key: string) {
    this.categoryService.deleteCategories($key);
  }

  openDishEditModal(category: Category) {
    this.editModalRef = this.simpleModalService
      .addModal(EditCategoryComponent, {
        category,
      })
      .subscribe((editedCategory: Category) => {
        if (editedCategory) {
          this.categoryService.categoryList.update(category['$key'], editedCategory);
          alert('Categoría editada');
        }
      });
  }


}
