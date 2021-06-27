import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <>
      <h1>To Dos</h1>
    </>
  );
}

export default App;
