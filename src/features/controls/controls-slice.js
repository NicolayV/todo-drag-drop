import { createSlice } from "@reduxjs/toolkit";

const controlsSlice = createSlice({
  name: "@@controls",
  initialState: "all",
  reducers: {
    setType: (state, action) => (state = action.payload),
  },
});

const controlsReducer = controlsSlice.reducer;
const { setType } = controlsSlice.actions;

const selectControls = (state) => state.controls;

export { controlsReducer, setType, selectControls };
