# get-global-paths [![Build Status](https://travis-ci.org/kevva/get-global-paths.svg?branch=master)](https://travis-ci.org/kevva/get-global-paths)

> Get all global paths from an array


## Install

```
$ npm install --save get-global-paths
```


## Usage

```js
const getGlobalPaths = require('get-global-paths');

const paths = [
	'/home/johndoe',
	'/usr/bin',
	'/usr/local/bin'
];

getGlobalPaths(paths);
//=> ['/usr/bin', '/usr/local/bin']
```


## API

### getGlobalPaths(paths)

Type: `Array`

An array of paths to match against.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
