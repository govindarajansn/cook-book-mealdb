import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { MenuListComponent } from './menu-list/menu-list/menu-list.component';
import { SubContainerComponent } from './sub-container/sub-container/sub-container.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { RecommendRecipeComponent } from './recommend-recipe/recommend-recipe/recommend-recipe.component';
import { ErrorComponent } from './error/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import { MainComponent } from './main/main/main.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FavoriteRecipeComponent } from './favorites/favorite-recipe/favorite-recipe.component';
import { CategoriesListingComponent } from './categories-listing/categories-listing.component';
import { RecipesComponent } from './categories-listing/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'category/:category.strCategory',
    component: CategoriesListingComponent
  },
  {
    path: 'category/:category.strCategory/:dish.strMeal/:dish.idMeal',
    component: RecipesComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'favourite-recipes',
    component: FavoriteRecipeComponent
  },
  // {
  //   path: '404',
  //   component: ErrorComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: '/404'
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuListComponent,
    SubContainerComponent,
    ShoppingListComponent,
    CategoriesComponent,
    RecommendRecipeComponent,
    ErrorComponent,
    MainComponent,
    FavoriteRecipeComponent,
    CategoriesListingComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})    
export class AppModule { }
