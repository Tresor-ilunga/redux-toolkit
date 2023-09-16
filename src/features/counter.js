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
        }, 
        decrement: (state, action) => {
            state.value--
        },
        multiplay: (state, action) => {
            state.value = state.value * 10
        },
        divide: (state, action) => {
            state.value = state.value / 10
        }
    }
})

export const {increment, decrement, multiplay, divide} = counter.actions
export default counter.reducer 