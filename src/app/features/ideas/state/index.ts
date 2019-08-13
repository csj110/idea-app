import { Idea } from "@app/model/idea";
import * as Store from "@app/store/app-store.module";
import { Entity } from "@app/model/entity";

export interface IdeaState {
  ideas: Entity<Idea>;
  loading: boolean;
  loaded: boolean;
  selectedIdea?: string;
}

export interface AppState extends Store.AppState {
  ideas: IdeaState;
}
