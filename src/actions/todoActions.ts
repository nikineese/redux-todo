import {EActionTypes} from "../actionTypes/actionTypes";
import {TTodoModel} from "../types/types";

const addTodo = (newTodo: TTodoModel) => {
    return {
        type: EActionTypes.ADD_TODO,
        payload: newTodo
    }
}
const removeTodo = (newTodo: TTodoModel) => {
    return {
        type: EActionTypes.REMOVE_TODO,
        payload: newTodo
    }
}
const completeTodo = (id: string) => {
    return {
        type: EActionTypes.COMPLETE_TODO,
        payload: id
    }
}
export { addTodo, removeTodo, completeTodo }