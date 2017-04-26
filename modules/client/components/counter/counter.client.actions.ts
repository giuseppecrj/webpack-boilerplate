export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export class CounterActions {
  static increment () {
    return {
      type: INCREMENT
    }
  }

  static decrement () {
    return { type: DECREMENT }
  }
}
