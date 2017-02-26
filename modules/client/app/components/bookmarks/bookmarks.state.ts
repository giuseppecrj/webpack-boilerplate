import { uniqueId } from 'lodash'

// --------------------------------
// Constants
// --------------------------------
export const GET_BOOKMARKS = 'GET_BOOKMARKS'
export const GET_SELECTED_BOOKMARK = 'GET_SELECTED_BOOKMARK'
export const RESET_SELECTED_BOOKMARK = 'RESET_SELECTED_BOOKMARK'
export const CREATE_BOOKMARK = 'CREATE_BOOKMARK'
export const UPDATE_BOOKMARK = 'UPDATE_BOOKMARK'
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK'

// --------------------------------
// Actions
// --------------------------------
const URLS = {
  FETCH: 'http://localhost:3005/api/v1/bookmarks'
}

export class BookmarksActions {
  static $inject = ['$ngRedux', '$http', '$q']

  constructor ($ngRedux, $http, $q) {
    this.$ngRedux = $ngRedux
    this.$http = $http
    this.$q = $q
  }

  listBookmarks = (bookmarks) => {
    return (dispatch, getState) => {
      const { bookmarks } = getState()
      if (bookmarks.length) {
        return this.$q.when(bookmarks)
          .then(() => dispatch({ type: GET_BOOKMARKS, payload: bookmarks }))
      } else {
        return this.$http.get(URLS.FETCH)
          .then((results) => results.data)
          .then((data) => dispatch({ type: GET_BOOKMARKS, payload: data }))
      }
    }
  }

  resetBookmark = () => {
    return { type: RESET_SELECTED_BOOKMARK }
  }

  findBookmark = (bookmark = initialBookmark) => {
    const { category } = this.$ngRedux.getState()
    const payload = bookmark.id ? bookmark : Object.assign({}, bookmark, { category: category.name })
    return { type: GET_SELECTED_BOOKMARK, payload }
  }

  deleteBookmark = (bookmark) => {
    return { type: DELETE_BOOKMARK, payload: bookmark }
  }

  saveBookmark = (bookmark) => {
    const hasId = !!bookmark.id
    const type = hasId ? UPDATE_BOOKMARK : CREATE_BOOKMARK
    if (!hasId) bookmark.id = uniqueId(100)
    return { type, payload: bookmark }
  }
}

// --------------------------------
// Reducers
// --------------------------------
export const bookmarks = (state = [], { type, payload }) => {
  switch (type) {
    case GET_BOOKMARKS:
      return payload || state
    case CREATE_BOOKMARK:
      Object.freeze(state)
      return [...state, payload]
    case UPDATE_BOOKMARK:
      Object.freeze(state)
      return state.map(bookmark => bookmark.id === payload.id ? payload : bookmark)
    case DELETE_BOOKMARK:
      Object.freeze(state)
      return state.filter(bookmark => bookmark.id !== payload.id)
    default:
      return state
  }
}

const initialBookmark = {
  id: null,
  name: '',
  url: '',
  category: null
}

export const bookmark = (state = initialBookmark, { type, payload }) => {
  switch (type) {
    case GET_SELECTED_BOOKMARK:
      return payload || state
    case RESET_SELECTED_BOOKMARK:
      return initialBookmark
    default:
      return state
  }
}
