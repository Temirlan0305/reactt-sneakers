import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';



export type productType = {
  id: string;
  productId: number;
  title: string;
  imageURL: string;
  text: string;
  price: number
}

export enum Status {
  LOADING = 'loading',
  FULFILLED = 'success',
  REJECTED = 'error',
}

interface ProductState {
  basketItems: productType[];
  basketStatus: Status.LOADING | Status.FULFILLED | Status.REJECTED;
  totalPrice: number;  
}
export const fetchProductBasket = createAsyncThunk<productType[]>('basketSlice/fetchProductBasket', async () => {
  const { data } = await axios.get<productType[]>('https://62b1bba0196a9e98703c1172.mockapi.io/card');
  return data;
});

const initialState: ProductState = {
  basketItems: [],
  basketStatus: Status.LOADING,
  totalPrice: 0,
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      state.basketItems = action.payload;
    },
    addItems: (state, action) => {
      const obj = action.payload;
      axios.post('https://62b1bba0196a9e98703c1172.mockapi.io/card', obj);
      state.basketItems.push(obj)
    },
    delItems: (state, action) => {
      const id = action.payload;
      axios.delete(`https://62b1bba0196a9e98703c1172.mockapi.io/card/${id}`);
      state.basketItems = state.basketItems.filter((item) => item.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductBasket.fulfilled, (state, action: PayloadAction<productType[]>) => {
      state.basketItems = action.payload;
      state.totalPrice = state.basketItems.reduce((sum, obj) => {return sum + obj.price}, 0);
      state.basketStatus = Status.FULFILLED;
    });
    builder.addCase(fetchProductBasket.pending, (state, action) => {
      state.basketItems = [];
      state.basketStatus = Status.LOADING;
    });
    builder.addCase(fetchProductBasket.rejected, (state, action) => {
      state.basketItems = [];
      state.basketStatus = Status.REJECTED;
    });
  }
});

export const { setItems, addItems, delItems } = ProductSlice.actions;
export const selectBasket = (state: RootState) => state.basket;
export default ProductSlice.reducer;
