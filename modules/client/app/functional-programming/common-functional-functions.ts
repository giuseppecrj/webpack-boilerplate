let map = (f, array) => {
  let newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray[i] = f(array[i])
  }
  return newArray
}

let things = [1, 2, 3, 4]
export let newThings = map(v => v * 10, things)

let filter = (pred, array) => {
  let newArray = []
  for (var i = 0; i < array.length; i++) {
    if (pred(array[i])) {
      newArray[newArray.length] = array[i]
    }
  }
  return newArray
}

let isOdd = x => x % 2 !== 0
let numbers = [1, 2, 3, 4, 5]
export let oddNumbers = filter(isOdd, numbers)

let reduce = (f, start, array) => {
  let acc = start
  for (var i = 0; i < array.length; i++) {
    acc = f(array[i], acc)
  }
  return acc
}

let addSimple = (x, y) => x + y
let values = [1, 2, 3, 4, 5]
export let sumOfValues = reduce(addSimple, 0, values)
