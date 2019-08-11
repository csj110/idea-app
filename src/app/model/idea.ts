import { User } from "./user";

export interface IdeaDTO {
  idea: string;
  desc: string;
}

export interface Idea {
  id?: string;
  idea: string;
  desc: string;
  created: Date;
  updated: Date;
  author: User;
  upvotes?: number;
  downvotes?: number;
}
