import { AuthComponent } from "./components/auth/auth.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "auth", component: AuthComponent },
  { path: "users", loadChildren: "@app/features/user/user.module#UserModule" },
  { path: "ideas", loadChildren: "@app/features/ideas/ideas.module#IdeasModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
