import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 123,
    isLoggedIn: false
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, payload) => {
            console.log(payload.payload.data)
        },
        increment2: (state, payload) => {
            state.number = state.number + payload.payload.data
        },
        decrement: (state) => {
            state.isLoggedIn = true
        },
        decrement2: (state) => {
            state.isLoggedIn = false
        }
    }
})

export default counterSlice.reducer
export const counterState = (state) => state.counter
export const { increment, decrement, decrement2, increment2 } = counterSlice.actions