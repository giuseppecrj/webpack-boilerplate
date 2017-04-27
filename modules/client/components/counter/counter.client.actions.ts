export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SHOW_API = 'SHOW_API'

export class CounterActions {
  static increment (payload) {
    return {
      type: INCREMENT,
      payload
    }
  }

  static decrement () {
    return { type: DECREMENT }
  }

  static show (payload) {
    return { type: SHOW_API, payload }
  }
}
