import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    todo: {
        id: 1,
        text: ""
    }
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isComplete: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        setTodoText: (state, action) => {
            state.todo = action.payload
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todoItem) => (todoItem.id === action.payload.id ? {...todoItem, text: action.payload.text} : todoItem))
        },
        isTodoComplete: (state, action) => {
            state.todos = state.todos.map((todoItem) => (todoItem.id === action.payload ? {...todoItem, isComplete: !todoItem.isComplete} : todoItem))
        }
    }
})

export const {addTodo, removeTodo, setTodoText, editTodo, isTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;

