'use strict';

var isPathGlobal = require('is-path-global');

module.exports = function (arr) {
	return arr.filter(function (path) {
		return isPathGlobal(path);
	});
};
