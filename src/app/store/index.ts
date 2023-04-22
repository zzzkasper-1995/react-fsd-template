import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
  },
})

setupListeners(store.dispatch)

declare global {
  type RootState = ReturnType<typeof store.getState>
  type AppDispatch = typeof store.dispatch
}


