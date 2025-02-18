import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  curSection: number;
}

const initialState: GlobalState = {
  curSection: 0,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setCurSection: (state, action: PayloadAction<number>) => {
      state.curSection = action.payload;
    },
  },
});

export const { setCurSection } = globalSlice.actions;
export default globalSlice.reducer;
