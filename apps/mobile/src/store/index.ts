import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { type CombinedState, combineReducers, configureStore } from '@reduxjs/toolkit'
// import { api } from './api'
// import logger from 'redux-logger'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  type PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'

import authReducer, { type AuthState } from './slices/auth'

const rootReducer = combineReducers({
  auth: authReducer
})

type StoreType = CombinedState<{
  auth: AuthState
}>

const persistConfig: PersistConfig<StoreType> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }) // .concat(logger)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
