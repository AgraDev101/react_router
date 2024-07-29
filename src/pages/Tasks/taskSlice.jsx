import { createSlice } from "@reduxjs/toolkit";
import { getTasks, addTask1, deleteTask, updateTask } from "./taskAPI";

const initialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.fulfilled, (state, actions) => {
            // console.log(actions.payload.data)
            state.tasks = actions.payload.data
        })
        builder.addCase(addTask1.fulfilled, (state, actions) => {
            state.tasks.push(actions.payload)
            // console.log(state, actions)
        })
        builder.addCase(deleteTask.fulfilled, (state, actions) => {
            // state.tasks.push(actions.payload.data)
            // console.log(state, actions)
        })
        builder.addCase(updateTask.fulfilled, (state, actions) => {
            // state.tasks.push(actions.payload)
            // console.log(state, actions)
        })
    }
})

export default tasksSlice.reducer
export const tasksState = (state) => state.tasks
export const { addTask } = tasksSlice.actions


