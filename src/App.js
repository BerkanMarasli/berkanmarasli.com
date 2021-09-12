import logo from './images/BM-logo.png';
import './App.css';
import { useState } from 'react';
import handWave from './images/hand-wave.png';

function App() {
  const [getUserName, setUserName] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-inner container">
          <div className="App-header-inner-left">
            <a href="/" target="_self">
              <img src={logo} className="App-header-inner-left-logo" alt="BM-Logo"/>
            </a>
          </div>
          <div className="App-header-inner-right">
            <div className="App-header-inner-right-inner">
              {getUserName.length > 0 && <p className="App-header-inner-right-inner-text">Hi <span>{getUserName}</span>!</p>}
              {getUserName.length > 0 && <img src={handWave} className="App-header-inner-right-inner-handWave" alt="Hand wave"></img>}
            </div>
          </div>
        </div>
      </header>
      
      <main className="App-main container">
        <input id="App-main-user-inputText" type="text" name="userName" size="25" maxLength="25" placeholder="Enter name!" autoFocus={true}></input>
        <button id="App-main-user-button" type="button" name="UNKNOWN" value="UNKNOWN2" onClick={(e) => setUserName(document.getElementById("App-main-user-inputText").value)}>Find out about Berkan!</button>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
