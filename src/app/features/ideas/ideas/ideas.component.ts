import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Idea } from "@app/model/idea";
import { Store } from "@ngrx/store";
import { AppState } from "../state";
import { LoadIdeas } from "../state/idea.action";
import { selectAllIdeas } from "../state/idea.seletor";

@Component({
  selector: "app-ideas",
  templateUrl: "./ideas.component.html",
  styleUrls: ["./ideas.component.scss"]
})
export class IdeasComponent implements OnInit {
  ideas: Observable<Idea[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadIdeas());
    this.ideas = this.store.select(selectAllIdeas);
  }
}
