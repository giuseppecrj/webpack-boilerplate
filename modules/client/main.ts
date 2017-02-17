import './polyfills'
import './main.sass'

export function computeProduct (unsorted) {
  let sortedArray = unsorted.sort((a, b) => {
    return a - b
  })

  let product1 = 1
  let product2 = 1
  let arrayNElement = sortedArray.length - 1
  let upperBound = arrayNElement - 3

  for (let x = arrayNElement; x > upperBound; x--) {
    product1 = product1 * sortedArray[x]
  }

  product2 = sortedArray[0] * sortedArray[1] * sortedArray[arrayNElement]

  if (product1 > product2) return product1

  return product2
}

let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]
// let uniqueArray = Array.from(new Set(array))

console.log(uniqueArray(array))

export function uniqueArray (array) {
  var hashmap = {}
  var unique = []

  for (var i = 0; i < array.length; i++) {
    if (!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1
      unique.push(array[i])
    }
  }

  return unique
}
