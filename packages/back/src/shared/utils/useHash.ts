import { createHash } from 'crypto';
export function useHash(content: string, Iterations = 500): string {
  let res = content;
  for (let i = 0; i < Iterations; i++) {
    res = createHash('md5').update(res).digest('hex');
  }
  return res;
}
