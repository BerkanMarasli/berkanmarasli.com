import "./Header.css";
import logo from "../images/BM-logo.png";
import handWave from "../images/hand-wave.png";

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
        {getUserName.length > 0 && (
          <p className="App-header-inner-right-inner-text">
            Hi{" "}
            <span className="App-header-inner-right-inner-text-display">
              {getUserName}
            </span>
            !
          </p>
        )}
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

export default Header;
