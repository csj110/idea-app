import { UuidGuard } from "./../../services/uuid.guard";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UiModule } from "@app/ui.module";
import { RouterModule, Routes } from "@angular/router";
import { IdeasComponent } from "./ideas/ideas.component";
import { StoreModule } from "@ngrx/store";
import { ideaReducer } from "./state/idea.reducer";
import { EffectsModule } from "@ngrx/effects";
import { IdeaEffects } from "./state/idea.effect";
import { IdeaComponent } from "./ideas/idea/idea.component";
import { SelectIdeaComponent } from "./select-idea/select-idea.component";
import { IdeaResolver } from "./idea.resolver";

const routes: Routes = [
  { path: "", component: IdeasComponent },
  {
    path: ":id",
    canActivate: [UuidGuard],
    component: SelectIdeaComponent,
    resolve: { data: IdeaResolver }
  }
];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent, SelectIdeaComponent],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("ideas", ideaReducer),
    EffectsModule.forFeature([IdeaEffects])
  ],
  providers: [IdeaResolver]
})
export class IdeasModule {}
