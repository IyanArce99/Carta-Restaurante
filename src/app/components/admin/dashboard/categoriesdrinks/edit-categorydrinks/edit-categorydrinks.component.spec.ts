import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategorydrinksComponent } from './edit-categorydrinks.component';

describe('EditCategorydrinksComponent', () => {
  let component: EditCategorydrinksComponent;
  let fixture: ComponentFixture<EditCategorydrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategorydrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategorydrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
