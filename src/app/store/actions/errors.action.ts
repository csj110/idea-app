import { Action } from "@ngrx/store";

export enum ErrorActionType {
  ADD_ERROR = "[error] add error",
  REMOVE_ERROR = "[error] remove error"
}

export class AddError implements Action {
  readonly type = ErrorActionType.ADD_ERROR;
  constructor(public payload: any) {}
}

export class RemoveError implements Action {
  readonly type = ErrorActionType.REMOVE_ERROR;
  constructor() {}
}

export type Action = AddError | RemoveError;
