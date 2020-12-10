import * as React from 'react';
import { isPlainObject, cloneDeep } from 'lodash';
import Item from './fields/item';
import validate from './util/validate';
import clone from './util/clone';
import { locales, Language } from './i18n';

export interface ChangeMeta {
  value: any;
  fields: string[];
}

export interface EditorProps {
  data: any;
  schema: any;
  validate(...args: []): any;
  lang: Language;
  size: 'small' | 'large' | 'middle';
  onChange(value: any, meta: ChangeMeta): void;
  onError?(e: any): void;
}

interface EditorState {
  data: any;
}

const replaceVisibleField = (dist: any, src: any, level: number, maxLevel?: number) => {
  level = level || 0;
  maxLevel = maxLevel || 5;
  for (const key in src) {
    const value = src[key];
    if (isPlainObject(value)) {
      if (value.visible === false) {
        dist[key] = false;
      } else {
        dist[key] = replaceVisibleField({}, value, level + 1);
      }
    } else {
      dist[key] = value;
    }
  }
  return dist;
};

export class Editor extends React.Component<EditorProps, EditorState> {
  private lastItem: string[] | null = null;

  static defaultProps = {
    validate,
    lang: 'zh-CN',
    size: 'small',
  };

  static getDerivedStateFromProps(nextProps: EditorProps, prevState: EditorState) {
    if (nextProps.data !== prevState.data) {
      return { data: nextProps.data };
    }
    return null;
  }

  constructor(props: EditorProps) {
    super(props);
    this.state = { data: props.data };
  }

  getValue() {
    // 默认去 props.value ，否则去 state.data 内部维护数据
    const data = this.props.data || this.state.data;
    return data || {};
  }

  onChange(e) {
    // clone data
    let data = clone(this.getValue());
    const fields: string[] = e.fields.slice();
    let tmp = data;
    let tmpSchema = this.props.schema;
    const last = fields.pop();

    // modify array
    if (last === undefined && tmpSchema.type === 'array') {
      data = e.value;
    } else if (last !== undefined) {
      // modify item field
      fields.forEach(item => {
        if (typeof item !== 'number') {
          tmpSchema = tmpSchema.properties[item];
        }

        // if data is null, mock data 或 非数组或对象，都需要 mock
        if (typeof tmp[item] === 'undefined' || typeof tmp[item] !== 'object' || tmp[item] === null) {
          tmp[item] = {};
        }

        tmp = tmp[item];
      });
      tmp[last] = e.value;
    }

    if (this.props.onChange) {
      // visible写法变更
      const configs = replaceVisibleField({}, cloneDeep(data), 0);
      this.props.onChange(configs, e);
    }

    this.lastItem = e.fields;
    if (this.state.data) {
      this.setState({ data });
    }
  }

  validate(fn, locale) {
    return (value, meta, type) => {
      let errorMsg = '';

      switch (type) {
        default:
          errorMsg = fn(value, meta, type, locale);
      }

      if (errorMsg && this.props.onError) {
        this.props.onError({
          errorMsg,
          fieldPath: clone(this.lastItem),
        });
      }
      return errorMsg;
    };
  }

  render() {
    const { schema, validate, size, lang } = this.props;
    const data = this.getValue();

    const props = {
      schema,
      data,
      onChange: this.onChange.bind(this),
      validate: this.validate(validate, locales[lang]),
      size: size,
      lang,
    };

    return (
      <div className="schema-editor">
        <div className="schema-editor-main">
          <div className="schema-editor-scroll">
            <div className="schema-editor-container">{Item.getItem(schema.type, props)}</div>
          </div>
        </div>
      </div>
    );
  }
}
