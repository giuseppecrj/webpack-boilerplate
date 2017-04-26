import { Component, Inject } from '@angular/core' // eslint-disable-line no-unused-vars
import { AppStore } from '../app.client.store' // eslint-disable-line no-unused-vars

import { CounterActions } from './counter.client.actions'
import { CounterService } from './counter.client.service'

import * as template from './counter.client.component.pug'

@Component({
  providers: [CounterService],
  selector: 'counter',
  template
})

export class CounterComponent {
  constructor (@Inject(AppStore) store, counterService: CounterService) {
    this.store = store
    this.counterService = counterService
  }

  ngOnInit () {
    this.subscription = this.store.subscribe(() => this.readState())
    this.readState()
    this.counterService.load()
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
