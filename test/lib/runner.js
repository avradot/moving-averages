import test from 'ava'

import {
  dma,
  ma,
  sma,
  ema,
  rma,
  wma
} from '../../src'

const methods = {
  dma,
  ma,
  sma,
  ema,
  rma,
  wma
}


export const only = true

const to_fixed_10 = n => n.toFixed(10)

export const get_test = only => only ? test.only : test

export const type = type => {
  return obj => {
    obj.type = type
    return obj
  }
}

export function runner (c) {
  const type = c.type
  const [
    args,
    result,
    only
  ] = c

  const d_args = JSON.stringify(args)
  const d = `${type}(${d_args})`

  get_test(only)(d, t => {
    const r = methods[type](...args)

    if (Array.isArray(result)) {
      t.deepEqual(r.map(to_fixed_10),
        result.map(to_fixed_10))
      return
    }

    t.is(to_fixed_10(r), to_fixed_10(result))
  })
}
