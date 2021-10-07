import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [getUserName, setUserName] = useState("");

  return (
    <div className="App">
      <Header user={{ getUserName: getUserName }} />
      <Main user={{ setUserName: setUserName }} />
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
