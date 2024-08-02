import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    selectedTheme: "light",
  },
  reducers: {
    changeTheme: (state) => {
      state.selectedTheme = state.selectedTheme === "light" ? "dark" : "light";
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
