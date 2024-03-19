import { createSlice } from "@reduxjs/toolkit";
import { aboutInitialState } from "./about-state";
import { getTeamsThunk } from "./about-thunk";

const aboutSlice = createSlice({
  name: "about",
  initialState: aboutInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTeamsThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTeamsThunk.fulfilled, (state, action) => {
      state.teams = [...action.payload];
      state.isLoading = false;
    });
  },
});

export const {} = aboutSlice.actions;

export default aboutSlice.reducer;
