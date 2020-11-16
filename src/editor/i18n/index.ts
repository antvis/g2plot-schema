import en_US from './en-US';
import zh_CN from './zh-CN';

export const locales = {
  'zh-CN': zh_CN,
  'en-US': en_US,
};

export type Language = keyof typeof locales;
