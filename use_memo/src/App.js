import logo from './logo.svg';
import './App.css';
import ShowSum from './components/ShowSum';
import { useState } from 'react';

// useMemo
// 최적화를 위해서 필요한hooks
// 1. 함수 컴포넌트는 자신의 상태가 변경될 때 리렌더링 된다.
// 2. 부모 컴포넌트로부터 받는 prop이 변경될 때 리렌더링 된다.
// 3. 부모 컴포넌트의 상태가 변경되면 리렌더링 된다.
// 만약 연산의 속도가 느린 컴포넌트라면, 리렌더링이 자주 일어나는 것은 성능에 좋지 않다.

function App() {
  const [label, setLabel] = useState('Result');
  return (
    <div className="App">
      <button onClick={() => setLabel(label + ":")}>btn</button>
      <ShowSum label={label} n={100000000} />
    </div>
  );
}

export default App;
