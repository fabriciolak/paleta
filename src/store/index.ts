import { configureStore } from '@reduxjs/toolkit'
import { color } from './slices/color'
import { useSelector as primitiveUseSelector, useDispatch as primitiveUseDispatch, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer: {
    color
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>
export type PrimitiveDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = primitiveUseSelector
export const useAppDispatch: () => PrimitiveDispatch = primitiveUseDispatch