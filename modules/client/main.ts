import './polyfills'

import { element, bootstrap } from 'angular'
import {app} from './app/app.client.component'

// -----------------------------
// Bootstrapping the Application
// -----------------------------
let container = document.body

element(document).ready(() => {
  bootstrap(container, [app.name], {
    strictDi: true
  })
})

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => {
    let newcontainer = document.body
    let noAngularDOM = newcontainer.cloneNode(true)
    newcontainer.remove()
    document.documentElement.appendChild(noAngularDOM.cloneNode(true))
  })
}
