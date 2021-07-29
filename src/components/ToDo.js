import React from "react";
import {COMPLETE, DEL, UNCOMPLETED} from "../action";
import {useDispatch} from "../context";

export default ({text,id,isCompleted}) => {
    const dispatch = useDispatch();
    return (
        <li>
            <span>{text}</span>
            <button onClick={() => dispatch({type: DEL, payload: id})}>DELETE</button>
            <button onClick={() => dispatch({type: isCompleted ? UNCOMPLETED : COMPLETE, payload: id})}>
                {isCompleted ? "UNCOMPLETED" : "COMPLETE"}
            </button>
        </li>
    )
}