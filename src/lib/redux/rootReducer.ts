/* Instruments */
import { combineReducers } from "redux";
import { settingSlice } from "./slices";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // You can use other storage options if needed

const persistConfig = {
  key: "setting",
  storage, // Use the storage engine you imported
  // Other configuration options if needed
};

const persistedReducer = persistReducer(persistConfig, settingSlice.reducer);

export const reducer = combineReducers({
  setting: persistedReducer,
});
