'use strict';
const isPathGlobal = require('is-path-global');

module.exports = paths => paths.filter(isPathGlobal);
