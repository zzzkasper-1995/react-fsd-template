import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { historySlice, transactionsApi } from 'feature/history'

const persistDefaultConfig = (key: string, blacklist?: string[]) => ({
  key,
  storage,
  blacklist,
})

const rootReducer = combineReducers({
  [historySlice.name]: persistReducer(
    persistDefaultConfig(historySlice.name, ['timeFilter']),
    historySlice.reducer,
  ),
  [transactionsApi.reducerPath]: transactionsApi.reducer,
})

const middlewares: Middleware[] = [transactionsApi.middleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares),
})

setupListeners(store.dispatch)
persistStore(store)

declare global {
  type RootState = ReturnType<typeof store.getState>
  type AppDispatch = typeof store.dispatch
}
