# HASH CREATOR
Simple functions to hash creator by pattern

## Guide:
  Number: [1-9]
  Letter: [a-z]
  UpperCase: [A-Z]
  AnyLetter: @
  AnyChar: *

## Example:
```javascript
import hashCreator from 'hash-creator'

const pattern = 'Z23a@-xy**'

const myHash = hashCreator(pattern)

const pattern = myHash()
/*
results:
  T98r8-uo23
  V98c7-lks4
  O46d9-ric6
  B92e1-if70
  C62c5-gm9g
*/
```
