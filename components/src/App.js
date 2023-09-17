import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import EmojiPage from './pages/EmojiPage';
import Index from './pages/index';
import ViewEmoji from './pages/ViewEmoji';
import Location from './pages/Location';
import Location2 from './pages/Location2';

const App = () => {
  return (
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/Emoji" element={<EmojiPage />} />
        <Route path="/Emoji/:Emoji" element={<ViewEmoji />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Location2" element={<Location2 />} />
      </Routes>
  );
}

export default App;
