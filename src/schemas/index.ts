import * as schemas from './configs';
export * as defaultConfigs from './defaultConfigs';
import { compose } from './utils';

export function getSchemaByType(type: string, language: Lang): string | undefined {
  if (!schemas[type]) return;
  return compose(schemas[type], language);
}

export type Lang = 'zh-CN' | 'en-US';