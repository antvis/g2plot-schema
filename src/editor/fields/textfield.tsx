import * as React from 'react';
import { Input, Form } from 'antd';
const FormItem = Form.Item;
import classnames from 'classnames';
import Label from '../label';
import { FieldProps } from './item';

// 文本输入框
export default class Textfield extends React.Component<FieldProps> {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
    };
  }

  onChange = e => {
    const value = e.target.value;
    const field = this.props.field;
    const newValue = value ? value.trim() || undefined : undefined;
    this.props.onChange({ value: newValue, fields: [field] });
  };

  onBlur = e => {
    const { data } = this.props;
    const value = e.target.value;
    // 数据 trim
    const newValue = value ? value.trim() || undefined : undefined;
    if (data !== newValue) {
      const field = this.props.field;
      this.props.onChange({ value: newValue, fields: [field] });
    }
  };

  render() {
    const { field, schema, size, validate, data } = this.props;
    const errorMsg = validate(data, schema.meta, schema.type);

    const cls = classnames({
      'ui-form-item': true,
      'ui-form-item-error': errorMsg !== '',
    });

    const tip = schema.meta && schema.meta.description ? schema.meta.description : undefined;

    // 渲染
    return (
      <div className={cls} key={field}>
        <Label title={schema.description} tip={tip} />
        <div className="ui-content">
          <FormItem hasFeedback help={errorMsg} validateStatus={errorMsg === '' ? '' : 'error'}>
            <Input placeholder="" size={size} value={data} onChange={this.onChange} onBlur={this.onBlur} />
          </FormItem>
        </div>
      </div>
    );
  }
}
