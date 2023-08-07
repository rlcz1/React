import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import AutoCounter from './components/AutoCounter';

// useRef는
// 1. DOM을 선택하는 용도
// 2. 지역변수로 사용하는 용도
// 2. setTimeout, setInterval의 특정 값을 기억하는 용도
// usestae는 값이 변경될 때 다시 렌더링한다
// useRef는 값이 변경되어도 다시 렌더링하지 않는다

function App() {
  const inputRef = useRef();

  return (
    <div className="App">
      <AutoCounter />
      {/* <input ref={inputRef} /> */}
      {/* <button onClick={() => inputRef.current.focus()}>Focus</button> */}
    </div>
  );
}

export default App;
