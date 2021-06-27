import React, {useReducer} from 'react';


const incr = "increment";
const decr = "decrement";

const reducer = (state, action) => {
    switch (action.type) {
        case incr :
            return {count: state.count + 1};
        case decr :
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <>
      <h1>{state.count}</h1>

        {/*<button onClick={() => dispatch({type: incr})}>increase</button>*/}
        <button onClick={() => dispatch(incr)}>increase</button>

        {/*<button onClick={() => dispatch({type: decr})}>decrease</button>*/}
        <button onClick={() => dispatch(decr)}>decrease</button>
    </>
  );
}

export default App;
