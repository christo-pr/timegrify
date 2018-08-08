'use strict'

const autoBind = require('auto-bind')
const toMilis = require('./src/to-milis')
const toSec = require('./src/to-sec')
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

  toSec() {
    const parsedTime = parseTime(this._time)
    return toSec(parsedTime)
  }
}

module.exports = function (time) {
  return new Timegrify(time)
}
