import * as React from 'react';
import Textfield from './textfield';
import Color from './color';
import Switch from './switch';
import Enum from './enum';
import MinMax from './min-max';
import NumberFiled from './number';
import ObjectField from './object';
import { FieldProps } from './types';

function getItem(type: string, props: FieldProps) {
  // 根据不同的输入类型选择对应的处理模块
  switch (type) {
    case 'boolean':
      // @ts-ignore
      return <Switch {...props} />;
    case 'color':
      return <Color {...props} />;
    case 'enum':
      return <Enum {...props} />;
    case 'number':
      return <NumberFiled {...props} />;
    case 'minmax':
      return <MinMax {...props} />;
    case 'object':
      return <ObjectField {...props} />;
    default:
      return <Textfield {...props} />;
  }
}

export default { getItem };
