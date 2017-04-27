import { DECREMENT, INCREMENT } from './counter.client.actions'

let initialState = { items: [{ id: 1, name: 'G' }] }

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload

    case DECREMENT:
      return state.items.filter(item => { return item.id !== action.payload.id })

    default:
      return state
  }
}
