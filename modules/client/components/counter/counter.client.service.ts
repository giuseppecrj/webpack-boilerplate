import { Injectable, Inject } from '@angular/core' // eslint-disable-line
import { Http } from '@angular/http'

import { AppStore } from '../app.client.store' // eslint-disable-line no-unused-vars
import { CounterActions } from './counter.client.actions'

@Injectable()
export class CounterService {
  constructor (@Inject(AppStore) store, http: Http) {
    this.store = store
    this.http = http
  }

  load () {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map((res) => res.json())
      .map((payload) => (CounterActions.show(payload)))
      .subscribe((action) => {
        this.store.dispatch(action)
      })
  }
}
