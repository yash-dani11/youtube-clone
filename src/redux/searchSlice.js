import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchString: "",
    searchBarValue: "",
    searchResults: {},
    autoSuggest:{}
  },
  reducers: {
    setQuery: (state, action) => {
      state.searchString = action.payload;
      state.searchBarValue = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchBarValue = action.payload;
    },
    setSearchResults: (state, action) => {
      const { nextPageToken, id, data } = action.payload;
      if (!state.searchResults[id]) {
        state.searchResults[id] = {};
      }
      data.forEach((element) => {
        const videoId = element.id?.videoId;
        if (videoId) {
          state.searchResults[id][videoId] = element;
        }
      });
      state.searchResults[id].token = nextPageToken;
    },
    cacheKeyWords:(state,action) =>{
      const {keyword,results} = action.payload;
      state.autoSuggest[keyword] = results;
    }
  },
});

export const { setQuery, setSearchValue, setSearchResults,cacheKeyWords } = searchSlice.actions;
export default searchSlice.reducer;
