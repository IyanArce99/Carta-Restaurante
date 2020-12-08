import { Component, OnInit } from '@angular/core';
import { Category_drink } from 'src/app/models/category_drink';
import { CategoryDrinksService } from 'src/app/services/category-drinks.service';
import { DrinksService } from 'src/app/services/drinks.service';
import { groupBy, get } from 'lodash';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  title = 'carta-restaurante';
  sulfitos = '../assets/sulfitos.jpg';
  crustaceos = '../assets/crustaceos.jpg';
  pescados = '../assets/pescados.jpg';
  gluten = '../assets/gluten.jpg';
  lacteos = '../assets/lacteos.jpg';
  huevos = '../assets/huevos.jpg';
  frutos = '../assets/frutos.jpg';
  public dashesList: any[] = [];
  public categoryList: any[] = [];
  loader: boolean = true;

  constructor(private drinksService: DrinksService, private categoryService: CategoryDrinksService) { }

  ngOnInit(): void {
    combineLatest([this.drinksService.getDrinks().snapshotChanges(), this.categoryService.getCategories().snapshotChanges()])
    .subscribe(([dishesPayload, catsPayload]: any) => {
      this.dashesList = this.getPayloadData(dishesPayload);
      const categories = this.getPayloadData(catsPayload);
      this.buildCategoriesByGroup(categories);
      this.loader = false;
    });
  }

  getPayloadData(payload: any): any[] {
    return payload.reduce((totalItems, currentItem) => {
      const dish = currentItem.payload.toJSON();
      dish.id = currentItem.key;
      totalItems.push(dish);
      return totalItems;
    }, []);
  }

  buildCategoriesByGroup(categories: Category_drink[]): any {
    const dishesByGroup = groupBy(this.dashesList, 'category');
    this.categoryList = [];
    Object.keys(dishesByGroup).forEach((categoryKey) => {
      const cat = {
        name: get(categories.find(category => category.id === categoryKey), 'name', 'Categoría sin nombre definido'),
        dishes: this.dashesList.filter((dish) => dish.category === categoryKey)
      };
      this.categoryList.push(cat);
    });
  }

}
