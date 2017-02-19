// const Either = Right | Left

export const Right = x => (
  {
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    toString: () => `Right(${x})`
  }
)

export const Left = x => (
  {
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    toString: () => `Left(${x})`
  }
)

export const fromNullable = x =>
  x !== null ? Right(x) : Left(null)

export const tryCatch = f => {
  try {
    Right(f())
  } catch (e) {
    return Left(e)
  }
}

// const singleUser = {
//   address: {
//     street: {
//       number: '3015',
//       name: 'Ocean Park'
//     }
//   }
// }

// const streetName = user =>
//   fromNullable(user.address)
//     .chain(a => fromNullable(a.street))
//     .map(s => s.name)
//     .fold(e => 'no street', n => n)

// const result = streetName(singleUser)

// export const findColor = name =>
//   fromNullable({ red: '#ff444', blue: '#3b5998', yellow: '#fff68f' }[name])

// const result = findColor('blue')
//   .map(c => c.slice(1))
//   .fold(
//     e => 'No Color',
//     c => c.toUpperCase(c))

// const result = Left(2)
//   .map(x => x + 1)
//   .map(x => x / 2)
//   .fold(x => 'error', x => x)

// console.log(String(result))
