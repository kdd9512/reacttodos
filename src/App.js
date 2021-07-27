import React, {useReducer, useState} from 'react';
import {v4 as uuid} from "uuid";
import reducer, {ADD, DEL, initialState} from "reducer";


function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewToDo] = useState("");
    const onSubmit = e => {
        e.preventDefault();
        dispatch({type: ADD, payload: newTodo});
        setNewToDo("");
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
