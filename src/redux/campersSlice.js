import { createSlice } from "@reduxjs/toolkit";

import { fetchCampers } from "./operations";

import {
  handlePending,
  handleFulfilled,
  handleRejected,
} from "./asyncHandlers";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.campers = payload;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const campersReducer = campersSlice.reducer;
