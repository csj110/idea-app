import { Action } from "@ngrx/store";
import { Idea, IdeaDTO } from "@app/model/idea";

export enum IdeaActions {
  LOAD_IDEAS = "[Idea] load ideas",
  LOAD_IDEAS_SUCCESS = "[Idea] load ideas success",

  LOAD_IDEA = "[Idea] load idea",
  LOAD_IDEA_SUCCESS = "[Idea] load idea success",

  CREATE_IDEA = "[Idea] create idea",
  CREATE_IDEA_SUCCESS = "[Idea] create idea success",

  UPDATE_IDEA = "[Idea] update idea ",
  UPDATE_IDEA_SUCCESS = "[Idea] update idea success",

  DELETE_IDEA = "[Idea] delete idea ",
  DELETE_IDEA_SUCCESS = "[Idea] delte idea success"
}

export class LoadIdeas implements Action {
  readonly type = IdeaActions.LOAD_IDEAS;
}

export class LoadIdeasSuccess implements Action {
  readonly type = IdeaActions.LOAD_IDEAS_SUCCESS;
  constructor(public payload: Idea[]) {}
}

export class LoadIdea implements Action {
  readonly type = IdeaActions.LOAD_IDEA;
  constructor(public payload: string) {}
}

export class LoadIdeaSuccess implements Action {
  readonly type = IdeaActions.LOAD_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class CreateIdea implements Action {
  readonly type = IdeaActions.CREATE_IDEA;
  constructor(public payload: IdeaDTO) {}
}

export class CreateIdeaSuccess implements Action {
  readonly type = IdeaActions.CREATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class UpdateIdea implements Action {
  readonly type = IdeaActions.UPDATE_IDEA;
  constructor(public payload: Partial<IdeaDTO>) {}
}

export class UpdateIdeaSuccess implements Action {
  readonly type = IdeaActions.UPDATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class DeleteIdea implements Action {
  readonly type = IdeaActions.DELETE_IDEA;
  constructor(public payload: string) {}
}

export class DeleteIdeaSuccess implements Action {
  readonly type = IdeaActions.DELETE_IDEA_SUCCESS;
  constructor(public payload: string) {}
}

export type Action =
  | LoadIdeas
  | LoadIdeasSuccess
  | LoadIdea
  | LoadIdeaSuccess
  | CreateIdea
  | CreateIdeaSuccess
  | UpdateIdea
  | UpdateIdeaSuccess
  | DeleteIdea
  | DeleteIdeaSuccess;
