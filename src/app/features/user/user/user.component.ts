import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "@app/model/user";
import { Store } from "@ngrx/store";
import { AppState } from "../state/index";
import { LoadUsers } from "../state/user.action";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.users = this.store.select(state => state.users.users);
  }
}
