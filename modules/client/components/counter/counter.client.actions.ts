export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

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
}
