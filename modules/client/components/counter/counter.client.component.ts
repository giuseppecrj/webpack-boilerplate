import { Component, Inject } from '@angular/core' // eslint-disable-line no-unused-vars
import { Store } from '@ngrx/store'

import * as template from './counter.client.component.pug'

@Component({
  selector: 'counter',
  template
})

export class CounterComponent {
  constructor (store: Store) {
    this.store = store
    // this.subscription = this.store.select('counter').subscribe((response) => {
    //   this.items = response.items
    // })
    this.items = this.store.select('counter', 'items')
  }

  // ngOnInit () {
  //   this.subscription = this.store.subscribe(() => this.readState())
  //   this.readState()
  // }

  // ngOnDestroy () {
  //   this.subscription.unsubscribe()
  // }

  // readState () {
  //   let state = this.store.getState()
  //   this.items = state.counter.items
  // }

  // increment () {
  //   this.store.dispatch(CounterActions.increment())
  // }

  // decrement () {
  //   this.store.dispatch(CounterActions.decrement())
  // }
}
