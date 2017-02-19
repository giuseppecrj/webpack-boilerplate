import { Box } from './Box'
export const nextCharForNumberString = (str) => (
 Box(str)
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase(c))
)

// const result = nextCharForNumberString(' 64 ')
