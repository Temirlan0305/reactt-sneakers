import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Status } from './basketSlice';

export const fetchProduct = createAsyncThunk('productSlice/fetchProduct', async () => {
  const { data } = await axios.get('https://62b1bba0196a9e98703c1172.mockapi.io/itemsSneakers');
  return data;
});

type itemsType ={
  id: string;
  title: string;
  price: number;
  imageURL: string;
}

interface productState {
  items: itemsType[];
  status: Status.FULFILLED | Status.LOADING | Status.REJECTED;
}

const initialState: productState = {
  items: [],
  status: Status.LOADING,
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.items = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.items = [];
      state.status = Status.REJECTED;
    });
  },
});

export const { setItems } = ProductSlice.actions;
export const selectProduct = (state: RootState) => state.product
export default ProductSlice.reducer;
