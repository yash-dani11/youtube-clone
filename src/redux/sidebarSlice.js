import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        view:false
    },
    reducers:{
        toggleSideBar:(state)=>{
            state.view = !state.view;
        },
        collapseSideBar:(state)=>{
            state.view = false;
        },
        viewSideBar:(state)=>{
            state.view = true;
        }
    }
});


export const {toggleSideBar,collapseSideBar,viewSideBar} = sidebarSlice.actions;
export default sidebarSlice.reducer;