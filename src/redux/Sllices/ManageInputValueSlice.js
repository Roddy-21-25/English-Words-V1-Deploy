import { createSlice } from "@reduxjs/toolkit";

let initialManageInputValueState = "";

export const ManageInputValueSlice = createSlice({
  name: "ManageInputValue",
  initialState: initialManageInputValueState,
  reducers: {
    changeInputValue: (state, action) => {
      return initialManageInputValueState = action.payload;
    }
  },
});

export const { changeInputValue } = ManageInputValueSlice.actions;

export default ManageInputValueSlice.reducer;