import { module } from 'angular'
import CategoryItemModule from './category-item/category-item'

import { CategoriesActions } from './categories.state'

import * as template from './categories.html'
import './categories.css'

class CategoriesController {
  static $inject = ['$ngRedux', 'CategoriesActions', 'BookmarksActions']

  constructor ($ngRedux, CategoriesActions, BookmarksActions) {
    this.store = $ngRedux
    this.CategoriesActions = CategoriesActions
    this.BookmarksActions = BookmarksActions
  }

  $onInit () {
    const actions = Object.assign({}, this.CategoriesActions, this.BookmarksActions)
    this.unsubscribe = this.store.connect(this.mapStateToThis, actions)(this)
    this.listCategories()
  }

  $onDestroy () {
    this.unsubscribe()
  }

  mapStateToThis (state) {
    return {
      categories: state.categories,
      currentCategory: state.category
    }
  }

  onCategorySelected (category) {
    this.findCategory(category)
    this.resetBookmark()
  }

  isCurrentCategory (category) {
    return this.currentCategory &&
      this.currentCategory.id === category.id
  }
}

const CategoriesComponent = {
  template,
  controller: CategoriesController
}

const CategoriesModule = module('categories', [
  CategoryItemModule.name
])
.service('CategoriesActions', CategoriesActions)
.component('categories', CategoriesComponent)

export { CategoriesModule, CategoriesComponent, CategoriesController }
