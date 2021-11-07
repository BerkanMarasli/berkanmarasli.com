import "./Footer.css"
import linkedin from "../icons/linkedin.png"
import github from "../icons/github.png"
import email from "../icons/email.png"

function Footer(props) {
  const { displayMainPage } = props.functions
  return <footer className="App-Footer">{displayMainPage ? displayFooter() : null}</footer>
}

function displayFooter() {
  return (
    <div className="App-Footer-inner container">
      <p>
        This website is{" "}
        <a
          className="App-Footer-inner-textLinks"
          href="https://github.com/BerkanMarasli/berkanmarasli.com"
        >
          open source
        </a>
        . Found a mistake?{" "}
        <a
          className="App-Footer-inner-textLinks"
          href="https://github.com/BerkanMarasli/berkanmarasli.com/issues"
        >
          Raise an issue
        </a>
        !
      </p>
      <p>© 2021, Berkan Marasli</p>
      {displayIcons()}
    </div>
  )
}

function displayIcons() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/berkanmarasli">
        <img src={linkedin} alt="LinkedIn Icon" className="App-Footer-inner-icon"></img>
      </a>
      <a href="https://github.com/BerkanMarasli">
        <img src={github} alt="Github Icon" className="App-Footer-inner-icon"></img>
      </a>
      <a href="mailto:berkan.marasli@hotmail.com">
        <img src={email} alt="Email Icon" className="App-Footer-inner-icon"></img>
      </a>
    </div>
  )
}

export default Footer
