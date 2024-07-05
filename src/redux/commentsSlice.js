import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name:"comments",
    initialState:{
        videoComments:{}
    },
    reducers:{
        addComments:(state,action)=>{
            state.videoComments[action.payload.id] = action.payload.data.map(comment=>{
                const data = comment?.snippet?.topLevelComment?.snippet;
                return {...data,id:comment.etag}
            });
        }
    }
})


export const {addComments} = commentsSlice.actions;
export default commentsSlice.reducer;