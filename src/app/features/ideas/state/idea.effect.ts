import { Injectable } from "@angular/core";
import { ApiService } from "@app/services/api.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { AppState } from ".";
import { Observable, of } from "rxjs";
import {
  LoadIdeas,
  IdeaActions,
  LoadIdeasSuccess,
  CreateIdea,
  CreateIdeaSuccess,
  UpdateIdea,
  UpdateIdeaSuccess,
  DeleteIdea,
  DeleteIdeaSuccess,
  LoadIdeaSuccess,
  LoadIdea
} from "./idea.action";
import { mergeMap, map, catchError, tap, withLatestFrom } from "rxjs/operators";
import { RemoveError, AddError } from "@app/store/actions/errors.action";

@Injectable()
export class IdeaEffects {
  constructor(
    private apiService: ApiService,
    private action$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  loadIdeas$: Observable<Action> = this.action$.pipe(
    ofType<LoadIdeas>(IdeaActions.LOAD_IDEAS),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.apiService.getIdeas().pipe(
        map(ideas => new LoadIdeasSuccess(ideas)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  loadIdea$: Observable<Action> = this.action$.pipe(
    ofType<LoadIdea>(IdeaActions.LOAD_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.apiService.getIdea(action.payload).pipe(
        map(idea => new LoadIdeaSuccess(idea)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  createIdeas$: Observable<Action> = this.action$.pipe(
    ofType<CreateIdea>(IdeaActions.CREATE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.apiService.createIdea(action.payload).pipe(
        map(idea => new CreateIdeaSuccess(idea)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  updateIdeas$: Observable<Action> = this.action$.pipe(
    ofType<UpdateIdea>(IdeaActions.UPDATE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.apiService.updateIdea(action.payload.id, action.payload).pipe(
        map(idea => new UpdateIdeaSuccess(idea)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );

  @Effect()
  deleteIdeas$: Observable<Action> = this.action$.pipe(
    ofType<DeleteIdea>(IdeaActions.DELETE_IDEA),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.apiService.deleteIdea(action.payload).pipe(
        map(idea => new DeleteIdeaSuccess(idea.id)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );
}
