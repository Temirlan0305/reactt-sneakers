import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import basketSlice from './slices/basketSlice';
import productSlice from './slices/productSlice';
import basketOrderSlice from './slices/basketOrderSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
    product: productSlice,
    basketOrder: basketOrderSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;