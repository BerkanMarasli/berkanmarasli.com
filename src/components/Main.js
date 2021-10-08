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
    <main className="App-Main container">
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
    <div className="App-Main-setUserName">
      <img src={logo} id="App-Main-setUserName-logo" alt="BM-Logo" />
      <input
        id="App-Main-setUserName-inputText"
        type="text"
        name="userName"
        size="25"
        maxLength="25"
        placeholder="Enter name!"
        autoFocus={true}
      ></input>
      <button
        id="App-Main-setUserName-button"
        type="button"
        name="UNKNOWN"
        value="UNKNOWN2"
        onClick={(e) => {
          setDisplaySetUserName(false);
          setDisplayMainPage(true);
          setUserName(
            document.getElementById("App-Main-setUserName-inputText").value
          );
        }}
      >
        Find out about Berkan!
      </button>
    </div>
  );
}

function displayUserNameComponent(getUserName) {
  return (
    <div className="App-Main-displayUserName">
      {getUserName.length > 0 && typeItUserName(getUserName)}
      {getUserName.length > 0 && (
        <img
          src={handWave}
          className="App-Main-displayUserName-handWave"
          alt="Hand wave"
        ></img>
      )}
    </div>
  );
}

function typeItUserName(getUserName) {
  return (
    <div className="App-Main-displayUserName-text">
      <TypeIt
        options={{ waitUntilVisible: true }}
        getBeforeInit={(instance) => {
          instance
            .type("Welcome, ")
            .pause(750)
            .delete(9)
            .pause(500)
            .type(
              `Hi, <span id="App-Main-displayUserName-text-UserName">${getUserName}</span>!`
            );
          return instance;
        }}
      ></TypeIt>
    </div>
  );
}

export default Main;
