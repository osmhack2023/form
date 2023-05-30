import { configureStore, createSlice } from "@reduxjs/toolkit";

const resetSlice = createSlice({
  name: "reset",
  initialState: { reset: false },
  reducers: {
    resetState(state, action) {
      state.reset = action.payload;
    },
  },
});

export default resetSlice;
export const reserActions = resetSlice.actions;

export const store = configureStore({
  reducer: {
    resetter: resetSlice.reducer,
  },
});
