'use strict';

var getGlobalPaths = require('./');
var test = require('ava');

test('return an array of global paths', function (t) {
	var arr = [
		'/usr/bin/sh',
		'/usr/bin/ls',
		__dirname
	];

	t.assert(getGlobalPaths(arr).length === 2);
	t.end();
});
