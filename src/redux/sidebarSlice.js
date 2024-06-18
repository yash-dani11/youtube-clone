import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        view:true
    },
    reducers:{
        toggleSideBar:(state)=>{
            state.view = !state.view;
        }
    }
});


export const {toggleSideBar} = sidebarSlice.actions;
export default sidebarSlice.reducer;