import React, {useState} from 'react';
import reducer, {ADD, COMPLETE, DEL, UNCOMPLETED} from "./reducer";
import Add from "./Add";


function App() {
    return (
        <>
            <h1>ADD TO DO</h1>
            <Add/>
            <ul>
                <h3>DO IT</h3>
                {state.toDos.map((toDo, index) =>
                    <li key={toDo.id}>
                        <span>{toDo.text}</span>
                        <button onClick={() => dispatch({type: DEL, payload: toDo.id})}>DELETE</button>
                        <button onClick={() => dispatch({type: COMPLETE, payload: toDo.id})}>COMPLETE</button>
                    </li>
                )}
            </ul>
            <ul>
                {state.completed.length !== 0 && (
                    <>
                        <h2>COMPLETED</h2>
                        {state.completed.map((toDo,index) => (
                            <li key={toDo.id}>
                                <span>{toDo.text}</span>
                                <button onClick={() => dispatch({type: DEL, payload: toDo.id})}>DELETE</button>
                                <button onClick={() => dispatch({type: UNCOMPLETED, payload: toDo.id})}>UNCOMPLETED</button>
                            </li>)
                        )}
                    </>
                )}
            </ul>
        </>
    );
}

export default App;
