import { IdeaState } from ".";
import { Action, IdeaActions } from "./idea.action";
import { IdeasComponent } from "../ideas/ideas.component";

const initialState: IdeaState = {
  ideas: {},
  loading: false,
  loaded: false,
  selectedIdea: null
};

export const ideaReducer: (state: IdeaState, action: Action) => IdeaState = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case IdeaActions.LOAD_IDEAS:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.LOAD_IDEA:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case IdeaActions.CREATE_IDEA:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.UPDATE_IDEA:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.DELETE_IDEA:
      return { ...state, loading: true, loaded: false };
    case IdeaActions.LOAD_IDEAS_SUCCESS:
      const ideas = action.payload.reduce(
        (acc, idea) => ({
          ...acc,
          [idea.id]: idea
        }),
        state.ideas
      );
      return {
        ...state,
        ideas,
        loading: false,
        loaded: true
      };
    case IdeaActions.LOAD_IDEA_SUCCESS:
      return {
        ...state,
        ideas: {
          ...state.ideas,
          [action.payload.id]: action.payload
        },
        loading: false,
        loaded: true,
        selectedIdea: action.payload.id
      };
    case IdeaActions.CREATE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: { ...state.ideas, [action.payload.id]: action.payload },
        loading: false,
        loaded: true
      };
    case IdeaActions.UPDATE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: { ...state.ideas, [action.payload.id]: action.payload },
        loading: false,
        loaded: true
      };
    case IdeaActions.DELETE_IDEA_SUCCESS:
      delete state.ideas[action.payload];
      return {
        ...state,
        ideas: state.ideas,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
};
