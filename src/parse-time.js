'use strict'

module.exports = function parseTime(time) {
  // '1 year'
  const timePieces = time.split(' ') // ['1', 'year']

  switch (timePieces[1]) {
    case 'year':
    case 'years':
      return {
        value: parseInt(timePieces[0], 10),
        multiplier: 'year'
      }

    case 'day':
    case 'days':
      return {
        value: parseInt(timePieces[0], 10),
        multiplier: 'day'
      }

    case 'hour':
    case 'hours':
      return {
        value: parseInt(timePieces[0], 10),
        multiplier: 'hour'
      }

    default:
      return {
        value: parseInt(timePieces[0], 10),
        multiplier: 'hour'
      }
  }



}