import "./Main.css"
import { useState, useEffect } from "react"
import Content from "./Content"
import logo from "../images/BM-logo.png"
import handWave from "../images/hand-wave.png"
import TypeIt from "typeit-react" // https://typeitjs.com/docs/react

function Main(props) {
  const { setDisplayMainPage } = props.functions
  const [getUserName, setUserName] = useState("")
  const [displaySetUserName, setDisplaySetUserName] = useState(true)
  const [displayUserName, setDisplayUserName] = useState(false)
  const [displayContent, setDisplayContent] = useState(false)

  useEffect(() => {
    handleCookie(setDisplaySetUserName, setDisplayMainPage, setDisplayUserName, setUserName)
  }, [setDisplaySetUserName, setDisplayMainPage])

  return (
    <main className="App-Main container">
      {displaySetUserName
        ? displaySetUserNameComponent(
            setUserName,
            setDisplaySetUserName,
            setDisplayMainPage,
            setDisplayUserName
          )
        : null}
      {displayUserName
        ? displayUserNameComponent(getUserName, setDisplayUserName, setDisplayContent)
        : null}
      {displayContent ? <Content data={{ getUserName: getUserName }} /> : null}
    </main>
  )
}

function handleCookie(setDisplaySetUserName, setDisplayMainPage, setDisplayUserName, setUserName) {
  const allCookies = document.cookie.split("; ")
  for (const cookie of allCookies) {
    if (cookie.slice(0, 15) === "BMSiteUserName=") {
      // Set variable "BMSiteUserName=" as a CONST -> need to check when setting cookie within Content.js
      const cookieUserName = cookie.slice(15, cookie.length)
      setDisplaySetUserName(false)
      setDisplayMainPage(true)
      setDisplayUserName(true)
      setUserName(cookieUserName)
    }
  }
}

function displaySetUserNameComponent(
  setUserName,
  setDisplaySetUserName,
  setDisplayMainPage,
  setDisplayUserName
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
          setDisplaySetUserName(false)
          setDisplayMainPage(true)
          setDisplayUserName(true)
          setUserName(document.getElementById("App-Main-setUserName-inputText").value) // Use states to carry out task
        }}
      >
        Find out about Berkan!
      </button>
    </div>
  )
}

function displayUserNameComponent(getUserName, setDisplayUserName, setDisplayContent) {
  return (
    <div className="App-Main-displayUserName">
      {getUserName.length > 0 && typeItUserName(getUserName)}
      {getUserName.length > 0 && (
        <img src={handWave} className="App-Main-displayUserName-handWave" alt="Hand wave"></img>
      )}
      {proceedToContent(setDisplayUserName, setDisplayContent)}
    </div>
  )
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
            .type(`Hi, <span id="App-Main-displayUserName-text-UserName">${getUserName}</span>!`)
          return instance
        }}
      ></TypeIt>
    </div>
  )
}

function proceedToContent(setDisplayUserName, setDisplayContent) {
  setTimeout(() => {
    setDisplayUserName(false)
    setDisplayContent(true)
  }, 6000)
}

export default Main
