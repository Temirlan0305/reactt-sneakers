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
  favouriteItems: productType[];
  favouriteStatus: Status.LOADING | Status.FULFILLED | Status.REJECTED;
}
export const fetchProductFavourite = createAsyncThunk < productType[] > ('favouriteSlice/fetchProductFavourite', async () => {
  const { data } = await axios.get < productType[] > ('https://62b1bba0196a9e98703c1172.mockapi.io/favorite');
  return data;
});

const initialState: ProductState = {
  favouriteItems: [],
  favouriteStatus: Status.LOADING,
};

export const FavouriteSlice = createSlice({
  name: 'favourite',
  initialState: initialState,
  reducers: {
    setItemsFavourite: (state, action) => {
      state.favouriteItems = action.payload;
    },
    addItemsFavourite: (state, action) => {
      const obj = action.payload;
      async function fetchAdd() {
        state.favouriteItems.push(obj)
        await axios.post('https://62b1bba0196a9e98703c1172.mockapi.io/favorite', obj);
      }
      fetchAdd()
    },
    delItemsFavourite: (state, action) => {
      const id = action.payload;
      state.favouriteItems = state.favouriteItems.filter((item) => item.id !== id);
      axios.delete(`https://62b1bba0196a9e98703c1172.mockapi.io/favorite/${id}`);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductFavourite.fulfilled, (state, action: PayloadAction<productType[]>) => {
      state.favouriteItems = action.payload;
      state.favouriteStatus = Status.FULFILLED;
    });
    builder.addCase(fetchProductFavourite.pending, (state, action) => {
      state.favouriteItems = [];
      state.favouriteStatus = Status.LOADING;
    });
    builder.addCase(fetchProductFavourite.rejected, (state, action) => {
      state.favouriteItems = [];
      state.favouriteStatus = Status.REJECTED;
    });
  }
});

export const { setItemsFavourite, addItemsFavourite, delItemsFavourite } = FavouriteSlice.actions;
export const selectFavourite = (state: RootState) => state.favourite;
export default FavouriteSlice.reducer;
