import {Action} from "redux";
import {EActionTypes, TActionModel} from "../actionTypes/actionTypes";
import {TTodoModel} from "../types/types";

const initialState: TTodoModel[] = [];

const todoReducer = (state = initialState, action: Action) => {
    const todoAction = action as TActionModel
    const todos = state
    switch (todoAction.type) {
        case EActionTypes.ADD_TODO:
            todos.push(todoAction.payload)
            return todos
        case EActionTypes.REMOVE_TODO:
            todos.splice(todos.indexOf(todoAction.payload), 1)
            return todos
        case EActionTypes.COMPLETE_TODO:
            const targetTodo = todos.find(el => el.id === todoAction.payload)
            if (targetTodo){
                targetTodo.completed = true
            }
            return todos
        default:
            return state;
    }
};
export default todoReducer
