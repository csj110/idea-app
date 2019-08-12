import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";
import { AppStoreModule } from "@app/store/app-store.module";
import { UiModule } from "./ui.module";
import { AuthComponent } from "./components/auth/auth.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './components/navbar/navbar.component' 
@NgModule({
  declarations: [AppComponent, AuthComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppStoreModule,
    UiModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
