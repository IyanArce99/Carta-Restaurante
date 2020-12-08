import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category_drink } from 'src/app/models/category_drink';
import { CategoryDrinksService } from 'src/app/services/category-drinks.service';

@Component({
  selector: 'app-categoriesdrinks',
  templateUrl: './categoriesdrinks.component.html',
  styleUrls: ['./categoriesdrinks.component.css']
})
export class CategoriesdrinksComponent implements OnInit {
  categoryDrinksForm = new FormGroup({
    name: new FormControl('')
  });
  categoryDrinkList: Category_drink[];

  constructor(private categoryService: CategoryDrinksService) { }

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

  deleteCategory($key: string) {
    this.categoryService.deleteCategories($key);
  }

}
