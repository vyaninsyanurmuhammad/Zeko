import { createSlice } from "@reduxjs/toolkit";
import { teamsInitialState } from "./teams-state";
import { getTeamsThunk } from "./teams-thunk";

const teamsSlice = createSlice({
  name: "teams",
  initialState: teamsInitialState,
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

export const {} = teamsSlice.actions;

export default teamsSlice.reducer;
