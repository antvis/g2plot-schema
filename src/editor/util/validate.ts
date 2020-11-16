export default function(val, meta, type, locale) {
  if (typeof val === 'undefined') {
    return '';
  }

  // 清除出错状态
  let errorMsg = '';
  if (!meta) {
    return errorMsg;
  }

  // 去除过长的部分
  if (meta.maxLength && val && val.length > meta.maxLength) {
    return locale.MAX_LENGHT_ERROR.replace('%s', meta.maxLength);
  }

  if (type === 'number') {
    if (val > meta.max) {
      return locale.MAX_NUMBER_ERROR.replace('%s', meta.max);
    }
    if (val < meta.min) {
      return locale.MIN_NUMBER_ERROR.replace('%s', meta.min);
    }
  }

  if (meta.minLength && val.length < meta.minLength) {
    return locale.MIN_LENGHT_ERROR.replace('%s', meta.minLength);
  }

  if (meta.regExp !== undefined) {
    const regArray = meta.regExp.match(/^\/(.*)\/$/) || meta.regExp.match(/^\/(.*)\/(i|g|ig|gi|m)$/);
    if (regArray) {
      const reg = new RegExp(regArray[1], regArray[2]);
      const match = val.match(reg);
      if (!match || !match.length) {
        errorMsg = meta.errorMsg || locale.REG_ERROR;
      }
    }
  }
  return errorMsg;
}
