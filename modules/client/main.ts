import './polyfills'
import './main.sass'

// import { Box } from './components/Box'
// const Either = Right || Left
const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  toString: () => `Right(${x})`
})

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  toString: () => `Left(${x})`
})

const result = Left(3).map(x => x + 1).map(x => x / 2)
console.log(String(result))
