import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [displayMainPage, setDisplayMainPage] = useState(false);

  return (
    <div className="App">
      <Header
        functions={{
          displayMainPage: displayMainPage,
        }}
      />
      <Main
        functions={{
          displayMainPage: displayMainPage,
          setDisplayMainPage: setDisplayMainPage,
        }}
      />
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
