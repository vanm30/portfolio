import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';
import scrollMiddleware from './scrollMiddleware';

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(scrollMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
