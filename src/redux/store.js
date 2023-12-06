import { configureStore } from "@reduxjs/toolkit";
import manageViewReducer from "./Sllices/ManageViewSlice";
import ManageInputValueSlice from "./Sllices/ManageInputValueSlice";

export const store = configureStore({
  reducer: {
    manageView: manageViewReducer,
    manageInput: ManageInputValueSlice,
  }
});
