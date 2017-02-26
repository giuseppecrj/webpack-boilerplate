import { module } from 'angular'
import CommonModule from './common/common'
import ComponentsModule from './components/components'
import { ConfigModule } from './app.client.store'

import * as template from './app.client.component.html'
import './app.client.component.css'

const AppComponent = { template }

export const app = module('app', [
  ConfigModule.name,
  CommonModule.name,
  ComponentsModule.name
])
.component('app', AppComponent)
