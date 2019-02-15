require('ts-node/register/transpile-only');
const node = require('./src/gatsby/node');

Object.keys(node).forEach((key) => {
  exports[key] = node[key];
});
