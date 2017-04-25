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

export const reducer = (state, action) => {
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
      return {}
  }
}

let store = new Store(reducer, { messages: [] })

store.dispatch(MessageActions.addMessage('Would you say the fringe was made of silk?'))
store.dispatch(MessageActions.addMessage(`Wouldn't have no other kind of silk`))
store.dispatch(MessageActions.addMessage('Has it really got a team of snow white horses'))

console.log(store.getState())
