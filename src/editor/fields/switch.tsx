import * as React from 'react';
import { Switch } from 'antd';
import { FieldProps } from './item';
import Label from '../label';

interface Props extends FieldProps {
  onClick?(e: React.MouseEvent<HTMLDivElement>): void;
  title: string;
}

export default class Switcher extends React.Component<Props> {
  changeValue(value: boolean) {
    const field = this.props.field;
    this.props.onChange({ value, fields: [field] });
  }

  render() {
    const { data, field, schema, onClick, title } = this.props;
    const tip = schema.meta && schema.meta.description ? schema.meta.description : undefined;
    return (
      <div onClick={onClick} className={'ui-form-item item-boolean'} key={field}>
        {title !== null && <Label title={title || schema.description} tip={tip} />}
        <div className="ui-content">
          <Switch size={'small'} checked={data} onChange={this.changeValue.bind(this)} />
        </div>
      </div>
    );
  }
}
