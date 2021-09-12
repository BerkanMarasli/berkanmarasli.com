import logo from './BM-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-inner container">
          <div className="App-header-inner-left">
            <a href="/" target="_self">
              <img src={logo} className="App-header-logo" alt="BM-Logo" href="https://google.co.uk"/>
            </a>
            <p>Hi there <span>Berkan</span>!</p>
          </div>
          <div className="App-header-inner-right">
            <p>Me</p>
            <p>Blah Blah</p>
            <p>Contact me</p>
          </div>
        </div>
      </header>
      
      <main className="App-main container">
        <input id="user-name-inputText" type="text" name="userName" size="25" maxLength="25" placeholder="Enter name!" autoFocus={true}></input>
        <button id="user-name-button" type="button" name="UNKNOWN" value="UNKNOWN2">Find out about Berkan!</button>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
