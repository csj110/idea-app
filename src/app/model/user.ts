import { Idea } from "./idea";

export interface User {
  id?: string;
  username: string;
  created: Date;
  token?: string;
  ideas?: Idea[];
  bookmarks?: Idea[];
  comments: Comment[];
}

export interface UserDTO {
  username: string;
  password: string;
}
