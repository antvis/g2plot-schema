import bubble from './bubble.json';
import scatter from './scatter.json';
import heatmap from './heatmap.json';

const data1 = [
  {
    x: '2019-03',
    y: 385,
    serie: 'default',
  },
  {
    x: '2019-04',
    y: 888,
    serie: 'default',
  },
  {
    x: '2019-05',
    y: 349,
    serie: 'default',
  },
  {
    x: '2019-06',
    y: 468,
    serie: 'default',
  },
  {
    x: '2019-07',
    y: 477,
    serie: 'default',
  },
];

const data2 = [
  {
    x: '2019-03',
    y: 385,
    serie: 'Paris',
  },
  {
    x: '2019-04',
    y: 888,
    serie: 'Paris',
  },
  {
    x: '2019-05',
    y: 349,
    serie: 'Paris',
  },
  {
    x: '2019-06',
    y: 468,
    serie: 'Paris',
  },
  {
    x: '2019-07',
    y: 477,
    serie: 'Paris',
  },
  {
    x: '2019-03',
    y: 291,
    serie: 'London',
  },
  {
    x: '2019-04',
    y: 484,
    serie: 'London',
  },
  {
    x: '2019-05',
    y: 293,
    serie: 'London',
  },
  {
    x: '2019-06',
    y: 147,
    serie: 'London',
  },
  {
    x: '2019-07',
    y: 618,
    serie: 'London',
  },
];

export const Line = {
  width: 600,
  height: 376,
  xField: 'x',
  yField: 'y',
  data: data1,
};

export const Area = {
  width: 532,
  height: 376,
  xField: 'x',
  yField: 'y',
  seriesField: 'serie',
  data: data2,
};

export const StackArea = {
  width: 560,
  height: 376,
  xField: 'x',
  yField: 'y',
  stackField: 'serie',
  data: data2,
};

export const PercentageStackArea = {
  width: 560,
  height: 376,
  xField: 'x',
  yField: 'y',
  stackField: 'serie',
  data: data2,
};

export const Bar = {
  width: 560,
  height: 376,
  xField: 'y',
  yField: 'x',
  data: data1,
};

export const GroupBar = {
  width: 560,
  height: 376,
  xField: 'y',
  yField: 'x',
  groupField: 'serie',
  data: data2,
};

export const StackBar = {
  width: 560,
  height: 376,
  xField: 'y',
  yField: 'x',
  stackField: 'serie',
  data: data2,
};

export const PercentageStackBar = {
  width: 560,
  height: 376,
  xField: 'y',
  yField: 'x',
  stackField: 'serie',
  data: data2,
  xAxis: {
    tickLine: {
      visible: false,
    },
  },
};

export const Column = {
  width: 560,
  height: 376,
  xField: 'x',
  yField: 'y',
  data: data1,
};
export const GroupColumn = {
  width: 560,
  height: 376,
  xField: 'x',
  yField: 'y',
  groupField: 'serie',
  data: data2,
};

export const StackColumn = {
  width: 560,
  height: 376,
  xField: 'x',
  yField: 'y',
  groupField: 'serie',
  data: data2,
};

export const PercentageStackColumn = {
  width: 560,
  height: 376,
  xField: 'x',
  yField: 'y',
  groupField: 'serie',
  data: data2,
};

export const Pie = {
  width: 560,
  height: 376,
  angleField: 'y',
  colorField: 'x',
  data: data1,
};

export const Ring = {
  width: 560,
  height: 376,
  angleField: 'y',
  colorField: 'x',
  data: data1,
  statistic: {
    visible: false,
  },
};

export const Radar = {
  width: 560,
  height: 376,
  angleField: 'x',
  radiusField: 'y',
  seriesField: 'serie',
  data: [
    { x: '防御', y: 400, serie: '马可波罗' },
    { x: '速度', y: 800, serie: '马可波罗' },
    { x: '攻击', y: 900, serie: '马可波罗' },
    { x: '躲闪', y: 250, serie: '马可波罗' },
    { x: '穿透', y: 400, serie: '马可波罗' },
    { x: '防御', y: 350, serie: '孙尚香' },
    { x: '速度', y: 850, serie: '孙尚香' },
    { x: '攻击', y: 900, serie: '孙尚香' },
    { x: '躲闪', y: 100, serie: '孙尚香' },
    { x: '穿透', y: 550, serie: '孙尚香' },
  ],
};

export const Bubble = {
  width: 560,
  height: 376,
  padding: 'auto',
  data: bubble,
  xField: 'change in female rate',
  yField: 'change in male rate',
  sizeField: 'pop',
  pointSize: [4, 30],
  colorField: 'continent',
};

