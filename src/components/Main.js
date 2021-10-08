import "./Main.css";
import { useState } from "react";
import logo from "../images/BM-logo.png";
import handWave from "../images/hand-wave.png";
import TypeIt from "typeit-react"; // https://typeitjs.com/docs/react

function Main(props) {
  const { setDisplayMainPage } = props.functions;
  const [getUserName, setUserName] = useState("");
  const [displaySetUserName, setDisplaySetUserName] = useState(true);

  return (
    <main className="App-main container">
      {displaySetUserName
        ? displaySetUserNameComponent(
            setUserName,
            setDisplaySetUserName,
            setDisplayMainPage
          )
        : null}
      {displayUserNameComponent(getUserName)}
    </main>
  );
}

function displaySetUserNameComponent(
  setUserName,
  setDisplaySetUserName,
  setDisplayMainPage
) {
  return (
    <div className="App-main-setUserName">
      <img src={logo} id="App-main-setUserName-logo" alt="BM-Logo" />
      <input
        id="App-main-user-inputText"
        type="text"
        name="userName"
        size="25"
        maxLength="25"
        placeholder="Enter name!"
        autoFocus={true}
      ></input>
      <button
        id="App-main-user-button"
        type="button"
        name="UNKNOWN"
        value="UNKNOWN2"
        onClick={(e) => {
          setDisplaySetUserName(false);
          setDisplayMainPage(true);
          setUserName(document.getElementById("App-main-user-inputText").value);
        }}
      >
        Find out about Berkan!
      </button>
    </div>
  );
}

function displayUserNameComponent(getUserName) {
  return (
    <div>
      {getUserName.length > 0 && typeItUserName(getUserName)}
      {getUserName.length > 0 && (
        <img
          src={handWave}
          className="App-header-inner-right-inner-handWave"
          alt="Hand wave"
        ></img>
      )}
    </div>
  );
}

function typeItUserName(getUserName) {
  return (
    <div className="App-header-inner-right-inner-text">
      <TypeIt
        options={{ waitUntilVisible: true }}
        getBeforeInit={(instance) => {
          instance
            .type("Welcome, ")
            .pause(750)
            .delete(9)
            .pause(500)
            .type(
              `Hi, <span id="App-header-inner-right-inner-userName">${getUserName}</span>!`
            );
          return instance;
        }}
      ></TypeIt>
    </div>
  );
}

export default Main;
