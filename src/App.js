import logo from './logo.svg';
import './App.css';
function snack(){
  return ("ritz crackers")
}

function App() {
  const greeting = "hi";


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{greeting}</h1>
        <p>
          {snack()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hiiiiiii
        </a>
      </header>
    </div>
  );
}

export default App;
