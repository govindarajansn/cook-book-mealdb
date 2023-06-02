import { Component, OnInit } from '@angular/core';
import { MealRecipesUtilsService } from '../../services/meal-recipes-utils.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit  {
  categories : any = {};
//   constructor(private mealRecipesUtilsService: MealRecipesUtilsService) {
//   const navCached = JSON.parse(localStorage.getItem('nav'));
//   if (navCached !== null && Object.keys(navCached).length !== 0) {
//     this.categories = navCached;
//   }
// }
  constructor(private mealRecipesUtilsService: MealRecipesUtilsService) {
  const navCached = localStorage.getItem('nav');
  console.log("navCached",navCached)
  if (navCached !== null) {
    const parsedNavCached = JSON.parse(navCached);
     console.log("parsedNavCached",parsedNavCached)
    if (parsedNavCached.length !== 0) {
      this.categories = parsedNavCached;
      console.log("categories",this.categories)
    }
  }
}

   ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    if (this.categories !== null) {
      return;
    }

    this.mealRecipesUtilsService.fetchAllCategories()
      .subscribe((categories) => {
        console.log("cat-e",categories)
        this.categories = categories;
        localStorage.setItem('nav', JSON.stringify(this.categories));
      });
  }
}
