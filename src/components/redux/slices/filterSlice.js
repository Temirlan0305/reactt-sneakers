import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
