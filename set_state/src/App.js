import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [btn, setBtn] = useState(['Click Me', 'Click Me Again']);
  const [thumb, setThumb] = useState(0);

  const changeBtn = () => {
    // if (btn[0] === 'hi') {
      // setBtn(['Click Me', 'Click Me Again']);
    // } else {
      // setBtn(['hi', 'hii']);
    // }
    let newArr = [...btn]; // ... is spread operator 중괄호 제거, 배열을 복사, 다시 중괄호
    newArr[0] = 'hi';
    setBtn(newArr);
  }

  return (
    <div className="App">
      <div className='nav'>
        <button onClick={changeBtn}>{btn[0]} & {btn[1]}</button>
        <button onClick={ () => {setThumb(thumb + 1)} }> 👍 {thumb}</button>
      </div>
    </div>
  );
}

export default App;
