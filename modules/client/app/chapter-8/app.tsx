// https://egghead.io/lessons/javascript-redux-react-counter-example?series=getting-started-with-redux
import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const store = createStore(counter)

let onIncrement = () => {
  store.dispatch({
    type: 'INCREMENT'
  })
}

let onDecrement = () => {
  store.dispatch({
    type: 'DECREMENT'
  })
}

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
