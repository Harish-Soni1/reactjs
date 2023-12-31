import {useContext, createContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Tofo msg",
            isComplete: false
        }
    ],
    addTodo: (todo) => {},
    editTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    isTodoComplete: (id) => {},
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}