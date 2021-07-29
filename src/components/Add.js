import React, {useState, useContext} from "react";
import {ADD} from "../action";
import {useDispatch} from "../context";

export default () => {
    const [newTodo, setNewToDo] = useState("");
    const dispatch = useDispatch();

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
        <form onSubmit={onSubmit}>
            <input
                value={newTodo}
                type="text"
                placeholder="Write TO DO"
                onChange={onChange}
            />
        </form>
    )
}