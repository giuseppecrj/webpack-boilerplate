import { module } from 'angular'
import * as template from './category-item.html'
import './category-item.css'

const CategoryItemComponent = {
  bindings: {
    category: '<',
    selected: '&'
  },
  template,
  controllerAs: 'categoryItemCtrl'
}

const CategoryItemModule = module('categoryItem', [])
  .component('categoryItem', CategoryItemComponent)

export default CategoryItemModule
