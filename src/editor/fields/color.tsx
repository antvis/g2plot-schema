import * as React from 'react';
import { Popover } from 'antd';
import { FieldProps } from './types';
import SketchPicker from 'react-color/lib/Sketch';
import Label from '../label';

interface Props {
  value: string;
  onChange(color: string): void;
}
const ColorPicker = React.memo((props: Props) => {
  const { onChange, value } = props;
  const onChangeComplete = React.useCallback(
    color => {
      onChange(color.hex);
    },
    [onChange]
  );
  const presetColors = [
    '#5B8FF9',
    '#5AD8A6',
    '#5D7092',
    '#F6BD16',
    '#E8684A',
    '#6DC8EC',
    '#9270CA',
    '#FF9D4D',
    '#269A99',
    '#FF99C3',
  ];
  return (
    <Popover
      trigger="click"
      placement="left"
      overlayClassName="schema-editor-color-picker"
      content={<SketchPicker color={value} disableAlpha onChange={onChangeComplete} presetColors={presetColors} />}
    >
      <div className="pasta-color-icon" style={{ background: value }}></div>
    </Popover>
  );
});

export default function Color({ field, schema, onChange, data }: FieldProps) {
  const colorString = data || '#ffffff';

  const tip = schema.meta && schema.meta.description ? schema.meta.description : undefined;
  return (
    <div className="ui-form-item" key={field}>
      <Label title={schema.description} tip={tip} />
      <div className="ui-content">
        <ColorPicker
          value={colorString}
          onChange={color => {
            onChange({ value: color, fields: [field] });
          }}
        />
      </div>
    </div>
  );
}
