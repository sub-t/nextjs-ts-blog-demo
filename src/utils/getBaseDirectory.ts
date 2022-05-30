import { join } from 'path';

export const getBaseDirectory = () =>
  // glob対応
  join(process.cwd(), 'src/posts').replaceAll('\\', '/');
