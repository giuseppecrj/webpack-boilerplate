import './polyfills'
import './main.sass'
import { component } from './components/component'

let demoComponent = component()
document.body.appendChild(demoComponent)

if (module.hot) {
  module.hot.accept('./components/component', () => {
    const nextComponent = require('./components/component').component()
    document.body.replaceChild(nextComponent, demoComponent)
    demoComponent = nextComponent
  })
}
