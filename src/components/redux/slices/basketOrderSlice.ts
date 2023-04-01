import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  isOpen: false,
  isOrder: false,
};

export const basketOrderSlice = createSlice({
  name: 'basketOrder',
  initialState: initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setIsOrder: (state, action) => {
      state.isOrder = action.payload;
    },
  },
});

export const { setIsOpen, setIsOrder } = basketOrderSlice.actions;
export const selectBasketOrder = (state: RootState) => state.basketOrder;
export default basketOrderSlice.reducer;
