import { Category } from '@/entities';

export interface ICreatePostDTO {
  id?: string;
  title: string;
  description: string;
  authorId: string;
  categories?: Category[];
}
