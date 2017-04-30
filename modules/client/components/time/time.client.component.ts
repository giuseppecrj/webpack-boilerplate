import { Component, Input } from '@angular/core'

@Component({
  selector: 'time',
  template: '<h3>{{ values }}</h3>'
})

export class TimeComponent {
  @Input() values
}
