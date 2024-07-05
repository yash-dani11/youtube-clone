import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice(
    {name:"videos",
    initialState:{
        videos:{},
    },
    reducers:{
        addPopularVideos:(state,action)=>{
            let videos = {};
            action.payload.forEach(element => {
                videos[element.id] = element;
            });
            state.videos = videos;
        },
        addVideo:(state,action)=>{
            state.videos[action.payload.id] = action.payload.data;
        }
    }
}
)

export const {addPopularVideos,addVideo} = videoSlice.actions;
export default videoSlice.reducer;