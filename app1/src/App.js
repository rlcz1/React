import { useState } from "react";
import Board from "./components/Board";
import Counter from "./components/Counter";

function App() {
  const [visible, setVisible] = useState(false);

  const [totalCount, setTotalCount] = useState(0);

  const articles = [{
    id: 1,
    title: 'title1',
    author: 'author1'
  },
  {
    id: 2,
    title: 'title2',
    author: 'author2'
  },
  {
    id: 3,
    title: 'title3',
    author: 'author3'
  }]

  return (<div>
    {/* <button onClick={() => setVisible(!visible)}>Toglle Btn</button>
    {
      visible ? (<h1>text</h1>) : <h1>no</h1>
    }

    {visible && <Board articles={articles}/>} */}
    totalCount: {totalCount}
    <Counter 
      onIncrease={(count) => {setTotalCount(totalCount + 1);}}
      onDecrease={(count) => {setTotalCount(totalCount - 1);}} 
    />
    <Counter 
      onIncrease={(count) => {setTotalCount(totalCount + 1);}}
      onDecrease={(count) => {setTotalCount(totalCount - 1);}} 
    />
    <Counter 
      onIncrease={(count) => {setTotalCount(totalCount + 1);}}
      onDecrease={(count) => {setTotalCount(totalCount - 1);}} 
    />
  </div>);
}

export default App;