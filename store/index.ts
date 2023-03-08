import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import counterSlice from './slices/counterSlice';
import authSlice from './slices/authSlice';
import { createWrapper } from 'next-redux-wrapper';

const env = process.env.NODE_ENV || 'development';
const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger).concat(reduxThunk),
  devTools: env !== 'production',
});
export const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
