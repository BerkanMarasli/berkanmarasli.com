import "./Footer.css"
import { FooterIcons } from "./footer-icons/FooterIcons"

export default function Footer(props) {
  const { displayMainPage } = props.functions
  return <footer className="App-Footer">{displayMainPage ? displayFooter() : null}</footer>
}

function displayFooter() {
  return (
    <div className="App-Footer-inner container">
      <p className="App-Footer-inner-marginSpacing">
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
      <p className="App-Footer-inner-marginSpacing">© {new Date().getFullYear()}, Berkan Marasli</p>
      {FooterIcons()}
    </div>
  )
}
