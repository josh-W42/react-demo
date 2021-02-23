import logo from './logo.svg';
import './App.css';
import People from './People';
import Place from './Place';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn react
        <People person="Josh" />
        <People person="Billy" />
        <People person="Trey" />
        <Place place="Home" />
      </header>
    </div>
  );
}

export default App;
