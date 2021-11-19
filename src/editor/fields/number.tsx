import * as React from 'react';
import { InputNumber, Form } from 'antd';
import classnames from 'classnames';
import { FieldProps } from './types';
import Label from '../label';

const FormItem = Form.Item;

function isEmpty(value: any) {
  return value === '' || value === undefined || value === null;
}

// 数值输入框
export default class NumberField extends React.Component<FieldProps> {
  handleChange(value?: number | string) {
    const field = this.props.field;
    // 兼容以前，返回 string 类型
    this.props.onChange({ value: isEmpty(value) ? undefined : value, fields: [field] });
  }

  render() {
    const { data, schema, field, validate, size } = this.props;
    const meta = schema.meta || {};
    const errorMsg = validate(data, schema.meta, schema.type);

    const cls = classnames({
      'ui-form-item': true,
      'ui-form-item-error': errorMsg !== '',
    });

    const tip = schema.meta && schema.meta.description ? schema.meta.description : undefined;

    return (
      <div className={cls} key={field}>
        <Label title={schema.description} tip={tip} />
        <div className="ui-content">
          <FormItem hasFeedback help={errorMsg} validateStatus={errorMsg === '' ? '' : 'error'}>
            <InputNumber
              min={meta.min}
              max={meta.max}
              size={size}
              value={data}
              step={meta.step}
              onChange={this.handleChange.bind(this)}
            />
          </FormItem>
        </div>
      </div>
    );
  }
}
