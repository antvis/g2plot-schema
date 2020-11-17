import * as parts from './parts';
import { Lang } from '.';

const tab = `  `;

export function compose(items: Array<string | string[]>, lang: Lang): string {
  const schema = items
    .map(item => {
      if (Array.isArray(item)) {
        let params: string[];
        [item, ...params] = item;
        if (parts[item]) return parts[item](lang, ...params);
      } else {
        if (parts[item]) return parts[item](lang);
        return '';
      }
    })
    .map((item: string) =>
      item
        .split('\n')
        .map(item => `${tab}${item}`)
        .join('\n')
    )
    .join('\n');
  return `Object(Schema) {
${schema}
}`;
}
