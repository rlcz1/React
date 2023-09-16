import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import EmojiPage from './pages/EmojiPage';
import Index from './pages/index';
import ViewEmoji from './pages/ViewEmoji';
function App() {

  return (
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/Emoji" element={<EmojiPage />} />
        <Route path="/Emoji/:Emoji" element={<ViewEmoji />} />
      </Routes>
  );
}

export default App;
