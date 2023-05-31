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

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainComponent
  // },
  {
    path: 'category/:category.strCategory',
    component: MenuListComponent
  },
  // {
  //   path: 'category/:category.strCategory/:dish.strMeal/:dish.idMeal',
  //   component: RecipeComponent
  // },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  // {
  //   path: 'favourite-recipes',
  //   component: FavouritesComponent
  // },
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
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
