/**
 * Create the store with dynamic reducers
 */

import { configureStore } from '@reduxjs/toolkit'

import { createReducer } from 'store/reducers'

export const store = configureStore({
  reducer: createReducer(),
  devTools: process.env.NODE_ENV !== 'production',
})
