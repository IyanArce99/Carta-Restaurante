import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { Category } from 'src/app/models/category';
import { Dash } from 'src/app/models/dash';
import { CategoryService } from 'src/app/services/category.service';

export interface EditDishModalModel {
  dish:Dash;
}

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})

export class EditDishComponent extends SimpleModalComponent<EditDishModalModel, Dash> implements EditDishModalModel,OnInit {

  dish: Dash;
  dashesForm: FormGroup;
  editingDash: Dash;
  categoryList: Category[];


  constructor(private categoryService: CategoryService) {
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
          this.categoryList.push(x as Category);
        });
      });
  }

  onSubmit() {};

  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = this.dashesForm.value;
    this.close();
  }

  buildForm() {
    this.dashesForm = new FormGroup({
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
      frutos: new FormControl(''),
      price_sm: new FormControl(''),
      price_md: new FormControl(''),
      price_gr: new FormControl(''),
    });
    
    this.dashesForm.patchValue(this.dish);

  }

}
