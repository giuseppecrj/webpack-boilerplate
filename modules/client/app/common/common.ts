import { module } from 'angular'
import BookmarksModel from './models/bookmarks.model'
import CategoriesModel from './models/categories.model'

const CommonModule = module('common', [])
  .service('BookmarksModel', BookmarksModel)
  .service('CategoriesModel', CategoriesModel)

export default CommonModule
