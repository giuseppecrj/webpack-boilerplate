import './polyfills'
import './main.sass'

// store
export class Store {
  constructor (reducer, initialState) {
    this.reducer = reducer
    this._state = initialState
    this._listeners = []
  }

  getState () {
    return this._state
  }

  dispatch (action) {
    this._state = this.reducer(this._state, action)
    this._listeners.forEach((listener) => listener())
  }

  subscribe (listener) {
    this._listeners.push(listener)
    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener)
    }
  }
}

// actions
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const PLUS = 'PLUS'

export const incrementAction = { type: INCREMENT }
export const decrementAction = { type: DECREMENT }
export const unknownAction = { type: 'UNKNOWN' }
export const plusAction = { type: PLUS, payload: 7 }

// reducers
export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case PLUS:
      return state + action.payload
    default:
      return state
  }
}
