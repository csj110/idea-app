import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  private api: string = environment.api_server + "/api";

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    return this.http.request(method, `${this.api}/${endpoint}`, {
      body,
      headers: {
        authorization: `Bearer ${this.auth.token}`
      }
    });
  }

  getUsers(page?: string) {
    const endpoint = page ? `user/all?page=${page}` : "user/all";
    return this.request("GET", endpoint);
  }

  getUser(username: string): Observable<any> {
    return this.request("GET", `user/${username}`);
  }

  getIdeas(page: number) {
    const endpoint = page ? `idea/all?page=${page}` : "idea/all";
    return this.request("GET", endpoint);
  }

  getNewestIdeas(page: number) {
    const endpoint = page ? `idea/newest?page=${page}` : "idea/newest";
    return this.request("GET", endpoint);
  }

  getIdea(id: string) {
    return this.request("GET", `idea/${id}`);
  }

  createIdea(data) {
    return this.request("POST", `idea`, data);
  }

  updateIdea(id: string, data) {
    return this.request("PUT", `idea/${id}`, data);
  }

  deleteIdea(id: string) {
    return this.request("DELETE", `idea/${id}`);
  }

  downvoteIdea(id: string) {
    return this.request("POST", `idea/${id}/downvote`);
  }

  upvoteIdea(id: string) {
    return this.request("POST", `idea/${id}/upvote`);
  }

  bookmarkIdea(id: string) {
    return this.request("POST", `idea/${id}/bookmark`);
  }

  uunbookmarkIdea(id: string) {
    return this.request("POST", `idea/${id}/unbookmark`);
  }
}
