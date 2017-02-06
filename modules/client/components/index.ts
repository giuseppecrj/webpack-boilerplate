import { module } from 'angular'

export const app = module('app', [])
  .component('app', {
    template: '<h1>hello world!</h1>'
  })
  .name
