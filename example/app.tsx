import * as React from 'react';
import * as schemaUtil from 'schema-util';
import { Select } from 'antd';
import * as G2Plot from '@antv/g2plot';
import Chart from './chart';
import * as _ from '@antv/util';
import * as configs from './configs';
import { Editor, getSchemaByType } from '../src';
import * as schemas from '../src/schemas/configs';
import * as types from 'schema-util/lib/types';

types.supported.push('MinMax');
types.meta.minmax = ['if'];
import '../src/editor/index.less';
import './index.less';

const title = {
  Area: '面积图',
  StackArea: '堆叠面积图',
  PercentageStackArea: '百分比堆叠面积图',
  Bar: '条形图',
  GroupBar: '分组条形图',
  StackBar: '堆叠条形图',
  PercentageStackBar: '百分比堆叠条形图',
  Column: '柱形图',
  GroupColumn: '分组柱形图',
  StackColumn: '堆叠柱形图',
  PercentageStackColumn: '百分比堆叠柱形图',
  Line: '折线图',
  Pie: '饼图',
  Ring: '环形图',
  Radar: '雷达图',
  Bubble: '气泡图',
  Scatter: '散点图',
  Funnel: '梯形图',
  Waterfall: '瀑布图',
  StepLine: '梯折线图',
  Heatmap: '热力图',
  Matrix: '色块热力图',
  Liquid: '水波图',
};

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
  console.log(G2Plot[type].getDefaultOptions());
  return _.deepMix({}, G2Plot[type].getDefaultOptions(), option, {
    forceFit: false,
    title: {
      visible: true,
      text: title[type],
    },
    description: {
      visible: true,
      text: `一个简单的${title[type]}`,
    },
    width: 560,
    height: 376,
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
    console.log(getOption(type));
  }

  onChange(data) {
    console.log(data);
    this.setState({
      option: data,
    });
  }

  onTypeChange(type: string) {
    console.log(getOption(type));
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
