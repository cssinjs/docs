require('ts-node/register/transpile-only');
const node = require('./src/gatsby/node');

exports.createPages = node.createPages;
