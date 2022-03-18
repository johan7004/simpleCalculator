import logo from './logo.svg';
import CalcValue from './components/calcValue/CalcValue'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CalcValue></CalcValue>
      </header>
    </div>
  );
}

export default App;
