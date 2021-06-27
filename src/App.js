import React, {useReducer, useState} from 'react';


const initialState = {
    toDos: []
}

const ADD = "increment";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD :
            return {
                toDos: [{...state.toDos}, {text: action.payload}]
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
                    <li key={index}>{toDo.text}</li>
                )}
            </ul>
        </>
    );
}

export default App;
