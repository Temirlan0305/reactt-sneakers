import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductBasket = createAsyncThunk('basketSlice/fetchProductBasket', async () => {
  const { data } = await axios.get('https://62b1bba0196a9e98703c1172.mockapi.io/card');
  return data;
});

export const addProductBasket = createAsyncThunk('basketSlice/addProductBasket', async (params) => {
  const obj = params;
  await axios.post('https://62b1bba0196a9e98703c1172.mockapi.io/card', obj);
  const { data } = await axios.get('https://62b1bba0196a9e98703c1172.mockapi.io/card');
  return data;
});

export const delProductBasket = createAsyncThunk('basketSlice/delProductBasket', async (params) => {
  const id = params;
  const { data } = await axios.get('https://62b1bba0196a9e98703c1172.mockapi.io/card');
  await axios.delete(`https://62b1bba0196a9e98703c1172.mockapi.io/card/${id}`);
  return data;
});

const initialState = {
  basketItems: [],
  basketStatus: 'loading',
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItems: (state, action) => {
      const obj = action.payload;
      axios.post('https://62b1bba0196a9e98703c1172.mockapi.io/card', obj);
    },
    delItems: (state, action) => {
      const id = action.payload;
      axios.delete(`https://62b1bba0196a9e98703c1172.mockapi.io/card/${id}`);
      state.basketItems = state.basketItems.filter((item) => item.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductBasket.fulfilled, (state, action) => {
      state.basketItems = action.payload;
      state.basketStatus = 'success';
    });
    builder.addCase(fetchProductBasket.pending, (state, action) => {
      state.basketItems = [];
      state.basketStatus = 'loading';
    });
    builder.addCase(fetchProductBasket.rejected, (state, action) => {
      state.basketItems = [];
      state.basketStatus = 'error';
    });
  },
});

export const { setItems, addItems, delItems } = ProductSlice.actions;
export default ProductSlice.reducer;
