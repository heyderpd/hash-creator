const assert = require('assert')

import hashCreator from '../src'

const what = 'Z23a@-xy**'

describe('hash-creator', () => {
  it('basic', () => {
    const myHash = hashCreator(what)
    const pattern = myHash()
    console.log(pattern)
  })
})
