import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/admin/dashboard/categories/categories.component';
import { CategoriesdrinksComponent } from './components/admin/dashboard/categoriesdrinks/categoriesdrinks.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { DashesComponent } from './components/admin/dashboard/dashes/dashes.component';
import { EditDashComponent } from './components/admin/dashboard/dashes/edit-dash/edit-dash.component';
import { DrinksComponent } from './components/admin/dashboard/drinks/drinks.component';
import { PromotionsComponent } from './components/admin/dashboard/promotions/promotions.component';
import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { CartaComponent } from './components/carta/carta.component';
import { IndexComponent } from './components/index/index.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'carta',
    component: CartaComponent
  },
  {
    path: 'bebidas',
    component: BebidasComponent
  },
  {
    path: 'promociones',
    component: PromocionesComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashes',
        component: DashesComponent,
        children: [
          {
            path: 'edit/:id',
            component: EditDashComponent
          }
        ]
      },
      {
        path: 'drinks',
        component: DrinksComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'categoriesdrinks',
        component: CategoriesdrinksComponent
      },
      {
        path: 'promotions',
        component: PromotionsComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
