import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './Slices/ThemeSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch