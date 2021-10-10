import "./App.css"
import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  const [displayMainPage, setDisplayMainPage] = useState(false)

  return (
    <div className="App">
      <Header
        functions={{
          displayMainPage: displayMainPage,
        }}
      />
      <Main
        functions={{
          setDisplayMainPage: setDisplayMainPage,
        }}
      />
      <Footer functions={{ displayMainPage: displayMainPage }} />
    </div>
  )
}

export default App
