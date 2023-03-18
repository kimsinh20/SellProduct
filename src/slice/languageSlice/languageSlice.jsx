import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language ",
  initialState: {
    language: "en" ,
  },

  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
const { actions, reducer } = languageSlice;
export const {setLanguage} = actions;
export default reducer;
