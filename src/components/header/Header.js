import "./Header.css"
import logo from "../../images/BM-logo.png"
// import { ICON } from "../../icons"
// import { EXTERNAL_LINKS } from "../../constants"

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
  // return (
  //   <div>
  //     <a href={EXTERNAL_LINKS.linkedinProfile}>
  //       <img src={ICON.linkedin} alt="LinkedIn Icon" className="App-Header-inner-right-icon"></img>
  //     </a>
  //     <a href={EXTERNAL_LINKS.githubProfile}>
  //       <img src={ICON.github} alt="Github Icon" className="App-Header-inner-right-icon"></img>
  //     </a>
  //     <a href={`mailto:${EXTERNAL_LINKS.emailAddress}`}>
  //       <img src={ICON.email} alt="Email Icon" className="App-Header-inner-right-icon"></img>
  //     </a>
  //   </div>
  // )
  return <p>THIS NEEDS SOME CONTENT</p>
}

export default Header
