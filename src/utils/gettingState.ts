import {useSelector} from "react-redux";
import {TTodoModel} from "../types/types";

export const useTodosState = () => useSelector((state: { todo: TTodoModel[] }) => state.todo)