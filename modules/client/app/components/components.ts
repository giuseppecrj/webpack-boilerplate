import { module } from 'angular'
import BookmarksModule from './bookmarks/bookmarks'
import { CategoriesModule } from './categories/categories'

const ComponentsModule = module('app.components', [
  BookmarksModule.name,
  CategoriesModule.name
])

export default ComponentsModule
