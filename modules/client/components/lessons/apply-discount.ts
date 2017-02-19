import { Box } from './Box'

const moneyToFloat = (str) =>
  Box(str)
    .map(s => str.replace(/\$/g, ''))
    .map(r => parseFloat(r))

const percentToFloat = (str) =>
  Box(str.replace(/%/g, ''))
    .map(replaced => parseFloat(replaced))
    .map(number => number * 0.01)

export const applyDiscount = (price, discount) =>
  moneyToFloat(price)
  .fold(cost =>
    percentToFloat(discount)
    .fold(savings =>
      cost - cost * savings))

// const result = applyDiscount('$5.00', '20%')
// console.log(result)
