'use strict'

const milisValue = '2 years'
const secValue = '1 year'

const parseMilisValue = {
  value: 2,
  multiplier: 'years'
}

const parseSecValue = {
  value: 1,
  multiplier: 'year'
}

function parseTime (time) {
  return time === milisValue ? parseMilisValue : parseSecValue
}

module.exports = {
  parseTime,
  milisValue,
  secValue,
  parseMilisValue,
  parseSecValue
}
