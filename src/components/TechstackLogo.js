function TechstackLogo(props) {
  const LogoLink = props.LogoLink;
  const LogoName = props.LogoName;

  return (
    <div className="slide">
      <img
        className="App-Main-Content-Techstack-logo"
        src={LogoLink}
        alt={`${LogoName} Logo`}
      ></img>
    </div>
  );
}

export default TechstackLogo;
