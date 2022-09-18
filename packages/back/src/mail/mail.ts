import { join } from 'path';
import { LocalsObject, compileFile } from 'pug';

export function sendContributionNotice(locals: LocalsObject) {
  const path = join(__dirname, './template/contribution-notice.pug');
  const compiled = compileFile(path);
  const html = compiled(locals);
  return html;
}
