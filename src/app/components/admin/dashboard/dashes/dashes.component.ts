import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SimpleModalService } from 'ngx-simple-modal';
import { EditDishComponent } from 'src/app/components/edit-dish/edit-dish.component';
import { Category } from 'src/app/models/category';
import { Dash } from 'src/app/models/dash';
import { CategoryService } from 'src/app/services/category.service';
import { DashesService } from 'src/app/services/dashes.service';

@Component({
  selector: 'app-dashes',
  templateUrl: './dashes.component.html',
  styleUrls: ['./dashes.component.css'],
})
export class DashesComponent implements OnInit, OnDestroy {
  dashesForm: FormGroup;
  categoryList: Category[];
  dashesList: Dash[];
  editModalRef: any;

  constructor(
    private dashesService: DashesService,
    private categoryService: CategoryService,
    private simpleModalService: SimpleModalService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.dashesService.getDashes();
    // Cargamos los platos
    this.dashesService
      .getDashes()
      .snapshotChanges()
      .subscribe((dash) => {
        this.dashesList = [];
        dash.forEach((element) => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.dashesList.push(x as Dash);
        });
      });
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

  openDishEditModal(dish: Dash) {
    this.editModalRef = this.simpleModalService
      .addModal(EditDishComponent, {
        dish,
      })
      .subscribe((editedDish: Dash) => {
        if (editedDish) {
          this.dashesService.dashesList.update(dish['$key'], editedDish);
          alert('Plato editado');
        }
      });
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
  }

  onSubmit() {
    console.log(this.dashesForm.value);
    this.dashesService.insertDashes(this.dashesForm.value);
    console.log("Correcto");
  }


  editDash(dash: Dash) {
    this.openDishEditModal(dash);
  }

  deleteCategory($key: string) {
    this.dashesService.deleteDashes($key);
  }

  ngOnDestroy() {
    if (this.editModalRef) {
      this.editModalRef.unsubscribe();
    }
  }
}
