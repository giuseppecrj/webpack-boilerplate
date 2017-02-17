Functional-Light Programming
- Pure Functions
- Composition
- Immutability
- Closure
- Recursion
- List Transformation (map)
- List Exclusion (filter)
- List Composition (reduce)
- List Iteration (forEach)


- Side Effects

```
var y
var z

let foo = (x) => {
  y = x * 2
  z = x * 3
}

foo(5)

console.log(y, z)
```

- Pure
```
function bar (x, y, z) {
  foo(x)
  return [y, z]
  function foo (x) {
    y = y * x
    z = y * x
  }
}

console.log(bar(5, 2, 3))

```

Task 1

```
function bar (x, y) {
  var z

  foo(x)

  return [y, z]

  function foo (x) {
    y++
    z = x * y
  }
}

bar(20, 5) // [6, 120]
bar(25, 5) // [6, 150]
```

Reach for the array before reaching for the object

### Composition

take the output of one function and the output will become part of the input for another function
