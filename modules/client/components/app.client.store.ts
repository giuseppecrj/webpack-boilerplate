import { InjectionToken } from '@angular/core'
import { createStore, compose } from 'redux'
import { rootReducer as reducer } from './app.client.reducer'
// import { createStore, compose, applyMiddleware } from 'redux'
// import * as thunk from 'redux-thunk'

export const AppStore = new InjectionToken('App.store')

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

export const createAppStore = () => {
  return createStore(
    reducer,
    compose(devtools)
  )
}

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
]
