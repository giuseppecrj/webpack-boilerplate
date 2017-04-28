import { Component } from '@angular/core'
import { CounterService } from './counter.client.service'

import * as template from './counter.client.component.pug'

@Component({
  selector: 'counter',
  template,
  providers: [CounterService]
})

export class CounterComponent {
  constructor (counterService: CounterService) {
    this.counterService = counterService
    this.items = counterService.items
  }

  ngOnInit () {
    this.counterService.init()
  }
}
