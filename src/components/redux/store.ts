import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import basketSlice from './slices/basketSlice';
import productSlice from './slices/productSlice';
import basketOrderSlice from './slices/basketOrderSlice';
import favouriteSlice from './slices/favouriteSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
    product: productSlice,
    basketOrder: basketOrderSlice,
    favourite: favouriteSlice
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;