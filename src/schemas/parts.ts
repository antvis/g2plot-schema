import i18n from './i18n';
import { Lang } from '.';

function trans(lang: Lang, key: string) {
  return i18n[lang][key] || key;
}

// /* */ 是注释
// 仅仅支持  Boolean String Number Color Object Enum(不支持多选)
// TODO: Colors LineDash Padding LegendPosition

export function angleAxis(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `angleAxis(${t('angle axis')}): ${axis(lang, false)}`;
}

export function radiusAxis(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `radiusAxis(${t('radius axis')}): ${axis(lang, false)}`;
}

export function xAxis(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `xAxis(${t('x axis')}): ${axis(lang, true)}`;
}

export function yAxis(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `yAxis(${t('y axis')}): ${axis(lang, true)}`;
}

export function label(lang: Lang = 'zh-CN', type?: string) {
  const t = trans.bind(null, lang);
  const MAP = {
    Line: `type(${t('type')}): Enum[if: "$.visible && __p.seriesField"] {
  point(${t('point')})
  line(${t('line')})
}`,
    Bar: `position(${t('position')}): Enum[if: "$.visible"] {
  left(${t('left')})
  middle(${t('middle')})
  right(${t('right')})
}`,
    Column: `position(${t('position')}): Enum[if: "$.visible"] {
  top(${t('top')})
  middle(${t('middle')})
  bottom(${t('bottom')})
}`,
    Pie: `type(${t('type')}): Enum[if: "$.visible"] {
  inner(${t('inner')})
  outer(${t('outer')})
  spider(${t('spider')})
}`,
    StackArea: `type(${t('type')}): Enum[if: "$.visible"] {
  point(${t('point')})
  line(${t('line')}),
  area(${t('area')})
}`,
  };

  return `label(${t('label')}): Object {
  visible(${t('visible')}): Boolean
  ${type ? MAP[type] || '' : ''}
  autoRotate(${t('auto rotate')}): Boolean
  autoHide(${t('auto hide')}): Boolean
  autoEllipsis(${t('auto ellipsis')}): Boolean
  offset(${t('entire offset')}): Number[if: "$.visible"]
  offsetX(${t('x offset')}): Number[if: "$.visible"]
  offsetY(${t('y offset')}): Number[if: "$.visible"]
}`;
}

export function legend(lang: Lang = 'zh-CN', isHeatmap = false, showField?: string) {
  const t = trans.bind(null, lang);
  return `legend(${t('legend')}): Object${showField ? `[if: "$.${showField}"]` : ''} {
  visible(${t('visible')}): Boolean
  position(${t('position')}): Enum[if: "$.visible"] {
    left-top(${t('left-top')})
    left(${t('left-center')})
    left-bottom(${t('left-bottom')})
    right-top(${t('right-top')})
    right(${t('right-center')})
    right-bottom(${t('right-bottom')})
    top-left(${t('top-left')})
    top(${t('top-center')})
    top-right(${t('top-right')})
    bottom-left(${t('bottom-left')})
    bottom(${t('bottom-center')})
    bottom-right(${t('bottom-right')})
  }
  ${isHeatmap ? '' : `flipPage(${t('flip page')}): Boolean[if: "$.visible"]`}
  offsetX(${t('x offset')}): Number[if: "$.visible"]
  offsetY(${t('y offset')}): Number[if: "$.visible"]
}`;
}

export function title(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `title(${t('title')}): Object {
  visible(${t('visible')}): Boolean
  text(${t('text')}): String[if: "$.visible"]
}`;
}

export function description(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `description(${t('description')}): Object {
  visible(${t('visible')}): Boolean
  text(${t('text')}): String[if: "$.visible"]
}`;
}

export function tooltip(lang: Lang = 'zh-CN', type: string | 0 | 1 = 1) {
  const t = trans.bind(null, lang);
  if (type === 1) {
    return `tooltip(${t('tooltip')}): Object {
      visible(${t('visible')}): Boolean
      shared(${t('shared')}): Boolean[if: "$.visible"]
    }`;
  } else if (type === 0) {
    return `tooltip(${t('tooltip')}): Object {
      visible(${t('visible')}): Boolean
    }`;
  }
  return `tooltip(${t('tooltip')}): Object {
  visible(${t('visible')}): Boolean
  shared(${t('shared')}): Boolean[if: "$.visible && $.__p.${type}"]
}`;
}

export function width(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `width(${t('width')}): Number`;
}

export function height(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `height(${t('height')}): Number`;
}

export function padding(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `padding(${t('padding')}): Padding`;
}

export function color(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `color(${t('color')}): Colors`;
}

/** Radar */
export function line(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `line(${t('line')}): Object {
  visible(${t('visible')}): Boolean
  size(${t('size')}): Number[if: "$.visible", min:0, max: 1000]
  /*
  lineDash(${'line dash'}): Numbers
  style(${t('style')}): Object {
    opacity(${t('opacity')}): Number[min:0, max: 1, step: 0.1]
  }
  */
}`;
}

