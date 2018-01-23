import tendentious from 'random-tendentious'
import { isEssential, toArray, whileMatch } from 'pytils'

const toChar = code => String.fromCharCode(code)

const coin = () => Math.random() > 0.5

const createNumbers  = tendentious({ f: 'floor', l: [0, 9.999] })

const upperLetterCode  = tendentious({ f: 'floor', l: [65, 90.999] })

const letterCode  = tendentious({ f: 'floor', l: [97, 121.999] })

const upperLetter  = () => toChar(upperLetterCode())

const letter  = () => toChar(letterCode())

const createLetter = () => coin()
  ? upperLetter()
  : letter()

const createChar = () => coin()
  ? createLetter()
  : createNumbers()

const replace = (args) => {
  const [_, UP, L, N, AN, G] = args
  if (UP) {
    return upperLetter()
  }
  if (L) {
    return letter()
  }
  if (AN) {
    return createNumbers()
  }
  if (N) {
    return createNumbers()
  }
  if (G) {
    return createChar()
  }
  return _
}

const patternMaker = /(([A-Z])|([a-z])|(@)|(\d)|([*])|([\w\W]))/gm

const replaceAll = whileMatch(patternMaker, replace)

const hashCreator = pattern => {
  isEssential('hash-creator')([{ pattern, t: 'string' }])

  return () => replaceAll(pattern).join('')
}

export default hashCreator
