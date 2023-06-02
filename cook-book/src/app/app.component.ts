import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cook-book';

    public constructor(private titleService: Title,
    ) { }

   public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
