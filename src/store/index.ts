import { configureStore } from '@reduxjs/toolkit'
import { color } from './slices/color'
import { useSelector as primitiveUseSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer: {
    'color': color
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = primitiveUseSelector