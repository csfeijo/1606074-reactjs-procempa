import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    decrementCounter(state) {
      return { ...state, value: state.value - 1 }
    },
    incrementCounter(state) {
      return { ...state, value: state.value + 1 }
    },
    updateCounter(state, { payload }) {
      return { ...state, value: payload }
    }
  }
})

export const { decrementCounter, incrementCounter, updateCounter } = slice.actions
export const selectCounter = state => state.counter.value
export default slice.reducer

