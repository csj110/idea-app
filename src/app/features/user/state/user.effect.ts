import { Injectable } from "@angular/core";
import { ApiService } from "@app/services/api.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { AppState } from ".";
import { Observable, of } from "rxjs";
import { UserActions, LoadUsers, LoadUsersSuccess } from "./user.action";
import { mergeMap, catchError, map, tap } from "rxjs/operators";
import { AddError, RemoveError } from "@app/store/actions/errors.action";

@Injectable()
export class UserEffects {
  constructor(
    private apiService: ApiService,
    private action$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  loadUsers$: Observable<Action> = this.action$.pipe(
    ofType<LoadUsers>(UserActions.LOAD_USERS),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.apiService.getUsers().pipe(
        map(users => new LoadUsersSuccess(users)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );
}
