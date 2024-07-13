import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import videoSlice from "./videoSlice";
import channelSlice from "./channelSlice";
import commentsSlice from "./commentsSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    videos: videoSlice,
    channel: channelSlice,
    comments: commentsSlice,
    search: searchSlice,
  },
});

export default store;
