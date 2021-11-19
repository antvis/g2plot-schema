import { Language } from '../i18n';

export interface FieldProps {
  field?: string;
  parentData?: any;
  data: any;
  schema: any;
  validate(...args: any[]): any;
  onChange(e: any): void;
  size: 'small' | 'large' | 'middle';
  lang: Language;

  title?: string | null;
  onClick?(e): void;
  key?: string;
}
