import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendRecipeComponent } from './recommend-recipe.component';

describe('RecommendRecipeComponent', () => {
  let component: RecommendRecipeComponent;
  let fixture: ComponentFixture<RecommendRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendRecipeComponent]
    });
    fixture = TestBed.createComponent(RecommendRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
