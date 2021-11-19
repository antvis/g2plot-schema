import assign from 'lodash/assign';
const commonOptions = {
  renderer: 'canvas',
  xAxis: {
    nice: true,
    label: {
      autoRotate: true,
      autoHide: true,
    },
  },
  yAxis: {
    nice: true,
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  animation: true,
};

export const Line = assign({}, commonOptions, {
  tooltip: {
    shared: true,
    showMarkers: true,
    showCrosshairs: true,
    crosshairs: {
      type: 'x',
    },
  },
  legend: {
    position: 'top-left',
  },
  isStack: false,
});

export const Area = assign({}, commonOptions, {
  tooltip: {
    shared: true,
    showMarkers: true,
    showCrosshairs: true,
    crosshairs: {
      type: 'x',
    },
  },
  isStack: true,
  // 默认开启
  line: {},
  legend: {
    position: 'top-left',
  },
});

export const Bar = assign({}, commonOptions, {
  barWidthRatio: 0.6,
  marginRatio: 1 / 32,
  tooltip: {
    shared: true,
    showMarkers: false,
    offset: 20,
  },
  interactions: [{ type: 'active-region' }],
});

export const Column = assign({}, commonOptions, {
  columnWidthRatio: 0.6,
  marginRatio: 1 / 32,
  tooltip: {
    shared: true,
    showMarkers: false,
    offset: 20,
  },
  interactions: [{ type: 'active-region' }],
});

export const Pie = assign({}, commonOptions, {
  legend: {
    position: 'right',
  },
  tooltip: {
    shared: false,
    showTitle: false,
    showMarkers: false,
  },
  label: {
    layout: { type: 'limit-in-plot', cfg: { action: 'ellipsis' } },
  },
  /** 饼图样式, 不影响暗黑主题 */
  pieStyle: {
    stroke: 'white',
    lineWidth: 1,
  },
  /** 饼图中心文本默认样式 */
  statistic: {
    title: {
      style: { fontWeight: 300, color: '#4B535E', textAlign: 'center', fontSize: '20px', lineHeight: 1 },
    },
    content: {
      style: {
        fontWeight: 'bold',
        color: 'rgba(44,53,66,0.85)',
        textAlign: 'center',
        fontSize: '32px',
        lineHeight: 1,
      },
    },
  },
  /** 默认关闭 text-annotation 动画 */
  theme: {
    components: {
      annotation: {
        text: {
          animate: false,
        },
      },
    },
  }
});

export const Radar = assign({}, commonOptions, {
  xAxis: {
    label: {
      offset: 15,
    },
    grid: {
      line: {
        type: 'line',
      },
    },
  },
  yAxis: {
    grid: {
      line: {
        type: 'circle',
      },
    },
  },
  legend: {
    position: 'top',
  },
  tooltip: {
    shared: true,
    showCrosshairs: true,
    showMarkers: true,
    crosshairs: {
      type: 'xy',
      line: {
        style: {
          stroke: '#565656',
          lineDash: [4],
        },
      },
      follow: true,
    },
  },
});

export const Scatter = assign({}, commonOptions, {
  size: 4,
  tooltip: {
    shared: null,
    showTitle: false,
    offset: 20,
  },
});

export const BidirectionalBar = assign({}, commonOptions, {});

export const Box = assign({}, commonOptions, {
  meta: {
    ['$$range$$']: { min: 0, alias: 'low-q1-median-q3-high' },
  },

  // 默认区域交互
  interactions: [{ type: 'active-region' }],

  // 默认 tooltips 共享，不显示 markers
  tooltip: {
    showMarkers: false,
    showCrosshairs: true,
    shared: true,
  },
});

export const DualAxes = assign({}, commonOptions, {
  yAxis: [],
  geometryOptions: [],
  syncViewPadding: true,
  legend: {
    position: 'top-left',
  },
});

export const Guage = {
  percent: 0, // 当前指标值
  range: {
    ticks: [],
  }, // 默认的刻度
  innerRadius: 0.9,
  radius: 0.95,
  startAngle: (-7 / 6) * Math.PI,
  endAngle: (1 / 6) * Math.PI,
  syncViewPadding: true,
  axis: {
    line: null,
    label: {
      offset: -24,
      style: {
        textAlign: 'center',
        textBaseline: 'middle',
      },
    },
    subTickLine: {
      length: -8,
    },
    tickLine: {
      length: -12,
    },
    grid: null,
  },
  indicator: {
    pointer: {
      style: {
        lineWidth: 5,
        lineCap: 'round',
      },
    },
    pin: {
      style: {
        r: 9.75,
        lineWidth: 4.5,
        fill: '#fff',
      },
    },
  },
  statistic: {
    title: false,
  },
  meta: {
    // 两个 view 的 scale 同步到 v 上
    range: {
      sync: 'v',
    },
    percent: {
      sync: 'v',
    },
  },
  animation: false,
};

export const Histogram = assign({}, commonOptions, {
  // @ts-ignore
  columnStyle: {
    stroke: '#FFFFFF',
  },
  tooltip: {
    shared: true,
    showMarkers: false,
  },
  interactions: [{ type: 'active-region' }],
});

export const Waterfall = assign({}, commonOptions, {
  /** default: show label */
  label: {},
  /** default: show leaderLine */
  leaderLine: {
    style: {
      lineWidth: 1,
      stroke: '#8c8c8c',
      lineDash: [4, 2],
    },
  },
  /** default: show total */
  total: {
    label: '总计',
    style: {
      fill: 'rgba(0, 0, 0, 0.25)',
    },
  },
  interactions: [{ type: 'element-active' }],
  risingFill: '#f4664a',
  fallingFill: '#30bf78',
  waterfallStyle: {
    fill: 'rgba(0, 0, 0, 0.25)',
  },
  yAxis: {
    grid: {
      line: {
        style: {
          lineDash: [4, 2],
        },
      },
    },
  },
});

export const Heatmap = assign({}, commonOptions, {
  type: 'polygon',
  legend: false,
  xAxis: {
    tickLine: null,
    line: null,
    grid: {
      alignTick: false,
      line: {
        style: {
          lineWidth: 1,
          lineDash: null,
          stroke: '#f0f0f0',
        },
      },
    },
  },
  yAxis: {
    grid: {
      alignTick: false,
      line: {
        style: {
          lineWidth: 1,
          lineDash: null,
          stroke: '#f0f0f0',
        },
      },
    },
  },
});