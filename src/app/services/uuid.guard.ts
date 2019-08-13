import { AppState } from "./../store/app-store.module";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { take, map } from "rxjs/operators";
import { uuid } from "@app/utilities/uuid";

@Injectable({
  providedIn: "root"
})
export class UuidGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store
      .select(state => state.router.state.params.id)
      .pipe(
        take(1),
        map(id => uuid.test(id))
      );
  }
}
