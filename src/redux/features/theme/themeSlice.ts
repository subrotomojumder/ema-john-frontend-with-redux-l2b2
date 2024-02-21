import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  darkMode: boolean;
};
const initialState: initialState = {
  darkMode: false,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
