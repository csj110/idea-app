import { User } from "@app/model/user";
import { Action, AuthActionTypes } from "../actions/auth.action";

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null
};

export const authReducer: (state: AuthState, action: Action) => AuthState = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case AuthActionTypes.SET_CURENT_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
