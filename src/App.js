import React, {useReducer, useState} from 'react';


const initialState = {
    toDos: []
}

const ADD = "increment";

const reducer = (state, action) => {
    switch (action) {
        case ADD :
            return {count: state.count + 1};
        default:
            return;
    }
}






function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewToDo] = useState();
    const onSubmit = e => {
        e.preventDefault();
    }
    const onChange = e => {
        const {
            target: {value}
        } = e;
        setNewToDo(value);
    };

  return (
    <>
      <h1>TODOS</h1>
       <form onSubmit={onSubmit}>
           <input
               value={newTodo}
               type="text"
               placeholder="Write TO DO"
               onChange={onChange}
           />
       </form>

    </>
  );
}

export default App;
