import { TestBed } from '@angular/core/testing';

import { MealRecipesUtilsService } from './meal-recipes-utils.service';

describe('MealRecipesUtilsService', () => {
  let service: MealRecipesUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealRecipesUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
