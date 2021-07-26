import React, {useReducer, useState} from 'react';
import {v4 as uuid} from "uuid";

const initialState = {
    toDos: []
}

const ADD = "increment";

const DEL = "del"

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


function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewToDo] = useState("");
    const onSubmit = e => {
        e.preventDefault();
        dispatch({type: ADD, payload: newTodo})
    };
    const onChange = e => {
        const {
            target: {value}
        } = e;
        setNewToDo(value);
    };

    return (
        <>
            <h1>ADD TO DO</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={newTodo}
                    type="text"
                    placeholder="Write TO DO"
                    onChange={onChange}
                />
            </form>

            <ul>
                <h3>TODOS</h3>
                {state.toDos.map((toDo, index) =>
                    <li key={toDo.id}>
                        <span>{toDo.text}</span>
                        <button onClick={() => dispatch({type: DEL, payload:toDo.id})}>DELETE</button>
                    </li>
                )}
            </ul>
        </>
    );
}

export default App;
