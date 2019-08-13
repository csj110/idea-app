import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UiModule } from "@app/ui.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { userReducer } from "./state/user.reducer";
import { UserEffects } from "./state/user.effect";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "", component: UserComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    StoreModule.forFeature("users", userReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule {}
