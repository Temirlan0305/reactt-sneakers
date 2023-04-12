import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import basketSlice from './slices/basketSlice';
import productSlice from './slices/productSlice';
import basketOrderSlice from './slices/basketOrderSlice';
import favouriteSlice from './slices/favouriteSlice';
import {productApi} from '../api/ProductApi'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    basket: basketSlice,
    product: productSlice,
    basketOrder: basketOrderSlice,
    favourite: favouriteSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;