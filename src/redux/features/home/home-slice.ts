import { createSlice } from "@reduxjs/toolkit";
import { homeInitialState } from "./home-state";
import { getTestimoniesThunk } from "./home-thunk";

const homeSlice = createSlice({
  name: "home",
  initialState: homeInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTestimoniesThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTestimoniesThunk.fulfilled, (state, action) => {
      state.testimonies = [...action.payload];
      state.isLoading = false;
    });
  },
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
