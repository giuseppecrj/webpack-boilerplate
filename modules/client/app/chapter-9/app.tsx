import * as expect from 'expect'
import * as deepFreeze from 'deep-freeze'

const addCounter = (list, num) => {
  return [
    ...list, num
  ]
}

const removeCounter = (list, index) => {
  const partsBefore = list.slice(0, index)
  const partsAfter = list.slice(index + 1)
  return [
    ...partsBefore,
    ...partsAfter
  ]
}

const incrementCounter = (list, index) => {
  const partsBefore = list.slice(0, index)
  const partToChange = list[index] + 1
  const partsAfter = list.slice(index + 1)

  return [
    ...partsBefore,
    partToChange,
    ...partsAfter
  ]
}

// -------------------------------
// Tests
// -------------------------------

const testAddCounter = () => {
  const listBefore = []
  const listAfter = [0]

  deepFreeze(listBefore)

  expect(
    addCounter(listBefore, 0)
  ).toEqual(listAfter)
}

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 20]

  deepFreeze(listBefore)

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter)
}

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 11, 20]

  deepFreeze(listBefore)

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter)
}

testIncrementCounter()
testRemoveCounter()
testAddCounter()

console.log('All tests passed!')
