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
