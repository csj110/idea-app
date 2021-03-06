import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "@app/store/app-store.module";
import { validatewWhiteSpace } from "@app/utilities/validators";
import { LoginUser, RegisterUser } from "@app/store/actions/auth.action";
import { AuthDTO } from "@app/model/auth";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      username: this.fb.control("", [Validators.required, validatewWhiteSpace]),
      password: this.fb.control("", [Validators.required, validatewWhiteSpace])
    });
  }

  login() {
    const val = this.authForm.getRawValue() as AuthDTO;
    this.store.dispatch(new LoginUser(val));
  }

  register() {
    const val = this.authForm.getRawValue() as AuthDTO;
    this.store.dispatch(new RegisterUser(val));
  }
}
