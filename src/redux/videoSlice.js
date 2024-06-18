import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice(
    {name:"videos",
    initialState:{
        popular:[],
    },
    reducers:{
        addPopularVideos:(state,action)=>{
            state.popular = action.payload;
        }
    }
}
)

export const {addPopularVideos} = videoSlice.actions;
export default videoSlice.reducer;