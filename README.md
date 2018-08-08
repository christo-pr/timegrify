# timegrify

[![npm](https://img.shields.io/npm/v/timegrify.svg)](https://www.npmjs.com/package/timegrify)
[![build status](https://img.shields.io/travis/CrystalStream/timegrify.svg)](https://travis-ci.org/CrystalStream/timegrify.svg?branch=master)
[![styled with standard](https://img.shields.io/badge/styled_with-standard-ff69b4.svg)](https://github.com/standard/standard)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/CrystalStream/timegrify.svg)](LICENSE)

> Work with the time as if you were human

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

```shell
npm install timegrify
```


## Usage

```js
const timegrify = require('timegrify');

timegrify('2 years').toMilis() // => 63072000000
```


## Supported values

| **YEAR** | **DAY** | **HOURS** |
| -------- | ------- | --------- |
| `year`   | `day`   | `hour`    |
| `years`  | `days`  | `hours`   |


## Methods

> For now only has one method. Future versions will support more methods

| Method       | Description                                  |
| ------------ | -------------------------------------------- |
| `.toMilis()` | Return the value transformed to milliseconds |
| `.toSec()`   | Return the value transformed to seconds      |


## Contributors

| Name                  |
| --------------------- |
| **Christofer Flores** |


## License

[MIT](LICENSE) © Christofer Flores
