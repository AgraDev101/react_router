import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../components/counterSlice";
import tasksSlice from "../pages/Tasks/taskSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        tasks: tasksSlice
        // users: usersSlice
    }
})

export default store