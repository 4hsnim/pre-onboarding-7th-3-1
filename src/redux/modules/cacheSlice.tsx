import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CacheState {
  value: string[];
}

const initialState: CacheState = {
  value: [],
};

export const cahceSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      return { value: state.value.concat(action.payload) };
    },
  },
});

export const { add } = cahceSlice.actions;

export const selectCache = (state: RootState) => state.Cache.value;

export default cahceSlice.reducer;
