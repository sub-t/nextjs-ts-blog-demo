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
    .map((path) => matter(contents(path)).data)
    .filter((data) => category === undefined || data.category === category)
    .flatMap((data) => data.tags);

  return distinct(tags);
};

const distinct = (array: string[]): string[] => {
  return Array.from(new Set(array)).sort();
};
