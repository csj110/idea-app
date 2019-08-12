import { Action } from "@ngrx/store";
import { User } from "@app/model/user";
import { AuthDTO } from "@app/model/auth";

export enum AuthActionTypes {
  LOGIN_USER = "[AUTH] Login",
  REGISTER_USER = "[AUTH] Register",
  SET_CURENT_USER = "[AUTH] Set Current User",
  SET_INITIAL_USER = "[AUTH] Set initial User"
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.LOGIN_USER;
  constructor(public payload: AuthDTO) {}
}

export class RegisterUser implements Action {
  readonly type = AuthActionTypes.REGISTER_USER;
  constructor(public payload: AuthDTO) {}
}

export class SetInitialUser implements Action {
  readonly type = AuthActionTypes.SET_INITIAL_USER;
  constructor() {}
}

export class SetCurrentUser implements Action {
  readonly type = AuthActionTypes.SET_CURENT_USER;
  constructor(public payload: User) {}
}

export type Action = LoginUser | RegisterUser | SetCurrentUser | SetInitialUser;
