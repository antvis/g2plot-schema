import * as React from 'react';
import * as schemaUtil from 'schema-util';
import { Select } from 'antd';
import Chart from './chart';
import * as _ from '@antv/util';
import * as configs from './configs';
import { defaultConfigs, Editor, getSchemaByType } from '../src';
import * as schemas from '../src/schemas/configs';
import * as types from 'schema-util/lib/types';

types.supported.push('MinMax');
types.meta.minmax = ['if'];
import '../src/editor/index.less';
import './index.less';

const type = location.search.slice(1) || 'Line';

const SchemasObj = {
  'zh-CN': {},
  'en-US': {},
};

for (const type of Object.keys(schemas)) {
  const zh = getSchemaByType(type, 'zh-CN');
  const en = getSchemaByType(type, 'en-US');
  if (zh) {
    SchemasObj['zh-CN'][type] = schemaUtil.schema(zh);
  }
  if (en) {
    SchemasObj['en-US'][type] = schemaUtil.schema(en);
  }
}

function getOption(type: string) {
  const { data, ...option } = configs[type];
  return _.deepMix({}, defaultConfigs[type], option, {
    autoFit: true
  });
}

class App extends React.Component {
  state = {
    type,
    language: 'zh-CN',
    option: getOption(type),
  };

  constructor(props) {
    super(props);
  }

  onChange(data) {
    this.setState({
      option: data,
    });
  }

  onTypeChange(type: string) {
    this.setState({
      type,
      option: getOption(type),
    });
  }

  render() {
    const { type, option, language } = this.state;
    const schema = SchemasObj[language][type];
    const { data } = configs[type];
    return (
      <div className="main">
        <div className="body">
          <Select style={{ width: 200 }} value={type} onChange={this.onTypeChange.bind(this)}>
            {Object.keys(schemas).map(item => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
          <Select
            style={{ width: 200, marginLeft: 20 }}
            value={language}
            onChange={language => {
              this.setState({ language });
            }}
          >
            <Select.Option value="zh-CN">中文</Select.Option>
            <Select.Option value="en-US">英文</Select.Option>
          </Select>
          <Chart key={`${type}-canvas`} type={type} data={data} option={option} />
        </div>

        <div>
          <Editor key={type} data={option} schema={schema} onChange={this.onChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
