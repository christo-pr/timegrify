'use strict'

const timings = [
  { fn: 'toMilis', value: {year: 2}, return: 63072000000 },
  { fn: 'toSec', value: {year: 1}, return: 31536000 }
]

module.exports = {
  toMilis: timings.find( t => t.fn === 'toMilis' ),
  toSec: timings.find( t => t.fn === 'toSec' )
}
