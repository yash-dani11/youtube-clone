import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice(
    {name:"videos",
    initialState:{
        videos:{
            all:{}
        },
        related:{
            videos:{}
        },
        search:{
            videos:{}
        }
    },
    reducers:{
        addPopularVideos:(state,action)=>{
            const {data,nextPageToken} = action.payload;
            data.forEach(element => {
                state.videos.all[element.id] = element;
            });
            state.videos.token = nextPageToken;
        },
        addVideo:(state,action)=>{
            const {data,id} = action.payload;
            if(!state.videos.all){
                state.videos.all = {};
            }
            state.videos.all[id] = data;
        },
        addRelatedVideos:(state,action)=>{
            const {nextPageToken,id,data} = action.payload;
            if(!state.related.videos[id]){
                state.related.videos[id] = {};
            }
            data.forEach(element => {
                const relatedVideoId = element.id?.videoId;
                if(relatedVideoId){
                    state.related.videos[id][relatedVideoId] = element;
                }
                
            });
            state.related.token = nextPageToken;
        },
        addSearchedVideos:(state,action)=>{
            const {nextPageToken,id,data} = action.payload;
            if(!state.search.videos[id]){
                state.search.videos[id] = {};
            }
            data.forEach(element => {
                const searchId = element.id?.videoId;
                if(searchId){
                    state.search.videos[id][searchId] = element;
                }
                
            });
            state.related.token = nextPageToken;
        }
    }
}
)

export const {addPopularVideos,addVideo,addRelatedVideos,addSearchedVideos} = videoSlice.actions;
export default videoSlice.reducer;