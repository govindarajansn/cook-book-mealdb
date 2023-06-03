import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { MealRecipesUtilsService } from '../services/meal-recipes-utils.service';

@Component({
  selector: 'app-categories-listing',
  templateUrl: './categories-listing.component.html',
  styleUrls: ['./categories-listing.component.scss']
})
export class CategoriesListingComponent {
    dishes : any = [];
    category : any;
    constructor(private mealRecipesUtilsService: MealRecipesUtilsService,
    private route: ActivatedRoute,
    private app: AppComponent) { }
    
    ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category.strCategory'];
      this.app.setTitle(`Quick and Tasty ${this.category.charAt(0).toUpperCase() + this.category.slice(1)} Recipes | FoodGram`);
      const dishes = localStorage.getItem(this.category);
      if(dishes){
      const cachedDishes = JSON.parse(dishes);
      if (cachedDishes !== null) {
        this.dishes = cachedDishes;
      }} else {
        this.fetchCategoryDishes(this.category);
      }
    });
  }
     fetchCategoryDishes(category:any) {
    this.mealRecipesUtilsService.fetchCategories(category)
      .subscribe((data: any) => {
        if (data.meals !== null) {
          this.dishes = data.meals;
          localStorage.setItem(this.category, JSON.stringify(this.dishes));
        } else {
          this.mealRecipesUtilsService.fetchArea(category)
            .subscribe((area: any) => {
              this.dishes = area.meals;
              localStorage.setItem(this.category, JSON.stringify(this.dishes));
            });
        }
      });
  }
  removeWhitespace(str:any) {
    return str.replace(/\s+/g, '-');
  }

  saveRecipe(i:any) {
    this.mealRecipesUtilsService.saveRecipe(i);
  }
}
