// associativity and semigroup
// semigroup: 'a'
// associativity 'a'.concat('b'.concat('c'))

// const res = 'a'.concat('b'.concat('c'))
// const res = [1, 2].concat([3, 4].concat([5, 6]))
// const res = (1 + 1) + 1 === 1 + (1 + 1)
// import { Map } from 'immutable-ext'

export const Sum = x => (
  {
    x,
    concat: ({ x: y }) =>
      Sum(x + y),
    toString: () => `Sum:${x}`
  }
)

Sum.empty = () => Sum(0)

// const res = Sum(1).concat(Sum(2))

export const All = x => (
  {
    x,
    concat: ({ x: y }) =>
      All(x && y),
    toString: () => `All(${x})`
  }
)

All.empty = () => All(true)

// const res = All(true).concat(All(true))

export const First = x => (
  {
    x,
    concat: () =>
      First(x),
    toString: () => `First(${x})`
  }
)

// const res = First('blah').concat(First('ice cream'))

// const acct1 = Map({ name: First('Nico'), isPaid: All(true), points: Sum(10), friends: ['Franklin'] })
// const acct2 = Map({ name: First('Nico'), isPaid: All(false), points: Sum(2), friends: ['Gatsby'] })
// const res = acct1.concat(acct2)

// const res = Sum.empty().concat(Sum(1).concat(Sum(2)))
// const res = All(true).concat(All(false)).concat(All.empty())

// const sum = xs =>
//   xs.reduce((acc, x) => acc + x, 0)
// const res = sum([1, 2, 3])

// const all = xs =>
//   xs.reduce((acc, x) => acc && x, true)
// const res = all([false])

// const first = xs =>
//   xs.reduce((acc, x) => acc)

// const res = first(['blah'])

// console.log(String(res))
