import './App.css';
import Board from './components/Board';
import Pagination from './components/Pagination';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(0);

  const articles = new Array(100).fill().map((_, i) => ({
    id: i+1,
    title: `Article #${i+1}`
  }));
  const limit = 10;
  const offset = page * limit;

  return (
    <div className="App">
      <Pagination 
        defaultPage={0} 
        limit={limit} 
        total={articles.length} 
        onChange={setPage} 
      />
      <Board articles={articles.slice(offset, offset + limit)} /> 
    </div>
  );
}

export default App;
