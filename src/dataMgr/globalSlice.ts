import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import config from '@/configs/config.json';


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
      const totalSections = config.Sections.length;

      let newSection = action.payload;

      if (newSection < 0) {
        newSection = 0;
      } else if (newSection >= totalSections) {
        newSection = totalSections - 1;
      }

      state.curSection = newSection;
      console.log('curSection:', state.curSection);
    },
  },
});

export const { setCurSection } = globalSlice.actions;
export default globalSlice.reducer;
