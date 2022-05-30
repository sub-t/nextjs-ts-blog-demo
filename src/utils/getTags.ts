import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import { getBaseDirectory } from './getBaseDirectory';

const baseDir = getBaseDirectory();
const files: string[] = glob.sync(`${baseDir}/**/*.md`);

const contents = (path: string) => {
  return fs.readFileSync(path, 'utf8');
};

export const getTags = (category?: string): string[] => {
  const tags = files
    .flatMap((path) => matter(contents(path)).data.tags)
    .filter((data) => category === null || data.category === category);

  return distinct(tags);
};

const distinct = (array: string[]): string[] => {
  return Array.from(new Set(array)).sort();
};
