import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('productSlice/fetchProduct', async () => {
  const { data } = await axios.get('https://62b1bba0196a9e98703c1172.mockapi.io/itemsSneakers');
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
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
      state.status = 'success';
    });
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.items = [];
      state.status = 'error';
    });
  },
});

export const { setItems } = ProductSlice.actions;
export default ProductSlice.reducer;
