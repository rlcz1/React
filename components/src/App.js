import './App.css';
import { useState } from 'react';
import Cafeteria from './components/Cafeteria';
import Logo from './components/Logo';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import EmojiList from './components/EmojiList';
import emojiJson from './data/emoji.json';


function App() {

  const [keyword, setKeyword] = useState('');

// onSearch={setKeyword} 는 SearchBox 컴포넌트에 props로 전달되는 값이다.
//  onSearch은 setKeyword 함수로 설정되어 있으므로, 검색어가 변경될 때마다 setKeyword 함수가 호출된다.
  return (
    <div className="App">
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} keyword={keyword} />
    </div>
  );
}

export default App;
