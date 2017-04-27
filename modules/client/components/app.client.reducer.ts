import { combineReducers } from '@ngrx/store'
import { CounterReducer } from './counter/counter.client.reducer'

export const rootReducer = combineReducers({
  counter: CounterReducer
})
