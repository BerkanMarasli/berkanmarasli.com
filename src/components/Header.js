import "./Header.css";
import logo from "../images/BM-logo.png";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import email from "../icons/email.png";

function Header(props) {
  const { displayMainPage } = props.functions;

  return (
    <header className="App-header">
      {displayMainPage ? (
        <div className="App-header-inner container">
          {AppHeaderInnerLeft()}
          {AppHeaderInnerRight()}
        </div>
      ) : null}
    </header>
  );
}

function AppHeaderInnerLeft() {
  return (
    <div className="App-header-inner-left">
      <a href="/" target="_self">
        <img src={logo} className="App-header-inner-left-logo" alt="BM-Logo" />
      </a>
    </div>
  );
}

function AppHeaderInnerRight() {
  return (
    <div className="App-header-inner-right">
      <div className="App-header-inner-right-inner">{displayIcons()}</div>
    </div>
  );
}

function displayIcons() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/berkan-m-3777a9ba/">
        <img
          src={linkedin}
          alt="LinkedIn Icon"
          className="App-header-inner-right-icon"
        ></img>
      </a>
      <a href="https://github.com/BerkanMarasli">
        <img
          src={github}
          alt="Github Icon"
          className="App-header-inner-right-icon"
        ></img>
      </a>
      <a href="/">
        <img
          src={email}
          alt="Email Icon"
          className="App-header-inner-right-icon"
        ></img>
      </a>
    </div>
  );
}

export default Header;
