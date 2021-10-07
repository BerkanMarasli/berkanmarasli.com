import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [getUserName, setUserName] = useState("");

  return (
    <div className="App">
      <Header user={{ getUserName: getUserName }} />

      <main className="App-main container">
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
          onClick={(e) =>
            setUserName(
              document.getElementById("App-main-user-inputText").value
            )
          }
        >
          Find out about Berkan!
        </button>
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