/** Radar */
export function area(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `area(${t('area')}): Object {
  visible(${t('visible')}): Boolean
  /*
  color(${t('color')}): Color
  
  style(${t('style')}): Object {
    opacity(${t('opacity')}): Number[min:0, max: 1, step: 0.1]
  }
  */
}`;
}

/** Line Radar */
export function point(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `point(${t('point')}): Object {
  visible(${t('visible')}): Boolean
  size(${t('size')}): Number[if: "$.visible", min:0, max: 1000]
  shape(${t('shape')}): Enum {
    circle(${t('circle')})
    point(${t('point shape')})
    square(${t('square')})
    diamond(${t('diamond')})
    hexagon(${t('hexagon')})
    triangle(${t('triangle')})
    cross(${t('cross')})
  }
  color(${t('color')}): Color
  /*
  opacity(${t('opacity')}): Number[min:0, max: 1, step: 0.1]
  */
}`;
}

/** Column */
export function columnWidthRatio(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `columnWidthRatio(${t('column width ratio')}): Number[min:0, max: 1, step: 0.1]`;
}

/** Bar */
export function barWidthRatio(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `barWidthRatio(${t('bar width ratio')}): Number[min:0, max: 1, step: 0.1]`;
}

/** Line */
export function lineStyle(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `lineStyle(${t('line')}): Object{
  /*
  lineDash(${'line dash'}): Numbers
  */
  lineWidth(${t('line width')}): Number[min: 0, max: 100, step: 1]
  stroke(${t('color')}): Color
  opacity(${t('opacity')}): Number[min:0, max: 1, step: 0.1]
}`;
}

/** Pie Ring Radar */
export function radius(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `radius(${t('radius')}): Number[min:0, max: 1, step: 0.1]`;
}

/** Line Radar(暂时无效) */
export function smooth(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `smooth(${t('smooth')}): Boolean`;
}

export function barSize(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `barSize(${t('bar size')}): Number[min:0, max: 1000]`;
}

export function columnSize(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `columnSize(${t('column size')}): Number[min:0, max: 1000]`;
}

export function innerRadius(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `innerRadius(${t('inner radius')}):Number[min:0, max: 1, step: 0.1]`;
}

export function lineSize(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `lineSize(${t('line size')}): Number[min: 0, max: 1000]`;
}

export function regressionline(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `regressionline(${t('regression line')}): Object{
  visible(${t('visible')}): Boolean
  type(${t('type')}): Enum[if: "$.visible"] {
    linear(${t('linear')})
    exp(${t('exp')})
    loess(${t('loess')})
    log(${t('log')})
    poly(${t('poly')})
    pow(${t('pow')})
    quad(${t('quad')})
  }
  showConfidence(${t('showConfidence')}): Boolean[if: "$.visible"]
}`;
}

/**
 * 坐标轴
 */
function axis(lang: Lang = 'zh-CN', hasTitle: boolean) {
  const t = trans.bind(null, lang);
  const title = hasTitle
    ? `
title(${t('title')}): Object[if: "$.visible"] {
  visible(${t('visible')}): Boolean
  /*
  autoRotate(${t('auto rotate')}): Boolean[if: "$.visible"]
  */
  text(${t('text')}): String[if: "$.visible"]
}`
    : '';
  return `Object {
  visible(${t('visible')}): Boolean
  ${title}
  /*
  type(${t('type')}): Enum[if: "$.visible"] {
    category(category)
    time(time)
    linear(linear)
  }
  min(min): Number[if: "$.visible && $.type == linear"]
  max(max): Number[if: "$.visible && $.type == linear"]
  tickCount(tickCount): Number[if: "$.visible"]
  tickInterval(tickInterval): Number[if: "$.visible"]
  groupBy(groupBy): String[if: "$.visible && $.type != linear"]
  position(${t('position')}): Enum[if: "$.visible"] {
    default(default)
    opposite(opposite)
  }
  */
  line(${t('axis rulers')}): Object[if: "$.visible"] {
    visible(${t('visible')}): Boolean
    /*
    style(${t('style')}): Style[if: "$.visible"]
    */
  }
  label(${t('axis label')}): Object[if: "$.visible"] {
    visible(${t('visible')}): Boolean
    offset(${t('entire offset')}): Number[if: "$.visible"]
    offsetX(${t('x offset')}): Number[if: "$.visible"]
    offsetY(${t('y offset')}): Number[if: "$.visible"]
    /*
    rotate(${t('rotate')}): Number[if: "$.visible", max: 90]
    style(${t('style')}): Style[if: "$.visible"]
    */
  }
  tickLine(${t('tick line')}): Object[if: "$.visible"] {
    visible(${t('visible')}): Boolean
  }
  grid(${t('grid')}): Object[if: "$.visible"] {
    visible(${t('visible')}): Boolean
  }
  /*
  autoRotateLabel(${t('auto rotate label')}): Boolean[if: "$.label.visible && $.visible"]
  autoHideLabel(${t('auto hide label')}): Boolean[if: "$.label.visible && $.visible"]
  autoRotateTitle(${t('auto rotate title')}): Boolean[if: "$.title.visible && $.visible"]
  */
}`;
}

