import { createSlice } from "@reduxjs/toolkit";
import { appInitialState } from "./app-state";

const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setIsNavMenuOpen(state, action) {
      state.isNavMenuOpen = action.payload;
    },
  },
});

export const { setIsNavMenuOpen } = appSlice.actions;

export default appSlice.reducer;
