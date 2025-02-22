import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import config from '@/configs/config.json';


interface GlobalState {
  curSection: number;
}

const initialState: GlobalState = {
  curSection: 0,
};


const totalSections = config.Sections.length;

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setCurSection: (state, action: PayloadAction<number>) => {
      const newSection = action.payload;

      if (newSection >= 0 && newSection <= totalSections - 1) {
        state.curSection = newSection;
      }
      console.log('setCurSection', state.curSection);
    },
    increaseSection: (state) => {
      if (state.curSection < totalSections - 1) {
        state.curSection++;
      }
      console.log('increaseSection', state.curSection);
    },
    decreaseSection: (state) => {
      if (state.curSection > 0) {
        state.curSection--;
      }
      console.log('decreaseSection', state.curSection);
    },
  },
});

export const { setCurSection, increaseSection, decreaseSection } = globalSlice.actions;
export default globalSlice.reducer;
