export const Line = [
  'smooth',
  'lineStyle',
  ['legend', false, 'seriesField'],
  ['label', 'Line'],
  'point',
  ['tooltip', 'seriesField'],
  'xAxis',
  'yAxis',
];

export const Area = [
  'smooth',
  ['legend', false, 'seriesField'],
  ['label', 'Area'],
  'point',
  'line',
  'xAxis',
  'yAxis',
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
  'xAxis',
  'yAxis',
  'label',
  'total',
  'leaderLine',
  'labelMode',
  ['tooltip', 0],
];

export const Heatmap = [
  ['legend', true],
  'type',
  'label',
  ['tooltip', 0],
  'xAxis',
  'yAxis',
];

export const Histogram = [
  'binNumber',
  'binWidth',
  ['label', 'Bar'],
  ['tooltip', 0],
  'xAxis',
  'yAxis',
];

// export const Liquid = [
//   'liquidMin',
//   'liquidMax',
//   'value',
//   'liquidColor',
//   'liquidStyle',
//   'statistic',
// ];

export const Box = [
  'boxStyle',
  'xAxis',
  'yAxis',
];

export const DualAxes = [
  ['legend', false],
  'xAxis',
  'yAxis',
];

// export const Gauge = ['percent', 'radius', 'innerRadius', 'startAngle', 'endAngle'];
