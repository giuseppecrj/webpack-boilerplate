export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SHOW_API = 'SHOW_API'

export class CounterActions {
  static increment () {
    return {
      type: INCREMENT
    }
  }

  static decrement () {
    return { type: DECREMENT }
  }

  static show (payload) {
    return { type: SHOW_API, payload }
  }
}
