// const nextCharForNumberString = str => {
//   const trimmed = str.trim()
//   const number = parseInt(trimmed)
//   const nextNumber = number + 1
//   return String.fromCharCode(nextNumber)
// }

// const nextCharForNumberString = str =>
//   String.fromCharCode(parseInt(str.trim()) + 1)

// const nextCharForNumberString = str =>
//   Box(str)
//     .map(s => s.trim())
//     .map(r => Number(r))
//     .map(i => i + 1)
//     .map(i => String.fromCharCode(i))
//     .fold(c => c.toLowerCase())

// const result = nextCharForNumberString(' 64 ')
// console.log(String(result))

// ------------------------------------------------

// const moneyToFloat = str =>
//   Box(str)
//     .map(s => s.replace(/\$/g, ''))
//     .map(s => parseFloat(s))

// const percentFloat = str =>
//   Box(str.replace(/%/g, ''))
//     .map(replaced => parseFloat(replaced))
//     .map(number => number * 0.01)

// const applyDiscount = (price, discount) =>
//   moneyToFloat(price)
//     .fold(cost => percentFloat(discount)
//       .fold(savings => cost - cost * savings))

// const result = applyDiscount('$5.00', '20%')
// console.log(String(result))
// ------------------------------------------------
