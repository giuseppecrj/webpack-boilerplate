/*
  Currying
  // https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe#.9nt3vkcw8
  // https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49#.r9b1iqcs7
  - When a function is designed for the first argument to be ‘prefilled’ before the function itself is fully executed
*/

export let add = (x) => (y) => x + y
export let compose = (f, g) => {
  return (x) => {
    return f(g(x))
  }
}

export let mult5 = (value) => value * 5
export let mult5AfterAdd10v2 = compose(mult5, add(10)) // passes 10 to the x paramets in add
// console.log(mult5AfterAdd10v2(10)) // calls the actual function
