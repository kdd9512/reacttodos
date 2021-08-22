import React, {useState} from "react";
import {COMPLETE, DEL, EDIT, UNCOMPLETED} from "../action";
import {useDispatch} from "../context";

export default ({text, id, isCompleted}) => {
    const [editText, setEditText] = useState(text);
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        const {target} = e;
        dispatch({type: EDIT, payload: target[0].value, id});
        target[0].disabled = true;
    }

    const editHandler = (e) => {
        const {target} = e;
        switch (target.nodeName) {
            case "BUTTON":
                const input = target.previousSibling[0];
                input.disabled = false;
                input.focus();
                break;
            default:
                return;
        }
    }

    const onChange = (e) => {
        const {
            target: {value}
        } = e;
        setEditText(value);
    }

    return (
        <li>
            <form onSubmit={onSubmit}>
                {isCompleted ? (
                    <input type="text" value={editText} onChange={onChange} disabled/>
                ) : (
                    <input type="text" value={editText} onChange={onChange} disabled/>
                )}
            </form>
            {!isCompleted ? (
                <>
                    <button onClick={editHandler}>EDIT</button>
                    <button onClick={() => dispatch({type: DEL, payload: id})}>DELETE</button>
                    <button onClick={() => dispatch({type: isCompleted ? UNCOMPLETED : COMPLETE, payload: id})}>
                        {isCompleted ? "UNCOMPLETED" : "COMPLETE"}
                    </button>
                </>
            ) : (
                <>
                    <button onClick={editHandler}>EDIT</button>
                    <button onClick={() => dispatch({type: isCompleted ? UNCOMPLETED : COMPLETE, payload: id})}>
                        {isCompleted ? "UNCOMPLETED" : "COMPLETE"}
                    </button>
                </>
            )}
        </li>
    )
}