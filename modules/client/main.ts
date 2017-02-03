import './polyfills'
import './main.sass'
import { component } from './component'

let demoComponent = component()
document.body.appendChild(demoComponent)

if (module.hot) {
  module.hot.accept('./component', () => {
    const nextComponent = require('./component').component()
    document.body.replaceChild(nextComponent, demoComponent)
    demoComponent = nextComponent
  })
}
