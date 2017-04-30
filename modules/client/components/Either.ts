const Right = x => ({
  map: f => Right(f(x)),
  toString: () => `Right(${x})`
})

const Either = Right || Left
