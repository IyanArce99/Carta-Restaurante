import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carta-restaurante';
  sulfitos = '../assets/sulfitos.jpg';
  crustaceos = '../assets/crustaceos.jpg';
  pescados = '../assets/pescados.jpg';
  gluten = '../assets/gluten.jpg';
  lacteos = '../assets/lacteos.jpg';
  huevos = '../assets/huevos.jpg';
  frutos = '../assets/frutos.jpg';

}
