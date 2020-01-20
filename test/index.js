"use strict";
const afloat = require ('./../')
const assert = require ('assert')

let error_count = 0

function assertWithInfo (actual, expected, message) {
  process.stdout.write (message)
  try {
    assert.strictEqual (actual, expected, message)
    console.log (' ... OK')
  }
  catch (error) {
    console.log (' ... FAIL')
    console.error (error)
    error_count += 1
  }
}

process.once ('exit', function (code) {
  process.exit (Math.min (1, error_count))
})

assertWithInfo (
    afloat (123.456)
  , 0.123
  , 'The result of afloating 123.456 should be 0.123'
)

assertWithInfo (
    afloat (-Infinity)
  , undefined
  , 'The result of afloating Infinity should be undefined'
)

assertWithInfo (
    afloat (0)
  , 0
  , 'The result of afloating 0 should be 0'
)

assertWithInfo (
    afloat (0.123)
  , 0
  , 'The result of afloating a 0.123 should be 0'
)

assertWithInfo (
    afloat (1)
  , 1
  , 'The result of afloating 1 should be 0.1'
)

assertWithInfo (
    afloat ('Hi!')
  , undefined
  , 'The result of afloating a non-number should be undefined'
)

assertWithInfo (
    afloat (null)
  , undefined
  , 'The result of afloating null should be undefined'
)

assertWithInfo (
    afloat (undefined)
  , undefined
  , 'The result of afloating undefined should be undefined'
)


