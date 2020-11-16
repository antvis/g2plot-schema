import * as React from 'react';
import Chart from './chart';
import * as configs from './configs';
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
};

const size = {
  width: 560,
  height: 376,
};

export default class Theme extends React.Component {
  render() {
    return [...Object.entries(configs)].map(([type, { data, ...option }]) => {
      return (
        <Chart
          key={type}
          type={type}
          data={data}
          option={{
            ...option,
            ...size,
            // width: undefined,
            // height: undefined,
            ...{
              forceFit: false,
              title: {
                visible: true,
                text: title[type],
              },
              description: {
                visible: true,
                text: `一个简单的${title[type]}`,
              },
            },
          }}
        />
      );
    });
  }
}
