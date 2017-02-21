// 1. Functions can be anonymous
// 2. Functions only accept a single input
// 2.5. They are unary. If you need more than one parameter, the function will take one input and return a new function that takes the next input
// 2.8. Transforming from n-ary (arg1, arg2, ...) to unary (arg1) => (arg2) ... is known as currying
// 3. First class, functions can be used as inputs to other functions, and functions can return more functions

// let compose = f => g => x => f(g(x))

// let double = n => n * 2
// let inc = n => n + 1

// console.log(compose(double)(inc)(3))

// let append = s1 => s2 => s1 + s2

// console.log(append('Hello, ')('world!'))
