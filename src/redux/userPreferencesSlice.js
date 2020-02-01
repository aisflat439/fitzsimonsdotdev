import { createSlice } from '@reduxjs/toolkit'

export const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState: { count: 40432, lightmode: true },
  reducers: {
    increment(state) {
      return { count: state.count + 1 }
    },
    decrement(state) {
      return { count: state.count - 1 }
    },
    toggleLightMode(state) {
      return { ...initialState, lightmode: !lightmode }
    }
  },
})


export const { increment, decrement } = userPreferencesSlice.actions

export default userPreferencesSlice.reducer