import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { DashesService } from 'src/app/services/dashes.service';
import { groupBy, get } from 'lodash';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
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

  constructor(private dashesService: DashesService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    combineLatest([this.dashesService.getDashes().snapshotChanges(), this.categoryService.getCategories().snapshotChanges()])
      .subscribe(([dishesPayload, catsPayload]: any) => {
        this.dashesList = this.getPayloadData(dishesPayload);
        const categories = this.getPayloadData(catsPayload);
        this.buildCategoriesByGroup(categories);

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

  buildCategoriesByGroup(categories: Category[]): any {
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
