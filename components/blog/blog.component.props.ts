import { Author } from "../../models";

export interface BlogComponentProps {
  title: string;
  description: string;
  tag: string;
  date: string;
  author: Author;
  image: string;
  slug: string;
}
