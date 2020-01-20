"use strict"

module.exports = afloat

function afloat (val) {
  if (val === null) return
  let num = Math.trunc (Math.abs (val))
  if (isNaN (num) || num === Infinity) return
  if (num === 0) return 0
  let fac = Math.ceil (Math.log10 (num))
  return num / Math.pow (10, fac)
}
