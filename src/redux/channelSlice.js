import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
    name:"channel",
    initialState:{
        channelInfo:{

        }
    },
    reducers:{
        addChannelInfo:(state,action)=>{
            state.channelInfo[action.payload.id] = action.payload.data;
        }
    }
})

export const {addChannelInfo} = channelSlice.actions;
export default channelSlice.reducer;