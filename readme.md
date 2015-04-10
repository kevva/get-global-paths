# get-global-paths [![Build Status](http://img.shields.io/travis/kevva/get-global-paths.svg?style=flat)](https://travis-ci.org/kevva/get-global-paths)

> Get all global paths from an array


## Install

```
$ npm install --save get-global-paths
```


## Usage

```js
var getGlobalPaths = require('get-global-paths');

var arr = [
	'/home/johndoe',
	'/usr/bin',
	'/usr/local/bin'
];

getGlobalPaths(arr);
//=> ['/usr/bin', '/usr/local/bin']
```


## API

### getGlobalPaths(array)

Type: `array`

An array of paths to match against.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
