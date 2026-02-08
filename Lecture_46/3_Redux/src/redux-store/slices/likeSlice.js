import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name: "like",
    initialState: {
        likeCount: 0
    },
    reducers: {
        incrementLike: function(state){
            state.likeCount += 1
        },
        decrementLike: function(state){
           state.likeCount -= 1
        },
        incrementLikeByInput: function(state, action){
            state.likeCount += action.payload
        },
    }
})

// When you define reducers inside createSlice, Redux Toolkit automatically creates functions for you. Those 
// functions are called action creators, and they live inside: likeSlice.actions
export const { incrementLike, decrementLike, incrementLikeByInput } = likeSlice.actions

// In createSlice, we define multiple reducers, and Redux Toolkit automatically combines them into a 
// single reducer function that we export to the store
export default likeSlice.reducer