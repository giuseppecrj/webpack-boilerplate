import { InjectionToken } from '@angular/core'
import { rootReducer as reducer } from './app.client.reducer'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export const AppStore = new InjectionToken('App.store')

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const createAppStore = () => {
  return createStore(
    reducer,
    enhancer
  )
}

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
]
