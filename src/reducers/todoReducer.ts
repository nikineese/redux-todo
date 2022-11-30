import {TTodoModel} from "../types/types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: {
    todo: TTodoModel[]
} = {
    todo: []
};

const todoSlice = createSlice( {
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload)
            console.log(state)
            state.todo = [...state.todo, action.payload]
        },
        removeTodo: (state, action) => {
            state.todo = [
                ...state.todo.slice(0, action.payload),
                ...state.todo.slice(action.payload + 1)
            ]
        },
        completeTodo: (state, action) => {
            const targetTodo = state.todo.find(el => el.id === action.payload)
            if (targetTodo){
                targetTodo.completed = !targetTodo.completed
                state.todo = [...state.todo]
            }
        }
    }
})
export const { addTodo, removeTodo, completeTodo } = todoSlice.actions
export default todoSlice.reducer