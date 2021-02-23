import logo from './logo.svg';
import './App.css';
import People from './People';
import Place from './Place';

// so these are FUNCTIONAL components, meaning that they are functions
// that can be called that have similar functionality to class components.
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
        <Place place="Home" />
      </header>
    </div>
  );
}

export default App;
