'use strict';

var test = require('ava');
var getGlobalPaths = require('./');

test('return an array of global paths', function (t) {
	var arr = [
		'/usr/bin/sh',
		'/usr/bin/ls',
		__dirname
	];

	t.assert(getGlobalPaths(arr).length === 2, getGlobalPaths(arr).length);
	t.end();
});
