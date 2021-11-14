import * as React from 'react';
import { Select } from 'antd';
import Label from '../label';
import { FieldProps } from './item';

const { Option } = Select;

export default class Enums extends React.Component<FieldProps> {
  handleSelect(value: string) {
    const field = this.props.field;
    this.props.onChange({ value, fields: [field] });
  }

  getSelect() {
    const { data, schema, size } = this.props;
    const items: Array<{ label: string; value: string }> = schema.items;
    // 被选中的项的描述，如果没有，则选第一个
    const options = items
      .map(item => {
        return (
          <Option value={item.value} key={item.value}>
            {item.label}
          </Option>
        );
      })
      .filter(o => o);

    return (
      <Select
        allowClear
        size={size}
        showSearch
        dropdownClassName="schema-editor-select-option"
        placeholder=''
        optionFilterProp="children"
        value={data}
        onChange={this.handleSelect.bind(this)}
      >
        {options}
      </Select>
    );
  }

  render() {
    const { schema } = this.props;

    const tip = schema.meta && schema.meta.description ? schema.meta.description : undefined;

    return (
      <div className="ui-form-item">
        <Label title={schema.description} tip={tip} />
        <div className="ui-content">{this.getSelect()}</div>
      </div>
    );
  }
}
