import { Injectable, Inject } from '@angular/core' // eslint-disable-line no-unused-vars
import { Store } from '@ngrx/store'
import { CounterActions } from './counter.client.actions'

@Injectable()
export class CounterService {
  constructor (store: Store) {
    this.store = store
    this.items = store.select('counter')
  }

  loadItems () {
    let initialItems = []
    this.store.dispatch(CounterActions.increment(initialItems))
  }
}
