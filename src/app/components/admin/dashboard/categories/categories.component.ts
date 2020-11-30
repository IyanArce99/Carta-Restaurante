import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl('')
  });
  categoryList: Category[];

  constructor(private categoryService: CategoryService) { }

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
    console.log(this.categoryForm.value);
    this.categoryService.insertCategories(this.categoryForm.value);
    console.log("Correcto");
  }

  editCategory(category: Category) {
    console.log(category);
  }

  deleteCategory($key: string) {
    this.categoryService.deleteCategories($key);
  }


}