export const Scatter = {
  width: 560,
  height: 376,
  padding: 'auto',
  data: scatter,
  xField: 'x',
  yField: 'y',
  pointSize: 5,
  pointStyle: {
    stroke: '#777777',
    lineWidth: 1,
  },
};

export const Funnel = {
  data: [
    { action: '浏览网站', pv: 50000 },
    { action: '放入购物车', pv: 35000 },
    { action: '生成订单', pv: 25000 },
    { action: '支付', pv: 15000 },
    { action: '成交', pv: 8500 },
  ],
  xField: 'action',
  yField: 'pv',
};

export const Waterfall = {
  data: [
    { type: '日用品', money: 120 },
    { type: '伙食费', money: 900 },
    { type: '交通费', money: 200 },
    { type: '水电费', money: 300 },
    { type: '房租', money: 1200 },
    { type: '商场消费', money: 1000 },
    { type: '应酬红包', money: -2000 },
  ],
  xField: 'type',
  yField: 'money',
};

export const StepLine = {
  data: [
    {
      date: '2018/8/4',
      type: 'download',
      value: 6268,
    },
    {
      date: '2018/8/4',
      type: 'register',
      value: 4512,
    },
    {
      date: '2018/8/4',
      type: 'bill',
      value: 428,
    },
    {
      date: '2018/8/5',
      type: 'download',
      value: 6411,
    },
    {
      date: '2018/8/5',
      type: 'register',
      value: 8281,
    },
    {
      date: '2018/8/5',
      type: 'bill',
      value: 619,
    },
    {
      date: '2018/8/6',
      type: 'download',
      value: 1890,
    },
    {
      date: '2018/8/6',
      type: 'register',
      value: 2008,
    },
    {
      date: '2018/8/6',
      type: 'bill',
      value: 87,
    },
    {
      date: '2018/8/7',
      type: 'download',
      value: 4251,
    },
    {
      date: '2018/8/7',
      type: 'register',
      value: 1963,
    },
    {
      date: '2018/8/7',
      type: 'bill',
      value: 706,
    },
    {
      date: '2018/8/8',
      type: 'download',
      value: 2978,
    },
    {
      date: '2018/8/8',
      type: 'register',
      value: 2367,
    },
    {
      date: '2018/8/8',
      type: 'bill',
      value: 387,
    },
    {
      date: '2018/8/9',
      type: 'download',
      value: 3880,
    },
    {
      date: '2018/8/9',
      type: 'register',
      value: 2956,
    },
    {
      date: '2018/8/9',
      type: 'bill',
      value: 488,
    },
    {
      date: '2018/8/10',
      type: 'download',
      value: 3606,
    },
    {
      date: '2018/8/10',
      type: 'register',
      value: 678,
    },
    {
      date: '2018/8/10',
      type: 'bill',
      value: 507,
    },
  ],
  xField: 'date',
  yField: 'value',
  seriesField: 'type',
  xAxis: {
    type: 'cat',
  },
};

export const Heatmap = {
  data: heatmap,
  xField: 'prob',
  yField: 'Average annual wage',
  colorField: 'numbEmployed',
  radius: 15,
  intensity: 2,
};

