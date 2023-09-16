import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value++
        }
    }
})

export const {increment} = counter.actions
export default counter.reducer 