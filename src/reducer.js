import {v4 as uuid} from "uuid";
import {ADD, COMPLETE, DEL, EDIT, UNCOMPLETED} from "./action";

export const initialState = {
    toDos: [],
    completed: []
}


const reducer = (state, action) => {
    switch (action.type) {
        case ADD :
            return {
                ...state,
                toDos: [...state.toDos, {
                    text: action.payload,
                    id: uuid()
                }]
            };

        case DEL :
            return {
                ...state,
                toDos: state.toDos.filter(toDo => {
                    return toDo.id !== action.payload;
                })
            };

        case EDIT :
            const eTarget = state.toDos.find(toDo => toDo.id === action.payload);
            const edit = state.toDos.filter(toDo => toDo.id !== action.payload);
            return {
                ...state,
                toDos: edit.concat({
                    ...state,
                    text: action.payload
                })
            };

        case COMPLETE :
            const target = state.toDos.find(toDo => toDo.id === action.payload);
            return {
                ...state,
                toDos: state.toDos.filter(toDo => {
                    return toDo.id !== action.payload;
                }),
                completed: [...state.completed, {...target}]
            };

        case UNCOMPLETED :
            const aTarget = state.completed.find(toDo => toDo.id === action.payload);
            return {
                ...state,
                completed: state.toDos.filter(toDo => {
                    return toDo.id !== action.payload;
                }),
                toDos: [...state.toDos, {...aTarget}]
            };

        default:
            return;
    }
}
export default reducer;