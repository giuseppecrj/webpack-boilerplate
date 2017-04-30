import { Component, Inject } from '@angular/core' // eslint-disable-line no-unused-vars
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'

import { HOUR, SECOND } from './clock.client.reducer'

import * as template from './clock.client.component.pug'

@Component({
  selector: 'clock',
  template
})

export class ClockComponent {
  click$ = new Subject().map((value) => ({ type: HOUR, payload: parseInt(value) }))
  seconds$ = Observable.interval(1000).mapTo({ type: SECOND, payload: 3 })

  constructor (store: Store) {
    this.time = store.select('clock')
    Observable.merge(
      this.click$,
      this.seconds$
    )
    .subscribe((action) => store.dispatch(action))
  }
}
