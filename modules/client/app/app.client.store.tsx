import { module } from 'angular'
import ngRedux from 'ng-redux'
import { combineReducers } from 'redux'

import { categories, category } from './components/categories/categories.state'
import { bookmarks, bookmark } from './components/bookmarks/bookmarks.state'

import React from 'react'
import ReactDOM from 'react-dom'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  categories,
  category,
  bookmarks,
  bookmark
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'
    defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

const run = ($ngRedux, $rootScope) => {
  const componentDidUpdate = DockMonitor.prototype.componentDidUpdate

  DockMonitor.prototype.componentDidUpdate = () => {
    $rootScope.$evalAsync()
    if (componentDidUpdate) {
      componentDidUpdate.apply(this, arguments)
    }
  }

  ReactDOM.render(<DevTools store={$ngRedux} />, document.getElementById('devTools'))
}
run.$inject = ['$ngRedux', '$rootScope']

class Providers {
  static $inject = ['$ngReduxProvider']
  constructor ($ngReduxProvider) {
    $ngReduxProvider.createStoreWith(rootReducer, [thunk], [DevTools.instrument()])
  }
}

export const ConfigModule = module('Config', [
  ngRedux
])
.config(Providers)
.run(run)
