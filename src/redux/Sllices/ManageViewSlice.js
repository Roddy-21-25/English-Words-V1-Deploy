import { createSlice } from "@reduxjs/toolkit";

let initialManageViewState = false;

export const ManageViewSlice = createSlice({
  name: "ManageView",
  initialState: initialManageViewState,
  reducers: {
    changeView: (state, action) => {
      return initialManageViewState = action.payload;
    }
  },
});

export const { changeView } = ManageViewSlice.actions;

export default ManageViewSlice.reducer;
