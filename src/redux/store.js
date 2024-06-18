import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: { sidebar: sidebarSlice,videos:videoSlice },

});

export default store;
