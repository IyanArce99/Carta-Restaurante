import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Drink } from 'src/app/models/drink';
import { Category_drink } from 'src/app/models/category_drink';
import { CategoryDrinksService } from 'src/app/services/category-drinks.service';

export interface EditDrinkModalModel {
  drink: Drink;
}

@Component({
  selector: 'app-edit-drinks',
  templateUrl: './edit-drinks.component.html',
  styleUrls: ['./edit-drinks.component.css']
})
export class EditDrinksComponent extends SimpleModalComponent<EditDrinkModalModel, Drink> implements EditDrinkModalModel, OnInit {

  drink: Drink;
  drinkForm: FormGroup;
  editingDrink: Drink;
  categoryList: Category_drink[];

  constructor(private categoryService: CategoryDrinksService) {
    super();
   }

  ngOnInit(): void {
    this.buildForm();
    this.categoryService
    .getCategories()
    .snapshotChanges()
    .subscribe((category) => {
      this.categoryList = [];
      category.forEach((element) => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        this.categoryList.push(x as Category_drink);
      });
    });
  }

  onSubmit() {};

  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = this.drinkForm.value;
    this.close();
  }

  buildForm() {
    this.drinkForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      sulfitos: new FormControl(''),
      crustaceos: new FormControl(''),
      pescados: new FormControl(''),
      gluten: new FormControl(''),
      lacteos: new FormControl(''),
      huevos: new FormControl(''),
      frutos: new FormControl('')
    });
    
    this.drinkForm.patchValue(this.drink);

  }


}
