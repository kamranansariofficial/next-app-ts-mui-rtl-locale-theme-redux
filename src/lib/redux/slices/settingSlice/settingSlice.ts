/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: SettingSliceState = {
  darkMode: false,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeMode: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.darkMode = !state.darkMode;
    },
  },
});

/* Types */
export interface SettingSliceState {
  darkMode: boolean;
}
