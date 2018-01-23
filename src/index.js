import tendentious from 'random-tendentious'
import { isEssential } from 'pytils'

const createNumbers  = tendentious({ l: [0, 9] })
const upperLetter  = tendentious({ l: [65, 90] })
const letter  = tendentious({ l: [97, 121] })

const coin = () => Math.random() > 0.5

const createLetter = () => coin()
  ? upperLetter()
  : letter()

const createChar = () => coin()
  ? createLetter()
  : createNumbers()

const replace = (char, key) => createChar()

const replaceAll = pattern => String.replace(pattern, /[\w\W]/gim, replace)

const hashCreator = pattern => {
  isEssential([{ pattern, t: 'string' }])

  return replaceAll(pattern)
}

export default hashCreator
