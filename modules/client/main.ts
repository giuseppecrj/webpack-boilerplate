import './polyfills'
import './main.sass'
// http://blog.ng-book.com/introduction-to-redux-with-typescript-and-angular-2/#core-redux-ideas

import { createStore } from 'redux'

// ---------- MESSAGES ----------

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export class MessageActions {
  static addMessage (message) {
    return { type: ADD_MESSAGE, message, created_at: new Date() }
  }

  static deleteMessage (index) {
    return { type: DELETE_MESSAGE, index }
  }
}

let initialState = { messages: [] }

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { messages: state.messages.concat(action.message) }
    case DELETE_MESSAGE:
      let idx = action.index
      return { messages: [
        ...state.messages.slice(0, idx),
        ...state.messages.slice(idx + 1, state.messages.length)
      ]}
    default:
      return state
  }
}

let store = createStore(reducer)

store.dispatch(MessageActions.addMessage('Would you say the fringe was made of silk?'))
store.dispatch(MessageActions.addMessage(`Wouldn't have no other kind of silk`))
store.dispatch(MessageActions.addMessage('Has it really got a team of snow white horses'))

console.log(store.getState())
