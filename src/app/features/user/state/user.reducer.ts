import { UserState } from ".";
import { UserActions, Action } from "./user.action";

const initialState: UserState = {
  users: [],
  loading: false,
  loaded: false
};

export const userReducer: (state: UserState, action: Action) => UserState = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case UserActions.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        loaded: true
      };
    case UserActions.LOAD_USERS:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
