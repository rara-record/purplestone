import { configureStore } from '@reduxjs/toolkit';
import { creatorsApi } from './api/creators';
import { contactsApi } from './api/exampleApi';
import { myCardApi } from './api/myCard';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [creatorsApi.reducerPath]: creatorsApi.reducer,
    [myCardApi.reducerPath]: myCardApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
