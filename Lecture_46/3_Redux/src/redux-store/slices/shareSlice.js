import { createSlice } from "@reduxjs/toolkit"

const shareSlice = createSlice({
    name: "share",
    initialState: {
        shareCount: 0
    },
    reducers:{
        incrementShare: function(state){
            state.shareCount += 1
        }
    }
})

export const { incrementShare } = shareSlice.actions
export default shareSlice.reducer