// scatter
export function size(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `size(${t('point size')}): Number`;
}
export function pointSize(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `pointSize(${t('point size')}): Number`;
}

export function bubbleSize(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `pointSize(${t('point size')}): MinMax`;
}

export function pointStyle(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `pointStyle(${t('style')}): Object{
  stroke(${t('border color')}): Color
}`;
}

// 梯形图
export function percentage(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `percentage(${t('percentage')}): Object{
  visible(${t('visible')}): Boolean
  line(${t('line')}): Object{
    visible(${t('visible')}): Boolean
  }
  text(${t('text')}): Object{
    visible(${t('visible')}): Boolean
    content(${t('content')}): String[if: "$.visible"]
  }
  adjustColor(${t('adjust color')}): Boolean
}`;
}

export function dynamicHeight(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `dynamicHeight(${t('dynamic height')}): Boolean[if: "!$.compareField"]`;
}

export function transpose(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `transpose(${t('transpose')}): Boolean`;
}

// WaterFull
export function total(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `showTotal(${t('total')}): Object{
  visible(${t('visible')}): Boolean
  label(${t('text')}): String[if: "$.visible"]
}`;
}

export function risingFill(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `risingFill(${t('risingFill')}): Color`;
}

export function fallingFill(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `fallingFill(${t('fallingFill')}): Color`;
}

export function leaderLine(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `leaderLine(${t('leader line')}): Object{
  visible(${t('visible')}): Boolean
}`;
}

export function labelMode(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `labelMode(${t('label mode')}): Enum {
    absolute(${t('absolute')})
    difference(${t('difference')})
}`;
}

// StepLine
export function step(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `step(${t('step type')}): Enum {
    hv(${t('hv')})
    vh(${t('vh')})
    vhv(${t('vhv')})
    hvh(${t('hvh')})
}`;
}

// Heatmap
export function intensity(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `intensity(${t('intensity')}): Number[min: 0]`;
}

export function hradius(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `radius(${t('radius')}): Number`;
}

export function type(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `type(${t('heatmap type')}): Enum {
    polygon(${t('polygon')})
    density(${t('density')})
  }`;
}

export function shape(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `shape(${t('shape type')}): Enum {
    square(${t('rect')})
    circle(${t('circle')})
}`;
}

export function shapeSize(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `shapeSize(${t('shape size')}): MinMax[if: "$.sizeField"]`;
}

export function forceSquare(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `forceSquare(${t('force square')}): Boolean`;
}

// Histogram
export function binNumber(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `binNumber(${t('bin number')}): Number[min: 0]`;
}

export function binWidth(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `binWidth(${t('bin width')}): Number[min: 0]`;
}

export function liquidMin(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `min(${t('min')}): Number`;
}

export function liquidMax(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `max(${t('max')}): Number`;
}

export function liquidColor(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `color(${t('liquid color')}): Color`;
}

export function liquidStyle(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `liquidStyle(${t('liquid style')}): Object{
    lineWidth(${t('border width')}): Number[min: 0]
    stroke(${t('border color')}): Color
  }`;
}

// gauge
export function percent(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `percent(${t('percent')}): Number`;
}
export function startAngle(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `startAngle(${t('startAngle')}): Number`;
}
export function endAngle(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `endAngle(${t('endAngle')}): Number`;
}
export function value(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `value(${t('value')}): Number`;
}

/** box */
export function boxStyle(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `boxStyle(${t('box style')}): Object{
  fill(${t('fill')}): Color
  stroke(${t('stroke')}): Color
  opacity(${t('opacity')}): Number[min:0, max: 1, step: 0.1]
}`;
}

// pie
export function statistic(lang: Lang = 'zh-CN') {
  const t = trans.bind(null, lang);
  return `statistic(${t('statistic')}): Object {
  visible(${t('visible')}): Boolean
  title(${t('pie title')}): Object[if: "$.visible"] {
    visible(${t('visible')}): Boolean
    offsetX(${t('x offset')}): Number[if: "$.visible"]
    offsetY(${t('y offset')}): Number[if: "$.visible"]
    rotate(${t('rotate')}): Number[if: "$.visible", max: 90]
  }
  content(${t('pie content')}): Object[if: "$.visible"] {
    visible(${t('visible')}): Boolean
    offsetX(${t('x offset')}): Number[if: "$.visible"]
    offsetY(${t('y offset')}): Number[if: "$.visible"]
    rotate(${t('rotate')}): Number[if: "$.visible", max: 90]
  }
}`;
}
