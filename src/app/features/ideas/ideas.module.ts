import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiModule } from "@app/ui.module";
import { RouterModule, Routes } from "@angular/router";
import { IdeasComponent } from "./ideas/ideas.component";
import { StoreModule } from "@ngrx/store";
import { ideaReducer } from "./state/idea.reducer";
import { EffectsModule } from "@ngrx/effects";
import { IdeaEffects } from './state/idea.effect';
import { IdeaComponent } from './ideas/idea/idea.component';

const routes: Routes = [
  {
    path: "",
    component: IdeasComponent
  }
];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("ideas", ideaReducer),
    EffectsModule.forFeature([IdeaEffects])
  ]
})
export class IdeasModule {}
