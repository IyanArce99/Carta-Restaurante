import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from'@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/admin/login/login.component';
import { CartaComponent } from './components/carta/carta.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import * as $ from 'jquery';
import { DashesComponent } from './components/admin/dashboard/dashes/dashes.component';
import { CategoriesComponent } from './components/admin/dashboard/categories/categories.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// AM
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IndexComponent } from './components/index/index.component';
import { PromotionsComponent } from './components/admin/dashboard/promotions/promotions.component';
import { DrinksComponent } from './components/admin/dashboard/drinks/drinks.component';
import { CategoriesdrinksComponent } from './components/admin/dashboard/categoriesdrinks/categoriesdrinks.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { FormsModule }   from '@angular/forms';
import { EditDashComponent } from './components/admin/dashboard/dashes/edit-dash/edit-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartaComponent,
    DashboardComponent,
    DashesComponent,
    CategoriesComponent,
    RegisterComponent,
    IndexComponent,
    PromotionsComponent,
    DrinksComponent,
    CategoriesdrinksComponent,
    BebidasComponent,
    PromocionesComponent,
    EditDashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
