import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { CacheData } from "../../types/cache";

const initialState: CacheData = {
  data: [],
};

export const cahceSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      return { data: [...state.data, action.payload] };
    },
  },
});

export const { add } = cahceSlice.actions;

export const selectCache = (state: RootState) => state.Cache.value;

export default cahceSlice.reducer;
