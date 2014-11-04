'use strict';

var isPathGlobal = require('is-path-global');

/**
 * Get all global paths from an array
 *
 * @param {Array} arr
 * @api public
 */

module.exports = function (arr) {
	return arr.filter(function (path) {
		return isPathGlobal(path);
	});
};
