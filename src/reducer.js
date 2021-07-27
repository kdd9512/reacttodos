import {v4 as uuid} from "uuid";

export const initialState = {
    toDos: []
}

export const ADD = "increment";

export const DEL = "del"

const reducer = (state, action) => {
    switch (action.type) {
        case ADD :
            return {
                toDos: [...state.toDos, {text: action.payload, id: uuid()}]
            };
        case DEL :
            return {toDos: state.toDos.filter(toDo => {
                    console.log(toDo.id, action.payload);
                    return toDo.id !== action.payload;
                })
            };
        default:
            return;
    }
}
export default reducer;