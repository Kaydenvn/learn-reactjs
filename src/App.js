import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Nghi Long'
  const age = '19'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trixie
        </p>

      <p>Hello {name} {age} chủi</p>
      </header>
    </div>
  );
}

export default App;
