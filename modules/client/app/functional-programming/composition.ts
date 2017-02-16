export const makeAdder = (constantValue) => {
  return (value) => {
    return constantValue + value
  }
}

// let add10 = makeAdder(10)
// console.log(add10(20))
// console.log(add10(30))
// console.log(add10(40))

// closure is a functions scope that's kept alive by a reference to that function

export function grandParent (g1, g2) {
  let g3 = 3
  return (p1, p2) => {
    let p3 = 33
    return (c1, c2) => {
      let c3 = 333
      return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3
    }
  }
}

// let parentFunc = grandParent(1, 2)
// let childFunc = parentFunc(11, 22)
// console.log(childFunc(111, 222))

/*
  Function Composition
*/

export let add10 = (value) => value + 10
export let mult5 = (value) => value * 5
export let mult5AfterAdd10 = (value) => mult5(add10(value))
