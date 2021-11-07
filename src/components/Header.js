import "./Header.css"
import logo from "../images/BM-logo.png"
import linkedin from "../icons/linkedin.png"
import github from "../icons/github.png"
import email from "../icons/email.png"

function Header(props) {
  const { displayMainPage } = props.functions

  return (
    <header className="App-Header">
      {displayMainPage ? (
        <div className="App-Header-inner container">
          {AppHeaderInnerLeft()}
          {AppHeaderInnerRight()}
        </div>
      ) : null}
    </header>
  )
}

function AppHeaderInnerLeft() {
  return (
    <div>
      <a href="/" target="_self">
        <img src={logo} className="App-Header-inner-left-logo" alt="BM-Logo" />
      </a>
    </div>
  )
}

function AppHeaderInnerRight() {
  return <div className="App-Header-inner-right">{displayIcons()}</div>
}

function displayIcons() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/berkanmarasli">
        <img src={linkedin} alt="LinkedIn Icon" className="App-Header-inner-right-icon"></img>
      </a>
      <a href="https://github.com/BerkanMarasli">
        <img src={github} alt="Github Icon" className="App-Header-inner-right-icon"></img>
      </a>
      <a href="mailto:berkan.marasli@hotmail.com">
        <img src={email} alt="Email Icon" className="App-Header-inner-right-icon"></img>
      </a>
    </div>
  )
}

export default Header
