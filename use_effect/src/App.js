import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times.`)
  }, [count]); // count가 변경될 때만 실행

  useEffect(() => { // 초기 이벤트 작성
    console.log('Component did mount.');
    const handleScroll = () => {
      console.log(window.scrollY);
    } // 컴포넌트가 처음 로드될 때 실행

    document.addEventListener('scroll', handleScroll); // 전역적인 이벤트를 사용할 때 쓸 수 있다.
    return () => document.removeEventListener('scroll', handleScroll); // return으로 반환한 함수는 컴포넌트가 제거될 때 실행된다.
  }, []);

  return (
    <div className="App">
      <h1>You clicked {count} times.</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div style={{height: 10000}}></div>
    </div>
  );
}

export default App;
