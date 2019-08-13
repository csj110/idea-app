import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CommentDTO } from "@app/model/comment";
import { User } from "@app/model/user";
import { Idea } from "@app/model/idea";

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

  getUsers(page?: string): Observable<User[]> {
    const endpoint = page ? `user/all?page=${page}` : "user/all";
    return this.request("GET", endpoint);
  }

  getUser(username: string): Observable<User> {
    return this.request("GET", `user/${username}`);
  }

  getIdeas(page?: number): Observable<Idea[]> {
    const endpoint = page ? `idea/all?page=${page}` : "idea/all";
    return this.request("GET", endpoint);
  }

  getNewestIdeas(page?: number): Observable<Idea[]> {
    const endpoint = page ? `idea/newest?page=${page}` : "idea/newest";
    return this.request("GET", endpoint);
  }

  getIdea(id: string): Observable<Idea> {
    return this.request("GET", `idea/${id}`);
  }

  createIdea(data): Observable<Idea> {
    return this.request("POST", `idea`, data);
  }

  updateIdea(id: string, data): Observable<Idea> {
    return this.request("PUT", `idea/${id}`, data);
  }

  deleteIdea(id: string): Observable<Idea> {
    return this.request("DELETE", `idea/${id}`);
  }

  downvoteIdea(id: string): Observable<Idea> {
    return this.request("POST", `idea/${id}/downvote`);
  }

  upvoteIdea(id: string): Observable<Idea> {
    return this.request("POST", `idea/${id}/upvote`);
  }

  bookmarkIdea(id: string): Observable<User> {
    return this.request("POST", `idea/${id}/bookmark`);
  }

  uunbookmarkIdea(id: string): Observable<User> {
    return this.request("POST", `idea/${id}/unbookmark`);
  }

  getCommentsByIdea(id: string, page?: number): Observable<Comment[]> {
    const endpoint = page
      ? `comment/idea/${id}?page=${page}`
      : `comment/idea/${id}`;
    return this.request("GET", endpoint);
  }

  getCommentsByUser(id: string, page?: number): Observable<Comment[]>  {
    const endpoint = page
      ? `comment/user/${id}?page=${page}`
      : `comment/user/${id}`;
    return this.request("GET", endpoint);
  }

  getComment(id: string): Observable<Comment>  {
    return this.request("GET", `comment/${id}`);
  }

  createComment(id: string, data: CommentDTO): Observable<Comment[]>  {
    return this.request("POST", `comment/idea/${id}`, data);
  }

  deleteComment(id: string): Observable<Comment[]>  {
    return this.request("DELETE", `comment/${id}`);
  }
}
