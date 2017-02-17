// var y = 5
// var z

// function foo (x) {
//   y++
//   z = x * y
// }

// foo(20)
// console.log(z)

function bar (x) {
  var y = 5
  var z

  function foo (x) {
    y++
    z = x * y
  }

  foo(x)
  return z
}

console.log(bar(20))
console.log(bar(25))
