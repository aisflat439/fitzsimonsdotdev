import { createSlice } from '@reduxjs/toolkit'

export const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState: { lightmode: undefined },
  reducers: {
    toggleThemeMode(state) {
      return {
        lightmode: !state.lightmode
      }
    }
  },
})


export const { increment, decrement, toggleThemeMode } = userPreferencesSlice.actions

export default userPreferencesSlice.reducer