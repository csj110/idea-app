import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@env/environment";
import { AuthType, AuthDTO } from "@app/model/auth";
import { mergeMap } from "rxjs/operators";
import { User } from "@app/model/user";
import { of, ObservedValueOf, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private api: string = environment.api_server + "/auth";

  private auth(authType: AuthType, data: AuthDTO): Observable<User> {
    return this.http.post(`${this.api}/${authType}`, data).pipe(
      mergeMap((user: User) => {
        this.token = user.token;
        return of(user);
      })
    );
  }

  login(data: AuthDTO) {
    return this.auth("login", data);
  }

  register(data: AuthDTO) {
    return this.auth("register", data);
  }

  whoami() {
    return this.http.get(`${this.api}/whoami`, {
      headers: {
        authorization: `Bearer ${this.token}`
      }
    });
  }

  get token() {
    return localStorage.getItem("idea_token");
  }

  set token(val: string) {
    if (val) {
      localStorage.setItem("idea_token", val);
    }
  }
}
