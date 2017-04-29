import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Http } from '@angular/http'

import { CounterActions } from './counter.client.actions'

@Injectable()
export class CounterService {
  constructor (store: Store, http: Http) {
    this.store = store
    this.http = http
    this.items = store.select('counter')
  }

  init () {
    return this.http.get('http://localhost:3005/api/v1/events')
      .map((res) => res.json())
      .map((payload) => {
        return CounterActions.increment(payload)
      })
      .subscribe((action) => {
        this.store.dispatch(action)
      })
  }

  remove (item) {
    this.store.dispatch(CounterActions.decrement(item))
  }
}
