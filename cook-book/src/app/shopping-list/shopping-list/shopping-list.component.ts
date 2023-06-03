import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit {
  constructor(private app: AppComponent) { }
  list:any;

  ngOnInit() {
    this.app.setTitle('Add your groceries to shopping list | FoodGram');
    this.list = localStorage.getItem('shopping list');
    this.list = JSON.parse(this.list);
  }

    removeFromList(index : any) {
    this.list.splice(index, 1);
    localStorage.setItem('shopping list', JSON.stringify(this.list));
  }
}
