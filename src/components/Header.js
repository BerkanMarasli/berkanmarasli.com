import "./Header.css";
import logo from "../images/BM-logo.png";
import handWave from "../images/hand-wave.png";
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
      </div>
    </div>
  );
}

function typeItUserName(getUserName) {
  return (
    <div className="App-header-inner-right-inner-text">
      <TypeIt>Hi {getUserName}!</TypeIt>
    </div>
  );
}

export default Header;
