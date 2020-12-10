export const Line = [
  'smooth',
  'point',
  'lineStyle',
  ['legend', false, 'seriesField'],
  ['label', 'Line'],
  ['tooltip', 'seriesField'],
  'xAxis',
  'yAxis',
];

export const Area = [
  'smooth',
  'point',
  'line',
  ['legend', false, 'seriesField'],
  ['label', 'Area'],
  ['tooltip', 'seriesField'],
  'xAxis',
  'yAxis'
];

export const Bar = [
  'barWidthRatio',
  ['legend', false, 'colorField'],
  ['label', 'Bar'],
  ['tooltip', 0],
  'xAxis',
  'yAxis',
];

export const Column = [
  'columnWidthRatio',
  ['legend', false, 'colorField'],
  ['label', 'Column'],
  ['tooltip', 0],
  'xAxis',
  'yAxis',
];

export const Pie = ['radius', 'innerRadius', 'statistic', 'legend', ['label', 'Pie'], ['tooltip', 0]];

export const Radar = [
  'radius',
  'smooth',
  ['legend', false, 'seriesField'],
  'line',
  'area',
  'point',
  ['tooltip', 'seriesField'],
  'xAxis',
  'yAxis',
];

export const Scatter = [
  ['legend', false, 'colorField'],
  'size',
  'shape',
  'pointStyle',
  ['label', 'Column'],
  ['tooltip', 0],
  'xAxis',
  'yAxis',
  'regressionLine',
];

// export const Funnel = [
//   'dynamicHeight',
//   'transpose',
//   'percentage',
//   'legend',
//   ['label', 'Funnel'],
//   ['tooltip', 'compareField'],
// ];

export const Waterfall = [
  'risingFill',
  'fallingFill',
  'columnWidthRatio',
  'waterfallStyle',
  'label',
  'total',
  'leaderLine',
  'labelMode',
  ['tooltip', 0],
  'xAxis',
  'yAxis',
];

export const Heatmap = ['type', ['legend', true], 'label', ['tooltip', 0], 'xAxis', 'yAxis'];

export const Histogram = ['binNumber', 'binWidth', ['label', 'Bar'], ['tooltip', 0], 'xAxis', 'yAxis'];

// export const Liquid = [
//   'liquidMin',
//   'liquidMax',
//   'value',
//   'liquidColor',
//   'liquidStyle',
//   'statistic',
// ];

export const Box = ['boxStyle', 'xAxis', 'yAxis'];

export const DualAxes = [['legend', false], 'xAxis', 'yAxis'];

// export const Gauge = ['percent', 'radius', 'innerRadius', 'startAngle', 'endAngle'];
