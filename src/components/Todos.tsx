import React, {useState} from "react"
import {TTodoModel} from "../types/types";
import {CreateGUID} from "../utils/generateGuid";
import { useDispatch } from "react-redux";
import {addTodo, completeTodo, removeTodo} from "../actions/todoActions";
import {useTodosState} from "../utils/gettingState";

export const Todos = () => {
    const todos = useTodosState()
    const [newTodo, setNewTodo] = useState<TTodoModel>({
        id: '',
        title: '',
        completed: false
    })
    const dispatch = useDispatch()
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
                    <li style={{ textDecoration: todo.completed ? 'line-through' : '' }} key={todo.id}><span className='clickable' onClick={() => {
                        dispatch(completeTodo(todo.id))
                    }}>V</span> {todo.title} <span className='clickable' onClick={() => {
                        dispatch(removeTodo(todo))
                    }}>X</span></li>
                ))}
            </ul>
        </div>
    )
}
