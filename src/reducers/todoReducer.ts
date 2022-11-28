import {Action} from "redux";
import {EActionTypes, TActionModel} from "../actionTypes/actionTypes";
import {TTodoModel} from "../types/types";

const initialState: TTodoModel[] = [];

const todoReducer = (state = initialState, action: Action) => {
    const todoAction = action as TActionModel
    let todos = state
    switch (todoAction.type) {
        case EActionTypes.ADD_TODO:
            todos = [...todos, todoAction.payload]
            break
        case EActionTypes.REMOVE_TODO:
            const deleteTargetIdx = todos.indexOf(todoAction.payload)
            todos = todos.slice(0,deleteTargetIdx).concat(todos.slice(deleteTargetIdx + 1))
            break
        case EActionTypes.COMPLETE_TODO:
            const targetTodo = todos.find(el => el.id === todoAction.payload)
            if (targetTodo){
                targetTodo.completed = !targetTodo.completed
                todos = [...todos]
            }
            break
        default:
            return state;
    }
    return todos
};
export default todoReducer
