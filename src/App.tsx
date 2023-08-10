import React, { useState, useCallback } from 'react';
import './App.css';
import AppChild from './AppChild';

const MemoAppChild = React.memo(AppChild);

function App() {
  const [count, setCount] = useState(0);
  const [childData, setChildData] = useState(['1', '3', '5']);

  const cacheOnClick = useCallback((e) => {
    console.log(123);
  }, []);

  console.log('App render...');

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            // setChildData(Math.random().toString());
          }}
        >
          count is {count}
        </button>
      </div>
      <MemoAppChild
        data={childData}
        testBool={true}
        testObj={{}}
        onClick={cacheOnClick}
      />
    </>
  );
}

export default App;
