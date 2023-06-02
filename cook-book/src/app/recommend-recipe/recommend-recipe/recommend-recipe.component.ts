import { Component, OnInit } from '@angular/core';
import { MealRecipesUtilsService, Recipes } from '../../services/meal-recipes-utils.service';

@Component({
  selector: 'app-recommend-recipe',
  templateUrl: './recommend-recipe.component.html',
  styleUrls: ['./recommend-recipe.component.scss']
})
export class RecommendRecipeComponent implements OnInit {
  constructor(private mealRecipesUtilsService: MealRecipesUtilsService) { }
  dishes:any;
  categoryNames:any = [];
  recommended:any;
  ngOnInit() {
    const temp = localStorage.getItem('nav')
    if(temp!=null){
      let categories = JSON.parse(temp);
      for (let category of categories.categories) {
      this.categoryNames = [...this.categoryNames, category]
    }
    this.recommended = this.categoryNames[Math.floor(Math.random() * this.categoryNames.length)];
    this.fetchRecommended(this.recommended.strCategory);
    }
   
  }

   fetchRecommended(category:any) {
    this.mealRecipesUtilsService.fetchCategories(category.toLowerCase())
      .subscribe((dishes: any) => {
        if (dishes.meals) {
          this.dishes = dishes.meals.splice(0, 3);
        }
      });
  }

  removeWhitespace(str:any) {
    return str.replace(/\s+/g, '-');
  }
}
