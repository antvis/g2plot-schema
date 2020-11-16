import * as React from 'react';
import { InputNumber } from 'antd';
import { FieldProps } from './item';
import Label from '../label';

export default function Size(props: FieldProps) {
  const { data = [], onChange, schema, field } = props;
  const tip = schema.meta && schema.meta.description ? schema.meta.description : undefined;
  const [min, max] = data;
  return (
    <div className="ui-form-item" key={field}>
      <Label title={schema.description} tip={tip} />
      <div className="ui-content">
        <div style={{ height: '30px', lineHeight: '30px' }}>
          <InputNumber
            size={'small'}
            value={min}
            placeholder="min"
            onChange={v => {
              onChange({ value: [v, max], fields: [field] });
            }}
          />
          <span> ~ </span>
          <InputNumber
            size={'small'}
            value={max}
            placeholder="max"
            onChange={v => {
              onChange({ value: [min, v], fields: [field] });
            }}
          />
        </div>
      </div>
    </div>
  );
}
