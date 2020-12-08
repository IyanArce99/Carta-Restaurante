import { TestBed } from '@angular/core/testing';

import { CategoryDrinksService } from './category-drinks.service';

describe('CategoryDrinksService', () => {
  let service: CategoryDrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryDrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
