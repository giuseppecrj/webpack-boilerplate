import { Component, Inject } from '@angular/core' // eslint-disable-line no-unused-vars
import { AppStore } from '../app.client.store' // eslint-disable-line no-unused-vars

import { CounterActions } from './counter.client.actions'

import * as template from './counter.client.component.pug'

@Component({
  selector: 'counter',
  template
})

export class CounterComponent {
  constructor (@Inject(AppStore) store) {
    this.store = store
  }

  ngOnInit () {
    this.subscription = this.store.subscribe(() => this.readState())
    this.readState()
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

  readState () {
    let state = this.store.getState()
    this.counter = state.counter.count
  }

  increment () {
    this.store.dispatch(CounterActions.increment())
  }

  decrement () {
    this.store.dispatch(CounterActions.decrement())
  }
}
