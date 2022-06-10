import type { Post } from '../types';

export const byDate = (post1: Post, post2: Post) =>
  post1.date > post2.date ? -1 : 1;