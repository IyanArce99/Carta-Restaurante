import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesdrinksComponent } from './categoriesdrinks.component';

describe('CategoriesdrinksComponent', () => {
  let component: CategoriesdrinksComponent;
  let fixture: ComponentFixture<CategoriesdrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesdrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesdrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
