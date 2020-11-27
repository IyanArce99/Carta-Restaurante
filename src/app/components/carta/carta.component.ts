import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
