import './App.css';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Logo size={300} />
        <Logo />
        <Paragraph size={30}>Hello World!<code>src/App.js</code></Paragraph>
        <Paragraph color="blue">pigon</Paragraph>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
