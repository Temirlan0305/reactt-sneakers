import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import basketSlice from './slices/basketSlice';
import productSlice from './slices/productSlice'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
    product: productSlice,
  },
});
