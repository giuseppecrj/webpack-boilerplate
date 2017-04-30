import { combineReducers } from '@ngrx/store'
import { clock } from './clock/clock.client.reducer'

export const rootReducer = combineReducers({
  clock
})
