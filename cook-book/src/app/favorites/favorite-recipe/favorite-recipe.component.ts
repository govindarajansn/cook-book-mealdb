import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MealRecipesUtilsService } from '../../services/meal-recipes-utils.service';

@Component({
  selector: 'app-favorite-recipe',
  templateUrl: './favorite-recipe.component.html',
  styleUrls: ['./favorite-recipe.component.scss']
})
export class FavoriteRecipeComponent implements OnInit {
    constructor(private mealRecipesUtilsService: MealRecipesUtilsService,
    private app: AppComponent) { }
    favs : any;
    favourites : any = [];

    ngOnInit() {
    this.app.setTitle('Cookbook. All your favourite recipes in one place | Foodster');
    this.favs = localStorage.getItem('favourites');
    this.favs = JSON.parse(this.favs);
    this.showFavs();
    }
      showFavs() {
    if (this.favs !== null) {
      for (const fave of this.favs) {
        this.mealRecipesUtilsService.fetchRecipes(fave)
          .subscribe((data: any) => {
            this.favourites = [...this.favourites, data.meals[0]];
          });
      }
    }
  }
  removeWhitespace(str:any) {
    return str.replace(/\s+/g, '-');
  }

  removeFromFavourites(index:any) {
    this.favourites.splice(index, 1);
    this.favs.splice(index, 1);
    localStorage.setItem('favourites', JSON.stringify(this.favs));
  }
}
