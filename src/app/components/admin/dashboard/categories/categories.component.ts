import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
