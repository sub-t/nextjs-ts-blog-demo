import fs from 'fs';
import { basename } from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { getBaseDirectory } from './getBaseDirectory';
import { sortByDate } from './sort';
import type { Post } from '@/types';

const baseDir = getBaseDirectory();
const files: string[] = glob.sync(`${baseDir}/**/*.md`);

const getContents = (path: string) => {
  return fs.readFileSync(path, 'utf8');
};

export const getPostByPath = (path: string) => {
  return matter(getContents(`${baseDir}/${path}`));
};

export const getPosts = () => {
  return files
    .map((path) => mapToPostFromPath(path))
    .sort((post1, post2) => sortByDate(post1, post2));
};

const mapToPostFromPath = (path: string): Post => {
  const { data } = matter(getContents(path));
  [data.year, data.month] = data.date.split('-');
  data.slug = basename(path).replace(/\.md$/, '');

  return data as Post;
};

export const getLatestPosts = () => {
  return getPosts().slice(0, 3);
};

export const getPostsByCategory = (category: string) => {
  return getPosts().filter((post) => post.category === category);
};

export const getPostsByTag = (tag: string) => {
  return getPosts().filter((post) => post.tags.includes(tag));
};
