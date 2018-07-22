'use strict'

const CONST = require('../utils/time-values')

function toMilis ({ value, multiplier }) {
  let milis
  switch (multiplier) {
    case 'year':
      milis = 1000 * value * CONST.YEAR * CONST.DAY * CONST.HOUR * CONST.MIN
      break

    case 'day':
      milis = 1000 * value * CONST.DAY * CONST.HOUR * CONST.MIN
      break

    default:
      milis = 1000 * value * CONST.HOUR * CONST.MIN
      break
  }

  return milis
}

module.exports = toMilis
