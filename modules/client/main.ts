import './polyfills'
import './main.sass'

// http://blog.ng-book.com/introduction-to-redux-with-typescript-and-angular-2/#core-redux-ideas
// https://github.com/ng-book/angular2-redux-chat
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './components/app.client.module'

if (module.hot) {
  module.hot.accept()
}

platformBrowserDynamic().bootstrapModule(AppModule)