export const Matrix = {
  data: [
    { name: 'hot dog', value: 70, country: 'AD' },
    { name: 'burger', value: 54, country: 'AD' },
    { name: 'sandwich', value: 49, country: 'AD' },
    { name: 'kebab', value: 4, country: 'AD' },
    { name: 'fries', value: 11, country: 'AD' },
    { name: 'donut', value: 68, country: 'AD' },
    { name: 'junk', value: 49, country: 'AD' },
    { name: 'sushi', value: 47, country: 'AD' },
    { name: 'ramen', value: 64, country: 'AD' },
    { name: 'curry', value: 51, country: 'AD' },
    { name: 'udon', value: 6, country: 'AD' },
    { name: 'hot dog', value: 45, country: 'AE' },
    { name: 'burger', value: 97, country: 'AE' },
    { name: 'sandwich', value: 69, country: 'AE' },
    { name: 'kebab', value: 68, country: 'AE' },
    { name: 'fries', value: 14, country: 'AE' },
    { name: 'donut', value: 93, country: 'AE' },
    { name: 'junk', value: 0, country: 'AE' },
    { name: 'sushi', value: 84, country: 'AE' },
    { name: 'ramen', value: 57, country: 'AE' },
    { name: 'curry', value: 73, country: 'AE' },
    { name: 'udon', value: 73, country: 'AE' },
    { name: 'hot dog', value: 43, country: 'AF' },
    { name: 'burger', value: 61, country: 'AF' },
    { name: 'sandwich', value: 28, country: 'AF' },
    { name: 'kebab', value: 12, country: 'AF' },
    { name: 'fries', value: 22, country: 'AF' },
    { name: 'donut', value: 54, country: 'AF' },
    { name: 'junk', value: 90, country: 'AF' },
    { name: 'sushi', value: 24, country: 'AF' },
    { name: 'ramen', value: 72, country: 'AF' },
    { name: 'curry', value: 40, country: 'AF' },
    { name: 'udon', value: 78, country: 'AF' },
    { name: 'hot dog', value: 35, country: 'AG' },
    { name: 'burger', value: 6, country: 'AG' },
    { name: 'sandwich', value: 64, country: 'AG' },
    { name: 'kebab', value: 92, country: 'AG' },
    { name: 'fries', value: 45, country: 'AG' },
    { name: 'donut', value: 88, country: 'AG' },
    { name: 'junk', value: 44, country: 'AG' },
    { name: 'sushi', value: 16, country: 'AG' },
    { name: 'ramen', value: 0, country: 'AG' },
    { name: 'curry', value: 75, country: 'AG' },
    { name: 'udon', value: 57, country: 'AG' },
    { name: 'hot dog', value: 3, country: 'AI' },
    { name: 'burger', value: 6, country: 'AI' },
    { name: 'sandwich', value: 34, country: 'AI' },
    { name: 'kebab', value: 72, country: 'AI' },
    { name: 'fries', value: 21, country: 'AI' },
    { name: 'donut', value: 30, country: 'AI' },
    { name: 'junk', value: 99, country: 'AI' },
    { name: 'sushi', value: 40, country: 'AI' },
    { name: 'ramen', value: 1, country: 'AI' },
    { name: 'curry', value: 70, country: 'AI' },
    { name: 'udon', value: 58, country: 'AI' },
    { name: 'hot dog', value: 40, country: 'AL' },
    { name: 'burger', value: 90, country: 'AL' },
    { name: 'sandwich', value: 24, country: 'AL' },
    { name: 'kebab', value: 69, country: 'AL' },
    { name: 'fries', value: 97, country: 'AL' },
    { name: 'donut', value: 70, country: 'AL' },
    { name: 'junk', value: 49, country: 'AL' },
    { name: 'sushi', value: 90, country: 'AL' },
    { name: 'ramen', value: 92, country: 'AL' },
    { name: 'curry', value: 90, country: 'AL' },
    { name: 'udon', value: 65, country: 'AL' },
    { name: 'hot dog', value: 72, country: 'AM' },
    { name: 'burger', value: 47, country: 'AM' },
    { name: 'sandwich', value: 30, country: 'AM' },
    { name: 'kebab', value: 51, country: 'AM' },
    { name: 'fries', value: 23, country: 'AM' },
    { name: 'donut', value: 63, country: 'AM' },
    { name: 'junk', value: 30, country: 'AM' },
    { name: 'sushi', value: 43, country: 'AM' },
    { name: 'ramen', value: 8, country: 'AM' },
    { name: 'curry', value: 49, country: 'AM' },
    { name: 'udon', value: 61, country: 'AM' },
    { name: 'hot dog', value: 83, country: 'AO' },
    { name: 'burger', value: 6, country: 'AO' },
    { name: 'sandwich', value: 17, country: 'AO' },
    { name: 'kebab', value: 40, country: 'AO' },
    { name: 'fries', value: 61, country: 'AO' },
    { name: 'donut', value: 72, country: 'AO' },
    { name: 'junk', value: 61, country: 'AO' },
    { name: 'sushi', value: 50, country: 'AO' },
    { name: 'ramen', value: 77, country: 'AO' },
    { name: 'curry', value: 97, country: 'AO' },
    { name: 'udon', value: 17, country: 'AO' },
    { name: 'hot dog', value: 15, country: 'AQ' },
    { name: 'burger', value: 34, country: 'AQ' },
    { name: 'sandwich', value: 26, country: 'AQ' },
    { name: 'kebab', value: 80, country: 'AQ' },
    { name: 'fries', value: 100, country: 'AQ' },
    { name: 'donut', value: 97, country: 'AQ' },
    { name: 'junk', value: 34, country: 'AQ' },
    { name: 'sushi', value: 81, country: 'AQ' },
    { name: 'ramen', value: 25, country: 'AQ' },
    { name: 'curry', value: 100, country: 'AQ' },
    { name: 'udon', value: 56, country: 'AQ' },
  ],
  xField: 'name',
  yField: 'country',
  colorField: 'value',
  sizeField: 'value',
};

export const Liquid = {
  min: 0,
  max: 10000,
  value: 5639,
};
