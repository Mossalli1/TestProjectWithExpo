import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import datePick from "../reducers/datePick";

const reducer = combineReducers({
  datePick,
});

const store = configureStore({
  reducer,
});

export default store;
