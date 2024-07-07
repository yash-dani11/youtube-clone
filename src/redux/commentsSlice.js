import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name:"comments",
    initialState:{
        videoComments:{
        }
    },
    reducers:{
        addComments:(state,action)=>{
             const commentList = action.payload.data.map(comment=>{
                const data = comment?.snippet?.topLevelComment?.snippet; 
                return {...data,id:comment.etag}
            });
            if(!state.videoComments[action.payload.id]){
                state.videoComments[action.payload.id] = {};
            }
            if(!state.videoComments[action.payload.id].comments){
                state.videoComments[action.payload.id].comments = [];    
            }
            state.videoComments[action.payload.id].comments.push(...commentList);
            state.videoComments[action.payload.id].token = action.payload.nextPageToken;
        }
    }
})


export const {addComments} = commentsSlice.actions;
export default commentsSlice.reducer;