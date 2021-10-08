import "./Header.css";
import logo from "../images/BM-logo.png";
import handWave from "../images/hand-wave.png";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import email from "../icons/email.png";
import TypeIt from "typeit-react"; // https://typeitjs.com/docs/react

function Header(props) {
  const { getUserName } = props.user;
  return (
    <header className="App-header">
      <div className="App-header-inner container">
        {AppHeaderinnerleft()}
        {AppHeaderinnerright(getUserName)}
      </div>
    </header>
  );
}

function AppHeaderinnerleft() {
  return (
    <div className="App-header-inner-left">
      <a href="/" target="_self">
        <img src={logo} className="App-header-inner-left-logo" alt="BM-Logo" />
      </a>
    </div>
  );
}

function AppHeaderinnerright(getUserName) {
  return (
    <div className="App-header-inner-right">
      <div className="App-header-inner-right-inner">
        {getUserName.length > 0 && typeItUserName(getUserName)}
        {getUserName.length > 0 && (
          <img
            src={handWave}
            className="App-header-inner-right-inner-handWave"
            alt="Hand wave"
          ></img>
        )}
        {displayIcons()}
      </div>
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
