import { module } from 'angular'
import SaveBookmarksModule from './save-bookmark/save-bookmark'

import { BookmarksActions } from './bookmarks.state'

import * as template from './bookmarks.html'
import './bookmarks.css'

class BookmarksController {
  static $inject = ['$ngRedux', 'BookmarksActions']
  constructor ($ngRedux, BookmarksActions) {
    this.store = $ngRedux
    this.BookmarksActions = BookmarksActions
  }

  $onInit () {
    const actions = Object.assign({}, this.BookmarksActions)
    this.unsubscribe = this.store.connect(this.mapStateToThis, actions)(this)

    this.listBookmarks()
  }

  $onDestroy () {
    this.unsubscribe()
  }

  mapStateToThis (state) {
    return {
      bookmarks: state.bookmarks,
      currentBookmark: state.bookmark,
      currentCategory: state.category
    }
  }

  onSave (bookmark) {
    this.saveBookmark(bookmark)
    this.resetSelectedBookmark()
  }
}

const BookmarksComponent = {
  template,
  controller: BookmarksController
}

const BookmarksModule = module('bookmarks', [
  SaveBookmarksModule.name
])
.service('BookmarksActions', BookmarksActions)
.component('bookmarks', BookmarksComponent)

export default BookmarksModule
