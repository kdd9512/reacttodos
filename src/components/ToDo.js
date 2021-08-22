import React from "react";
import {COMPLETE, DEL, EDIT, UNCOMPLETED} from "../action";
import {useDispatch, useState} from "../context";

export default ({text, id, isCompleted}) => {
    const [edit, setEdit] = useState(text);
    const dispatch = useDispatch();

    

    return (
        <li>
            <span>{text}</span>
            {isCompleted ? (
                <>
                    <button onClick={() => dispatch({type: isCompleted ? UNCOMPLETED : COMPLETE, payload: id})}>
                        {isCompleted ? "UNCOMPLETED" : "COMPLETE"}
                    </button>
                    <button onClick={() => dispatch({type: EDIT, payload: text})}>EDIT</button>
                </>
            ) : (
                <>
                    <button onClick={() => dispatch({type: DEL, payload: id})}>DELETE</button>
                    <button onClick={() => dispatch({type: isCompleted ? UNCOMPLETED : COMPLETE, payload: id})}>
                        {isCompleted ? "UNCOMPLETED" : "COMPLETE"}
                    </button>
                </>
            )}
        </li>
    )
}