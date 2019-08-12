import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule, ActionReducerMap } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import {
  RouterReducerState,
  routerReducer,
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";

import { errorReducer, ErrorState } from "./reducers/errors.reducer";
import { AuthEffect } from "./effects/auth.effect";
import { AuthState, authReducer } from "./reducers/auth.reducer";
import { RouterStateUrl, CustomSerializer } from "./reducers/router.reducer";

export interface AppState {
  error: ErrorState;
  auth: AuthState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer,
  router: routerReducer
};

export const effects = [AuthEffect];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
  ]
})
export class AppStoreModule {}
