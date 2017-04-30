import './polyfills'
import './main.sass'
// https://egghead.io/lessons/angular-2-passing-observables-into-components-with-async-pipe?series=building-a-time-machine-with-angular-2-and-rxjs#/tab-discuss
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './components/app.client.module'

if (module.hot) {
  module.hot.accept()
}

platformBrowserDynamic().bootstrapModule(AppModule)
