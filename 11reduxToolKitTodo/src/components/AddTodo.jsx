import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo } from '../features/todo/todoSlice'


function AddTodo() {

    const [input, setInput] = useState("")
    const [isTodoForUpdate, setIsTodoForUpdate] = useState(false)

    const dispath = useDispatch()
    const todoText = useSelector((state) => state.todo);

    useEffect(() => {
        setInput(todoText.text);
        setIsTodoForUpdate(true)
    }, [todoText]);

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispath(addTodo(input))
        setInput("")
        setIsTodoForUpdate(false)
    }

    const editTodoHandler = (e) => {
        e.preventDefault()
        dispath(editTodo({...todoText, text:input}))
        setInput("")
        setIsTodoForUpdate(false)
    }

    const handleInputOnchange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        if (e.target.value === "") {
            setIsTodoForUpdate(false)
        }
    }

    return (
        <form onSubmit={todoText.text !== "" && isTodoForUpdate ? editTodoHandler : addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={handleInputOnchange}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {
                    todoText.text !== "" && isTodoForUpdate ? "Update Todo" : "Add Todo"
                }
            </button>

        </form>
    )
}

export default AddTodo