import { combineReducers } from 'redux'
import { CounterReducer } from './counter/counter.client.reducer'

export const rootReducer = combineReducers({
  counter: CounterReducer
})
