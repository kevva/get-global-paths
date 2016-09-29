import test from 'ava';
import m from './';

test('return an array of global paths', t => {
	const fixtures = [
		'/usr/bin/sh',
		'/usr/bin/ls',
		__dirname
	];

	t.deepEqual(m(fixtures), [
		'/usr/bin/sh',
		'/usr/bin/ls'
	]);
});
