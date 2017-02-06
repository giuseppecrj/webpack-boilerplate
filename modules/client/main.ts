import './polyfills'
import './main.sass'

import { element, bootstrap } from 'angular'
import { app } from './components/index'

element(document).ready(() => {
  bootstrap(document.body, [app])
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
