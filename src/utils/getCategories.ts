import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import { getBaseDirectory } from './getBaseDirectory';

const baseDir = getBaseDirectory();
const files: string[] = glob.sync(`${baseDir}/**/*.md`);

const contents = (path: string) => {
  return fs.readFileSync(path, 'utf8');
};

export const getCategories = (): string[] => {
  const categories = files.map((path) => matter(contents(path)).data.category);
  return distinct(categories);
};

const distinct = (array: string[]): string[] => {
  return Array.from(new Set(array)).sort();
};
