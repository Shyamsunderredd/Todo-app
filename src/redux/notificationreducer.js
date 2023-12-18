import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./reducer";

const initialState={
    message:""
}

 const notificationSlice=createSlice({
    name:"notification",
    initialState:initialState,
    reducers:{
        reset:(state,action)=>{
            state.message="";
        }
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add,(state,action)=>{
    //         state.message="To Do is created";
    //         console.log("okay")
    //     })
    // }
    extraReducers:{
        // map objects: [key]: value
        [actions.add]: (state, action)=>{
        state.message="Todo is created";
        }
        }
        
    
    
 })
 export const notificationReducer=notificationSlice.reducer;
 export const actionns=notificationSlice.actions;
 export const notificationSelector=(state)=>state.notificationReducer.message;