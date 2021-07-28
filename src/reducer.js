import {v4 as uuid} from "uuid";
import {ADD, COMPLETE, DEL, EDIT, UNCOMPLETED} from "./action"

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
            return {

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