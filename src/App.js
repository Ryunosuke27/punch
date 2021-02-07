import logo from './logo.svg';
import './App.css';
import Api from './components/Api'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Api/>
      </header>
    </div>
  );
}

export default App;
