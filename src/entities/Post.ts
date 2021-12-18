import { v4 as uuid } from 'uuid';

export class Post {
  id?: string;
  title: string;
  description: string;
  authorId: string;
  categories: string[];
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
