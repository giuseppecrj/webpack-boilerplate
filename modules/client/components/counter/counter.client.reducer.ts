import { DECREMENT, INCREMENT } from './counter.client.actions'

let initialState = []

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload

    case DECREMENT:
      return state.filter(item => { return item.id !== action.payload.id })

    default:
      return state
  }
}
