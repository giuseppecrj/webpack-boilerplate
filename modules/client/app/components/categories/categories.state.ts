// --------------------------------
// Constants
// --------------------------------
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY'

// --------------------------------
// Actions
// --------------------------------
const URLS = {
  FETCH: 'http://localhost:3005/api/v1/categories'
}

export class CategoriesActions {
  static $inject = ['$http', '$q']
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q
  }

  listCategories = () => {
    return (dispatch, getState) => {
      const { categories } = getState()
      if (categories.length) {
        return this.$q.when(categories)
          .then(() => dispatch({ type: GET_CATEGORIES, payload: categories }))
      } else {
        return this.$http.get(URLS.FETCH)
          .then(results => results.data)
          .then(data => dispatch({ type: GET_CATEGORIES, payload: data }))
      }
    }
  }

  findCategory = (category) => {
    return { type: GET_CURRENT_CATEGORY, payload: category }
  }
}

// --------------------------------
// Reducers
// --------------------------------
export const categories = (state = [], { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES:
      return payload || state
    default:
      return state
  }
}

export const category = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_CURRENT_CATEGORY:
      return payload || { name: undefined }
    default:
      return state
  }
}
