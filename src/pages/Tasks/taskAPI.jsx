import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk(
    "tasks/getTasks",
    async () => {
        try {
            let request = await fetch("http://localhost:5000/tasks", {
                method: "GET"
            })
            return await request.json()
        } catch (error) {
            console.error(error)
        }
    }
)

export const addTask1 = createAsyncThunk(
    "tasks/addTask1",
    async (data) => {
        try {
            let request = await fetch("http://127.0.0.1:5000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            return await request.json()
        } catch (error) {
            console.error(error.message)
        }
    }
)

export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (data) => {
        try {
            let request = await fetch("http://127.0.0.1:5000/tasks", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            window.location.reload()
            return await request.json()
        } catch (error) {
            console.error(error.message)
        }
    }
)

export const updateTask = createAsyncThunk(
    "tasks/updateTask",
    async (data) => {
        try {
            let request = await fetch("http://127.0.0.1:5000/tasks", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            window.location.reload()
            return await request.json()
        } catch (error) {
            console.error(error.message)
        }
    }
)