import * as schemas from './configs';
import { compose } from './utils';
import * as defaultConfigs from './defaultConfigs';

export function getSchemaByType(type: string, language: Lang): string | undefined {
  if (!schemas[type]) return;
  return compose(schemas[type], language);
}

export type Lang = 'zh-CN' | 'en-US';

export { defaultConfigs };
