import { selectCurrentIdea } from "./../state/idea.seletor";
import { AppState } from "../state/index";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription, Observable } from "rxjs";
import { Idea } from "@app/model/idea";
import { take } from "rxjs/operators";

@Component({
  selector: "app-select-idea",
  templateUrl: "./select-idea.component.html",
  styleUrls: ["./select-idea.component.scss"]
})
export class SelectIdeaComponent implements OnInit, OnDestroy {
  private idea: Idea;
  private subscription$: Subscription;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription$ = this.store
      .select(selectCurrentIdea)
      .subscribe(idea => {
        console.log(idea);
        this.idea = idea;
      });
  }
  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
