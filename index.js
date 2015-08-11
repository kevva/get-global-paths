'use strict';
var isPathGlobal = require('is-path-global');

module.exports = function (arr) {
	return arr.filter(isPathGlobal);
};
