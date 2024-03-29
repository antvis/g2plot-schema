import * as React from 'react';
import { Collapse } from 'antd';
import isPlainObject from 'lodash/isPlainObject';
import CaretRightOutlined from '@ant-design/icons/CaretRightOutlined';
import evaluate from '../util/evaluate';
import Textfield from './textfield';
import Color from './color';
import Switch from './switch';
import Enum from './enum';
import MinMax from './min-max';
import NumberFiled from './number';
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
      return <FieldObject {...props} />;
    default:
      return <Textfield {...props} />;
  }
}

const { Panel } = Collapse;

function hasVisibleProperty(schema) {
  return schema.type === 'object' && schema.properties.visible !== undefined;
}

function onlyHasVisibleProperty(schema) {
  return hasVisibleProperty(schema) && Object.keys(schema.properties).length <= 1;
}

interface FieldObjectState {
  [name: string]: string | string[];
}

export default class FieldObject extends React.Component<FieldProps, FieldObjectState> {
  state: FieldObjectState = {};

  onChange(e) {
    const field = this.props.field;
    if (field !== undefined) {
      e.fields.unshift(field);
    }
    this.props.onChange(e);
  }

  onExpand(field: string, keys: string | string[]) {
    this.setState({
      [field]: keys,
    });
  }

  onVisibleChange(field: string, e) {
    e.fields.unshift(field);
    if (!e.value) {
      this.setState({
        [field]: [],
      });
    } else {
      this.setState({
        [field]: [field],
      });
    }
    this.onChange(e);
  }

  getVisibleItem(field: string, itemProps, title: string | null) {
    const { schema, data, validate, size, lang } = itemProps;
    const props = schema.properties.visible;
    if (props) {
      const itemVal = data ? isPlainObject(data) : false;
      const type = props.type;
      const itemProps = {
        key: `${field}.visible`,
        field: 'visible',
        data: itemVal,
        title: title,
        schema: props,
        onChange: this.onVisibleChange.bind(this, field),
        onClick: e => {
          e.stopPropagation();
        },
        lang,
        validate,
        size,
      };
      return getItem(type, itemProps);
    }
    return null;
  }

  getVisibleValue(itemProps) {
    const { data } = itemProps;

    return data ? isPlainObject(data) : false;
  }

  getItem(field: string) {
    const { schema, data, validate, size, lang, parentData } = this.props;
    const props = schema.properties[field];
    const fieldType = props.type;

    const itemVal = data ? data[field] : undefined;

    const itemProps = {
      field,
      data: itemVal,
      schema: props,
      parentData: data,
      onChange: this.onChange.bind(this),
      validate,
      size,
      lang,
    };

    const ifState = props.meta ? props.meta.if : null;
    if (ifState) {
      try {
        const currentProps = data || {};
        if (/\$\.visible/.test(ifState)) {
          currentProps.visible = true;
        }
        const shouldShow = evaluate({ ...currentProps, __p: parentData }, ifState);
        if (!shouldShow) {
          return null;
        }
      } catch (e) {
        // 忽略错误
      }
    }
    let item: any = getItem(fieldType, itemProps);
    let visibleItem: any = null;
    let visibleValue = true;
    if (hasVisibleProperty(itemProps.schema)) {
      visibleItem = this.getVisibleItem(field, itemProps, null);
      visibleValue = this.getVisibleValue(itemProps);
    }
    if (fieldType === 'object' || fieldType === 'array') {
      if (onlyHasVisibleProperty(itemProps.schema)) {
        item = this.getVisibleItem(field, itemProps, props.description);
      } else {
        return (
          <Collapse
            bordered={false}
            key={field}
            onChange={this.onExpand.bind(this, field)}
            activeKey={this.state[field]}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          >
            <Panel key={field} disabled={!visibleValue} header={props.description} extra={visibleItem}>
              <div className={`field-item field-${fieldType}`}>{item}</div>
            </Panel>
          </Collapse>
        );
      }
    }

    return (
      <div key={field} className={`field-item field-${fieldType}`}>
        {item}
      </div>
    );
  }

  renderGroups() {
    const { schema } = this.props;
    const properties = schema.properties;
    const items = Object.keys(properties)
      .filter(field => field !== 'visible')
      .map(field => {
        const itemField = this.getItem(field);
        return itemField;
      });
    return items;
  }
  render() {
    return <div className="ui-object">{this.renderGroups()}</div>;
  }
}
