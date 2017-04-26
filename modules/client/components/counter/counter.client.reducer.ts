import { DECREMENT, INCREMENT } from './counter.client.actions'

let initialState = { count: 0 }

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 })

    case DECREMENT:
      return Object.assign({}, state, { count: state.count - 1 })

    default:
      return state
  }
}
