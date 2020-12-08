import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category_drink } from 'src/app/models/category_drink';
import { Drink } from 'src/app/models/drink';
import { CategoryDrinksService } from 'src/app/services/category-drinks.service';
import { DrinksService } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinksForm = new FormGroup({
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
  categoryList: Category_drink[];
  drinksList: Drink[];

  constructor(private drinksService:DrinksService, private categoryService: CategoryDrinksService) { }

  ngOnInit(): void {
    this.drinksService.getDrinks();
    // Cargamos las bebidas
    this.drinksService.getDrinks().snapshotChanges().subscribe(drink => {
      this.drinksList = [];
      drink.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.drinksList.push(x as Drink);
      });
    });

    this.categoryService.getCategories().snapshotChanges().subscribe( category => {
      this.categoryList = [];
      category.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.categoryList.push(x as Category_drink);
      });
    });
  }

  onSubmit() {
    console.log(this.drinksForm.value);
    this.drinksService.insertDrinks(this.drinksForm.value);
    console.log("Correcto");
  }


  deleteCategory($key: string) {
    this.drinksService.deleteDrinks($key);
  }

}
