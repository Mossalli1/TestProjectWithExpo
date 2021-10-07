import { createSlice } from "@reduxjs/toolkit";

// Slice
const datePicker = createSlice({
  name: "datePick",
  initialState: {
    initialDate: null,
    lastDate: null,
  },
  reducers: {
    selectInitialDateSuccess: (state, action) => {
      state.initialDate = action.payload;
    },
    selectLastDateSuccess: (state, action) => {
      state.lastDate = action.payload;
    },
  },
});
export default datePicker.reducer;

// Action
const { selectInitialDateSuccess } = datePicker.actions;
const { selectLastDateSuccess } = datePicker.actions;
export const selectInitialDate = (pickInitialDate) => async (dispatch) => {
  try {
    dispatch(selectInitialDateSuccess(pickInitialDate));
  } catch (e) {
    return console.error(e.message);
  }
};
export const selectLastDate = (pickLastDate) => async (dispatch) => {
  try {
    dispatch(selectLastDateSuccess(pickLastDate));
  } catch (e) {
    return console.error(e.message);
  }
};
