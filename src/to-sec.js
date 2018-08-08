'use strict'

const CONST = require('../utils/time-values')

function toSec ({ value, multiplier }) {
  let sec
  switch (multiplier) {
    case 'year':
      sec = 1 * value * CONST.YEAR * CONST.DAY * CONST.HOUR * CONST.MIN
      break

    case 'day':
      sec = 1 * value * CONST.DAY * CONST.HOUR * CONST.MIN
      break

    default:
      sec = 1 * value * CONST.HOUR * CONST.MIN
      break
  }

  return sec
}

module.exports = toSec
