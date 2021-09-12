import logo from './BM-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input id="user-name-inputText" type="text" name="userName" size="25" maxLength="25" placeholder="Enter name!" autoFocus={true}></input>
        <button id="user-name-button" type="button" name="UNKNOWN" value="UNKNOWN2">Find out about Berkan!</button>
      </header>
    </div>
  );
}

export default App;
