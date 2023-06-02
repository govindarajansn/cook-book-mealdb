import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { MealRecipesUtilsService, Recipes } from '../../services/meal-recipes-utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  random : any = {};
  ingredients : any= [];

  constructor(private mealRecipesUtilsService: MealRecipesUtilsService,
    private route: ActivatedRoute,
    private app: AppComponent) {
      const randomCache = localStorage.getItem('random');
      const ingredientCache = localStorage.getItem('ingredients');
      if(randomCache!=null){
        const randomFromCache = JSON.parse(randomCache);
        if(ingredientCache!=null){
          const ingredientsFromCache = JSON.parse(ingredientCache);
          if (randomFromCache.length !== 0) {
             this.random = randomFromCache;
            this.ingredients = ingredientsFromCache;
         }
        }
      }
   }

    ngOnInit() {
    if(this.random){
      this.fetchRandomRecipe();
    }
    this.app.setTitle(`Tasty Recipes and Food Inspirations | Foodster`);
  }
  
fetchRandomRecipe() {
  this.mealRecipesUtilsService.fetchRandom()
    .subscribe(
      (data: any) => {
        console.log("data",data)
        this.random = data.meals[0];
        localStorage.setItem('random', JSON.stringify(data.meals[0]));
        this.listIngredients();
        localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
      },
      (error: any) => {
        // Handle the error appropriately
        console.error('Error fetching random recipe:', error);
      }
    );
}


  listIngredients() {
    this.ingredients = [];
    for (let i = 1; i < 21; i++) {
      let ingredient;
      if (this.random[`strMeasure${i}`] !== null
        && this.random[`strMeasure${i}`] !== undefined
        && this.random[`strIngredient${i}`] !== undefined
        && this.random[`strIngredient${i}`] !== null) {
        ingredient = `${this.random[`strMeasure${i}`]} ${this.random[`strIngredient${i}`]}`;
        this.ingredients = [...this.ingredients, ingredient];
      }
    }
  }

  removeWhitespace(str:any) {
    return str.replace(/\s+/g, '-');
  }
}
