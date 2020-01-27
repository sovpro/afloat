"use strict"

module.exports = afloat

function afloat (val, preserve) {
  if (val === null) return
  let num = Math.trunc (Math.abs (val))
  if (isNaN (num) || num === Infinity) return
  if (num === 0) return 0
  let pow = Math.pow (10, Math.ceil (Math.log10 (num)) || 1)
  let preserve_num = 0
  if (preserve) preserve_num = ((val - num) / pow)
  return preserve_num + num / pow
}
