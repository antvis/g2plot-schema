const configs = require('../lib/schemas/configs');
const schema = require('../lib/schemas/index');
const fs = require('fs');
const types = require('schema-util/lib/types');

types.supported.push('Colors');
types.supported.push('Padding');

for (const type of Object.keys(configs)) {
  fs.writeFileSync(`./schemas/${type}-en-US.schema`, schema.getSchemaByType(type, 'en-US'), 'utf-8');
  fs.writeFileSync(`./schemas/${type}-zh-CN.schema`, schema.getSchemaByType(type, 'zh-CN'), 'utf-8');
}
