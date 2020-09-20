import React, {useState} from 'react';

import './App.css';

const App = () =>
{
  const[count,setCount] = useState(0);      //State

  return(
    <div className="App">
      <header>Click Button for Magic !</header>
      <h3>Value of Counter : {count}</h3>

      <button onClick = { () => count>=15 ? "" : setCount(count+1) }>Increment Here</button>
      <button onClick = { () => count<=0 ? "" : setCount(count-1) }>Decrement Here</button>
      <button onClick = { () => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;