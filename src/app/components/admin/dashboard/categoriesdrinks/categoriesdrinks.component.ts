import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SimpleModalService } from 'ngx-simple-modal';
import { Category_drink } from 'src/app/models/category_drink';
import { CategoryDrinksService } from 'src/app/services/category-drinks.service';
import { EditCategorydrinksComponent } from './edit-categorydrinks/edit-categorydrinks.component';

@Component({
  selector: 'app-categoriesdrinks',
  templateUrl: './categoriesdrinks.component.html',
  styleUrls: ['./categoriesdrinks.component.css']
})
export class CategoriesdrinksComponent implements OnInit {
  categoryDrinksForm: FormGroup;
  categoryDrinkList: Category_drink[];
  editModalRef: any;

  constructor(
    private categoryService: CategoryDrinksService,
    private simpleModalService: SimpleModalService
    ) { }

  ngOnInit(): void {
    this.categoryService.getCategories();
    this.categoryService.getCategories().snapshotChanges().subscribe( category => {
      this.categoryDrinkList = [];
      category.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.categoryDrinkList.push(x as Category_drink);
      });
    });
  }

  onSubmit() {
    console.log(this.categoryDrinksForm.value);
    this.categoryService.insertCategories(this.categoryDrinksForm.value);
    console.log("Correcto");
  }

  buildForm() {
    this.categoryDrinksForm = new FormGroup({
      name: new FormControl('')
    });
  }

  openDishEditModal(category: Category_drink) {
    this.editModalRef = this.simpleModalService
      .addModal(EditCategorydrinksComponent, {
        category,
      })
      .subscribe((editedCategory: Category_drink) => {
        if (editedCategory) {
          this.categoryService.categoryList.update(category['$key'], editedCategory);
          alert('Categoría editada');
        }
      });
  }

  editCategory(category: Category_drink) {
    this.openDishEditModal(category);
  }

  deleteCategory($key: string) {
    this.categoryService.deleteCategories($key);
  }

}
