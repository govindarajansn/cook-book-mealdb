import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { MealRecipesUtilsService } from '../../services/meal-recipes-utils.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{
   data : any;
   id : any;
   ingredients : any = [];
   shopping : any = [];

    constructor(private mealRecipesUtilsService: MealRecipesUtilsService,
    private route: ActivatedRoute, private router: Router,
    private app: AppComponent,
    private sanitizer: DomSanitizer) { }

    showRecipes() {
    this.mealRecipesUtilsService.fetchRecipes(this.id)
      .subscribe((data: any) => {
        this.data = data.meals[0];
        this.app.setTitle(`${data.meals[0].strMeal} Recipe | Foodster `);
        localStorage.setItem(this.id, JSON.stringify(this.data));
        this.listIngredients();
        localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
      });
    }

      ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("params",params)
      this.id = params['dish.idMeal'];
    });
    let temp = localStorage.getItem(this.id)
    if(temp !== null){
    const cachedRecipe = JSON.parse(temp);
     let ingredients = localStorage.getItem('ingredients');
     if(ingredients!== null){
    const ingredientsFromCache = JSON.parse(ingredients);
    if (cachedRecipe !== null && ingredientsFromCache !== null) {
      this.data = cachedRecipe;
      this.ingredients = ingredientsFromCache;
    }}} else {
      this.showRecipes();
    }
   
  }
     listIngredients() {
    for (let i = 1; i < 21; i++) {
      let ingredient;
      if (this.data[`strMeasure${i}`] !== null
        && this.data[`strMeasure${i}`] !== undefined
        && this.data[`strIngredient${i}`] !== undefined
        && this.data[`strIngredient${i}`] !== null) {
        ingredient = `${this.data[`strMeasure${i}`]} ${this.data[`strIngredient${i}`]}`;
        this.ingredients = [...this.ingredients, ingredient];
      }
    }
  }

  addToList(index:any) {
    if (this.shopping.includes(this.ingredients[index]) === false) {
      this.shopping = [...this.shopping, this.ingredients[index]];
      localStorage.setItem('shopping list', JSON.stringify(this.shopping));
    }
  }

  saveRecipe(i:any) {
    this.mealRecipesUtilsService.saveRecipe(i);
  }

getVideoURL() {
  if (this.data !== null && this.data !== undefined) {
    let splitUrl = this.data.strYoutube.split('=');
    let id = splitUrl[1];
    let url = `https://www.youtube.com/embed/${id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
  // Add a default return statement here
  return null; // or return some default URL if applicable
}



}
