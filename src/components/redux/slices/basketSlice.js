import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  count: 0,
  price: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      console.log(state);
    },
  },
});

export const { setItems } = basketSlice.actions;
export default basketSlice.reducer;
