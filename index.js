'use strict'

const autoBind = require('auto-bind')
const toMilis = require('./src/to-milis')
const parseTime = require('./src/parse-time')

class Timegrify {

  constructor (time) {
    this._time = time

    autoBind(this)
  }

  toMilis () {
    const parsedTime = parseTime(this._time)
    return toMilis(parsedTime)
  }
}

module.exports = function (time) {
  return new Timegrify(time)
}
