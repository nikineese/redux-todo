import React, {useEffect, useState} from "react"
import {TTodoModel} from "../types/types";
import {CreateGUID} from "../utils/generateGuid";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, completeTodo, removeTodo} from "../actions/todoActions";

export const Todos = () => {
    const todosState = useSelector((state: { todo: TTodoModel[] }) => state.todo)
    const [todos, setTodos] = useState<TTodoModel[]>([])
    const [newTodo, setNewTodo] = useState<TTodoModel>({
        id: '',
        title: '',
        completed: false
    })
    const dispatch = useDispatch()
    useEffect(() => {
        setTodos(todosState)
    }, todosState)
    return (
        <div>
            <input type='text' onChange={(e) => {
                setNewTodo(prevState => ({
                    ...prevState,
                    title: e.target.value
                }))
            }} />
            <button onClick={() => {
                dispatch(addTodo({...newTodo, id: CreateGUID()}))
            }}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li style={{ textDecoration: todo.completed ? 'line-through' : '' }} key={todo.id}><span onClick={() => {
                        dispatch(completeTodo(todo.id))
                    }}>V</span>{todo.title} <span onClick={() => {
                        dispatch(removeTodo(todo))
                    }}>X</span></li>
                ))}
            </ul>
        </div>
    )
}